// 단어 목록: localStorage에서 로드, 사용자가 추가한 단어만 저장
const VOCABULARY_STORAGE_KEY = "japanese-quiz-vocabulary";
let VOCABULARY = [];

function loadVocabularyFromStorage() {
  try {
    const raw = localStorage.getItem(VOCABULARY_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) VOCABULARY = parsed;
  } catch (e) {
    console.warn("Failed to load vocabulary.", e);
  }
}

function saveVocabularyToStorage() {
  try {
    localStorage.setItem(VOCABULARY_STORAGE_KEY, JSON.stringify(VOCABULARY));
  } catch (e) {
    console.warn("Failed to save vocabulary.", e);
  }
}

// DOM
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const levelSelect = document.getElementById("levelSelect");
const questionCountSelect = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");
const questionReading = document.getElementById("questionReading");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const choicesContainer = document.getElementById("choices");
const yomiganaInputWrap = document.getElementById("yomiganaInputWrap");
const yomiganaInput = document.getElementById("yomiganaInput");
const yomiganaSubmit = document.getElementById("yomiganaSubmit");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreValue = document.getElementById("scoreValue");
const scoreTotal = document.getElementById("scoreTotal");
const scoreMessage = document.getElementById("scoreMessage");
const openWordbookBtn = document.getElementById("openWordbookBtn");
const wordbookCount = document.getElementById("wordbookCount");
const wordbookModal = document.getElementById("wordbookModal");
const closeWordbookBtn = document.getElementById("closeWordbookBtn");
const resultWordbookSection = document.getElementById("resultWordbookSection");
const resultWordbookList = document.getElementById("resultWordbookList");
const wordbookList = document.getElementById("wordbookList");
const wordbookEmpty = document.getElementById("wordbookEmpty");
const wordbookPagination = document.getElementById("wordbookPagination");
const wordbookPageInfo = document.getElementById("wordbookPageInfo");
const wordbookPrevBtn = document.getElementById("wordbookPrev");
const wordbookNextBtn = document.getElementById("wordbookNext");
const resultWordbookPagination = document.getElementById("resultWordbookPagination");
const resultWordbookPageInfo = document.getElementById("resultWordbookPageInfo");
const resultWordbookPrevBtn = document.getElementById("resultWordbookPrev");
const resultWordbookNextBtn = document.getElementById("resultWordbookNext");
const emailForm = document.getElementById("emailForm");
const emailStatus = document.getElementById("emailStatus");
const emailSubmitBtn = emailForm?.querySelector("button");
const addWordForm = document.getElementById("addWordForm");
const addWordJa = document.getElementById("addWordJa");
const addWordReading = document.getElementById("addWordReading");
const addWordKo = document.getElementById("addWordKo");
const addWordLevel = document.getElementById("addWordLevel");
const vocabularyCount = document.getElementById("vocabularyCount");

const WORDS_PER_PAGE = 6;
let wordbookCurrentPage = 0;

let mode = "ja-to-ko";
let totalQuestions = 10;
let currentIndex = 0;
let score = 0;
let quizList = [];
let levelPool = [];
let answered = false;
let wrongWordsBook = []; // 틀린 단어장 { ja, reading, ko, date }

const WORDS_STORAGE_KEY = "japanese-quiz-wrong-words";

function loadWrongWordsFromStorage() {
  try {
    const raw = localStorage.getItem(WORDS_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      wrongWordsBook = parsed;
    }
  } catch (error) {
    console.warn("Failed to load wordbook from storage.", error);
  }
}

function saveWrongWordsToStorage() {
  try {
    localStorage.setItem(WORDS_STORAGE_KEY, JSON.stringify(wrongWordsBook));
  } catch (error) {
    console.warn("Failed to save wordbook to storage.", error);
  }
}

// 이메일 전송 상태 표시
function showEmailStatus(type, message) {
  if (!emailStatus) return;
  emailStatus.textContent = message;
  emailStatus.classList.remove("hidden", "success", "error");
  emailStatus.classList.add(type === "success" ? "success" : "error");
}

function hideEmailStatusWithDelay() {
  if (!emailStatus) return;
  setTimeout(() => {
    emailStatus.classList.add("hidden");
  }, 4000);
}

emailForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!wrongWordsBook.length) {
    showEmailStatus("error", "보낼 단어가 없습니다. 퀴즈를 먼저 풀어 주세요.");
    hideEmailStatusWithDelay();
    return;
  }
  emailForm.classList.add("sending");
  if (emailSubmitBtn) {
    emailSubmitBtn.disabled = true;
    emailSubmitBtn.textContent = "전송 중...";
  }
  try {
    const response = await fetch("/api/send-wordbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ words: wrongWordsBook }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.error || "이메일 전송에 실패했습니다.");
    }
    showEmailStatus("success", "sivial12100@gmail.com 으로 전송했습니다!");
  } catch (error) {
    showEmailStatus("error", error.message || "이메일 전송에 실패했습니다.");
  } finally {
    if (emailSubmitBtn) {
      emailSubmitBtn.disabled = false;
      emailSubmitBtn.textContent = "이메일 전송";
    }
    emailForm.classList.remove("sending");
    hideEmailStatusWithDelay();
  }
});

// 모드 버튼
document.querySelectorAll(".btn-mode").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".btn-mode").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    mode = btn.dataset.mode;
  });
});
document.querySelector('.btn-mode[data-mode="ja-to-ko"]').classList.add("active");

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWrongChoices(correctKo, count = 3, pool) {
  const source = pool && pool.length > 0 ? pool : VOCABULARY;
  const others = source.filter((v) => v.ko !== correctKo);
  return shuffle(others).slice(0, count).map((v) => v.ko);
}

function updateVocabularyCount() {
  if (vocabularyCount) vocabularyCount.textContent = `현재 단어 ${VOCABULARY.length}개`;
}

addWordForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const ja = (addWordJa?.value || "").trim();
  const reading = (addWordReading?.value || "").trim();
  const ko = (addWordKo?.value || "").trim();
  const level = (addWordLevel?.value || "n5").toLowerCase();
  if (!ja || !reading || !ko) {
    alert("한자, 요미가나, 한국어 뜻을 모두 입력해 주세요.");
    return;
  }
  VOCABULARY.push({ ja, reading, ko, level });
  saveVocabularyToStorage();
  updateVocabularyCount();
  addWordJa.value = "";
  addWordReading.value = "";
  addWordKo.value = "";
  if (addWordJa) addWordJa.focus();
});

function startQuiz() {
  if (VOCABULARY.length === 0) {
    alert("단어를 먼저 추가해 주세요.");
    return;
  }
  const level = levelSelect.value;
  levelPool = VOCABULARY.filter((v) => v.level === level);
  if (levelPool.length === 0) {
    alert("선택한 난이도에 단어가 없습니다. 다른 난이도를 선택해 주세요.");
    return;
  }
  const pool = mode === "yomigana-input"
    ? levelPool.filter((v) => v.reading && v.reading.trim())
    : levelPool;
  if (pool.length === 0) {
    alert("요미가나 입력 모드에서는 읽기가 있는 단어만 나옵니다. 선택한 난이도에 해당 단어가 없습니다.");
    return;
  }
  const requested = Number(questionCountSelect.value);
  totalQuestions = Math.min(requested, pool.length);
  quizList = shuffle(pool).slice(0, totalQuestions);
  currentIndex = 0;
  score = 0;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

function normalizeReading(str) {
  if (!str || typeof str !== "string") return "";
  const s = str.trim().replace(/\s+/g, "");
  return s.split("").map((c) => {
    const code = c.charCodeAt(0);
    if (code >= 0x30a1 && code <= 0x30f6) return String.fromCharCode(code - 0x60);
    return c;
  }).join("");
}

function showQuestion() {
  answered = false;
  feedbackEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  const item = quizList[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  progressFill.style.width = `${progress}%`;
  questionCounter.textContent = `${currentIndex + 1} / ${totalQuestions}`;

  const pool = levelPool.length > 0 ? levelPool : VOCABULARY;
  if (mode === "yomigana-input") {
    choicesContainer.classList.add("hidden");
    choicesContainer.innerHTML = "";
    if (yomiganaInputWrap) yomiganaInputWrap.classList.remove("hidden");
    if (questionReading) {
      questionReading.textContent = "";
      questionReading.classList.add("hidden");
    }
    questionText.textContent = item.ja;
    questionHint.textContent = "읽기를 히라가나로 입력하세요";
    if (yomiganaSubmit) yomiganaSubmit.classList.remove("hidden");
    if (yomiganaInput) {
      yomiganaInput.value = "";
      yomiganaInput.disabled = false;
      yomiganaInput.classList.remove("correct", "wrong");
      setTimeout(() => yomiganaInput.focus(), 100);
    }
    return;
  }

  if (yomiganaInputWrap) yomiganaInputWrap.classList.add("hidden");
  choicesContainer.classList.remove("hidden");
  if (mode === "ja-to-ko") {
    questionText.textContent = item.ja;
    questionHint.textContent = "뜻을 고르세요";
    const options = [item.ko, ...getWrongChoices(item.ko, 3, pool)];
    renderChoices(shuffle(options), item.ko, (choice) => choice === item.ko, item);
  } else {
    questionText.textContent = item.ko;
    questionHint.textContent = "일본어로 맞는 것을 고르세요";
    const wrongJas = pool.filter((v) => v.ja !== item.ja).map((v) => v.ja);
    const options = [item.ja, ...shuffle(wrongJas).slice(0, 3)];
    renderChoices(shuffle(options), item.ja, (choice) => choice === item.ja, item);
  }
}

function checkYomiganaAnswer() {
  if (answered || !yomiganaInput) return;
  const item = quizList[currentIndex];
  const correctReading = (item.reading || "").trim();
  if (!correctReading) return;
  const userRaw = yomiganaInput.value;
  const userNorm = normalizeReading(userRaw);
  const correctNorm = normalizeReading(correctReading);
  const correct = userNorm === correctNorm;
  answered = true;
  if (correct) score++;
  yomiganaInput.disabled = true;
  yomiganaInput.classList.add(correct ? "correct" : "wrong");
  if (yomiganaSubmit) yomiganaSubmit.classList.add("hidden");
  if (questionReading) {
    questionReading.textContent = correctReading;
    questionReading.classList.remove("hidden");
  }
  questionHint.textContent = item.ko;
  if (!correct && !wrongWordsBook.some((w) => w.ja === item.ja)) {
    const d = new Date();
    wrongWordsBook.push({
      ja: item.ja,
      reading: item.reading || "",
      ko: item.ko,
      date: `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`,
    });
    saveWrongWordsToStorage();
  }
  const wrongMsg = `오답입니다. 정답: ${correctReading}`;
  feedbackEl.textContent = correct ? "정답입니다!" : wrongMsg;
  feedbackEl.className = `feedback ${correct ? "correct-msg" : "wrong-msg"}`;
  feedbackEl.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function renderChoices(options, correctAnswer, isCorrect, item) {
  choicesContainer.innerHTML = "";
  const reading = item.reading || "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const correct = isCorrect(opt);
      if (correct) score++;
      btn.classList.add(correct ? "correct" : "wrong");
      if (!correct) {
        const correctBtn = [...choicesContainer.querySelectorAll(".choice-btn")].find(
          (b) => b.textContent === correctAnswer
        );
        if (correctBtn) correctBtn.classList.add("correct");
        if (!wrongWordsBook.some((w) => w.ja === item.ja)) {
          const d = new Date();
          wrongWordsBook.push({
            ja: item.ja,
            reading: item.reading || "",
            ko: item.ko,
            date: `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`,
          });
          saveWrongWordsToStorage();
        }
      }
      let wrongMsg = `오답입니다. 정답: ${correctAnswer}`;
      if (reading) {
        if (mode === "ja-to-ko") wrongMsg += ` (읽기: ${reading})`;
        else wrongMsg += `（${reading}）`;
      }
      feedbackEl.textContent = correct ? "정답입니다!" : wrongMsg;
      feedbackEl.className = `feedback ${correct ? "correct-msg" : "wrong-msg"}`;
      feedbackEl.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      [...choicesContainer.querySelectorAll(".choice-btn")].forEach((b) => (b.disabled = true));
    });
    choicesContainer.appendChild(btn);
  });
}

function renderWordbook() {
  const count = wrongWordsBook.length;
  wordbookCount.textContent = `(${count})`;
  if (count === 0) {
    resultWordbookSection.classList.add("hidden");
    wordbookList.innerHTML = "";
    resultWordbookList.innerHTML = "";
    wordbookEmpty.classList.remove("hidden");
    wordbookList.classList.add("hidden");
    return;
  }
  function createWordbookItem(w) {
    const li = document.createElement("li");
    li.className = "wrong-word-item";
    const jaHtml = w.reading
      ? `<ruby>${escapeHtml(w.ja)}<rt>${escapeHtml(w.reading)}</rt></ruby>`
      : escapeHtml(w.ja);
    li.innerHTML = `
      <div class="wrong-word-content">
        <div class="wrong-word-ja">${jaHtml}</div>
        <div class="wrong-word-ko">${escapeHtml(w.ko)}</div>
      </div>
      <button type="button" class="btn btn-remove-word" aria-label="삭제">×</button>
    `;
    if (w.reading) {
      li.querySelector(".wrong-word-content").addEventListener("click", (e) => {
        if (e.target.closest(".btn-remove-word")) return;
        li.classList.toggle("show-reading");
      });
    }
    li.querySelector(".btn-remove-word").addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromWordbook(w.ja);
    });
    return li;
  }
  const parseDate = (s) => {
    if (s === "날짜 없음") return new Date(0);
    const parts = s.split("/").map(Number);
    return new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
  };
  const sorted = [...wrongWordsBook].sort((a, b) => {
    const da = a.date || "날짜 없음";
    const db = b.date || "날짜 없음";
    return parseDate(db) - parseDate(da);
  });
  const totalPages = Math.max(1, Math.ceil(sorted.length / WORDS_PER_PAGE));
  if (wordbookCurrentPage >= totalPages) wordbookCurrentPage = Math.max(0, totalPages - 1);
  const start = wordbookCurrentPage * WORDS_PER_PAGE;
  const pageWords = sorted.slice(start, start + WORDS_PER_PAGE);

  const byDateOnPage = {};
  pageWords.forEach((w) => {
    const d = w.date || "날짜 없음";
    if (!byDateOnPage[d]) byDateOnPage[d] = [];
    byDateOnPage[d].push(w);
  });
  const datesOnPage = Object.keys(byDateOnPage).sort((a, b) => parseDate(b) - parseDate(a));

  function fillList(container) {
    container.innerHTML = "";
    datesOnPage.forEach((dateStr) => {
      const groupLi = document.createElement("li");
      groupLi.className = "wordbook-date-group";
      const header = document.createElement("div");
      header.className = "wordbook-date-header";
      header.textContent = dateStr;
      const wordsUl = document.createElement("ul");
      wordsUl.className = "wordbook-date-words";
      byDateOnPage[dateStr].forEach((w) => wordsUl.appendChild(createWordbookItem(w)));
      groupLi.appendChild(header);
      groupLi.appendChild(wordsUl);
      container.appendChild(groupLi);
    });
  }
  fillList(wordbookList);
  fillList(resultWordbookList);

  if (sorted.length > WORDS_PER_PAGE) {
    wordbookPagination.classList.remove("hidden");
    resultWordbookPagination.classList.remove("hidden");
    wordbookPageInfo.textContent = `${wordbookCurrentPage + 1} / ${totalPages}`;
    resultWordbookPageInfo.textContent = `${wordbookCurrentPage + 1} / ${totalPages}`;
    wordbookPrevBtn.disabled = wordbookCurrentPage === 0;
    wordbookNextBtn.disabled = wordbookCurrentPage === totalPages - 1;
    resultWordbookPrevBtn.disabled = wordbookCurrentPage === 0;
    resultWordbookNextBtn.disabled = wordbookCurrentPage === totalPages - 1;
  } else {
    wordbookPagination.classList.add("hidden");
    resultWordbookPagination.classList.add("hidden");
  }

  wordbookEmpty.classList.add("hidden");
  if (wordbookList.classList.contains("hidden")) wordbookList.classList.remove("hidden");
  if (!resultScreen.classList.contains("hidden")) {
    resultWordbookSection.classList.remove("hidden");
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function removeFromWordbook(ja) {
  wrongWordsBook = wrongWordsBook.filter((w) => w.ja !== ja);
  renderWordbook();
  saveWrongWordsToStorage();
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreValue.textContent = score;
  scoreTotal.textContent = ` / ${totalQuestions}`;
  const pct = (score / totalQuestions) * 100;
  if (pct >= 90) scoreMessage.textContent = "훌륭해요! 거의 다 맞추셨네요.";
  else if (pct >= 70) scoreMessage.textContent = "잘했어요! 조금만 더 연습해 보세요.";
  else scoreMessage.textContent = "다시 도전해 보세요. 꾸준히 하면 늘어요.";
  renderWordbook();
  if (wrongWordsBook.length > 0) resultWordbookSection.classList.remove("hidden");
}

function goNext() {
  currentIndex++;
  if (currentIndex >= totalQuestions) showResult();
  else showQuestion();
}

function openWordbookModal() {
  renderWordbook();
  wordbookModal.classList.remove("hidden");
}

function closeWordbookModal() {
  wordbookModal.classList.add("hidden");
}

startBtn.addEventListener("click", startQuiz);
retryBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  renderWordbook();
});
nextBtn.addEventListener("click", goNext);
yomiganaSubmit?.addEventListener("click", checkYomiganaAnswer);
yomiganaInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkYomiganaAnswer();
  }
});
function goWordbookPage(delta) {
  const totalPages = Math.max(1, Math.ceil(wrongWordsBook.length / WORDS_PER_PAGE));
  wordbookCurrentPage = Math.max(0, Math.min(totalPages - 1, wordbookCurrentPage + delta));
  renderWordbook();
}

openWordbookBtn.addEventListener("click", openWordbookModal);
closeWordbookBtn.addEventListener("click", closeWordbookModal);
wordbookModal.addEventListener("click", (e) => {
  if (e.target === wordbookModal) closeWordbookModal();
});
wordbookPrevBtn?.addEventListener("click", () => goWordbookPage(-1));
wordbookNextBtn?.addEventListener("click", () => goWordbookPage(1));
resultWordbookPrevBtn?.addEventListener("click", () => goWordbookPage(-1));
resultWordbookNextBtn?.addEventListener("click", () => goWordbookPage(1));
loadVocabularyFromStorage();
updateVocabularyCount();
loadWrongWordsFromStorage();
renderWordbook();
