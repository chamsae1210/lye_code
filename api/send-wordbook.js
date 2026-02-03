const TARGET_EMAIL = "sivial12100@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { words } = req.body || {};

  if (!Array.isArray(words) || words.length === 0) {
    return res.status(400).json({ error: "전송할 단어가 없습니다." });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: "RESEND_API_KEY 환경 변수가 설정되지 않았습니다." });
  }

  const from = process.env.RESEND_FROM || "Japanese Quiz <onboarding@resend.dev>";

  const subject = "일본어 퀴즈 틀린 단어장";

  const htmlList = words
    .map((word) => {
      const ja = escapeHtml(word.ja || "");
      const reading = word.reading ? `<span style="color:#8D99AE;font-size:12px;">${escapeHtml(word.reading)}</span>` : "";
      const ko = escapeHtml(word.ko || "");
      const date = word.date ? `<div style="color:#8D99AE;font-size:12px;margin-top:2px;">틀린 날짜: ${escapeHtml(word.date)}</div>` : "";
      return `
        <li style="margin-bottom:14px;">
          <div style="font-size:18px;font-weight:600;">${ja}</div>
          ${reading}
          <div style="margin-top:4px;font-size:14px;">${ko}</div>
          ${date}
        </li>
      `;
    })
    .join("");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1C1C1C;">
      <h2 style="font-size:20px;">틀린 단어 목록</h2>
      <p style="font-size:14px;color:#4A4A4A;">아래는 최근 퀴즈에서 틀린 단어들입니다.</p>
      <ul style="padding-left:16px;list-style-type:disc;margin-top:12px;">
        ${htmlList}
      </ul>
      <p style="font-size:12px;color:#8D99AE;margin-top:16px;">이메일 전송 기능은 Resend를 사용합니다.</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TARGET_EMAIL],
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data?.message || data?.error || "이메일 전송 중 오류가 발생했습니다.";
      return res.status(response.status).json({ error: errorMessage });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message || "이메일 전송에 실패했습니다." });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
