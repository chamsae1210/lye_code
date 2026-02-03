// 일본어 단어 데이터 JLPT N1~N5 (일본어, 요미가나, 한국어 뜻, 레벨)
const VOCABULARY = [
  // N5
  { ja: "私", reading: "わたし", ko: "나", level: "n5" },
  { ja: "今日", reading: "きょう", ko: "오늘", level: "n5" },
  { ja: "明日", reading: "あした", ko: "내일", level: "n5" },
  { ja: "昨日", reading: "きのう", ko: "어제", level: "n5" },
  { ja: "食べる", reading: "たべる", ko: "먹다", level: "n5" },
  { ja: "飲む", reading: "のむ", ko: "마시다", level: "n5" },
  { ja: "行く", reading: "いく", ko: "가다", level: "n5" },
  { ja: "来る", reading: "くる", ko: "오다", level: "n5" },
  { ja: "見る", reading: "みる", ko: "보다", level: "n5" },
  { ja: "聞く", reading: "きく", ko: "듣다, 묻다", level: "n5" },
  { ja: "読む", reading: "よむ", ko: "읽다", level: "n5" },
  { ja: "書く", reading: "かく", ko: "쓰다", level: "n5" },
  { ja: "話す", reading: "はなす", ko: "말하다", level: "n5" },
  { ja: "勉強", reading: "べんきょう", ko: "공부", level: "n5" },
  { ja: "学校", reading: "がっこう", ko: "학교", level: "n5" },
  { ja: "先生", reading: "せんせい", ko: "선생님", level: "n5" },
  { ja: "学生", reading: "がくせい", ko: "학생", level: "n5" },
  { ja: "友達", reading: "ともだち", ko: "친구", level: "n5" },
  { ja: "家族", reading: "かぞく", ko: "가족", level: "n5" },
  { ja: "大きい", reading: "おおきい", ko: "크다", level: "n5" },
  { ja: "小さい", reading: "ちいさい", ko: "작다", level: "n5" },
  { ja: "新しい", reading: "あたらしい", ko: "새롭다", level: "n5" },
  { ja: "良い", reading: "いい", ko: "좋다", level: "n5" },
  { ja: "暑い", reading: "あつい", ko: "덥다", level: "n5" },
  { ja: "寒い", reading: "さむい", ko: "춥다", level: "n5" },
  { ja: "好き", reading: "すき", ko: "좋아함", level: "n5" },
  { ja: "元気", reading: "げんき", ko: "건강, 활기", level: "n5" },
  { ja: "名前", reading: "なまえ", ko: "이름", level: "n5" },
  { ja: "日本", reading: "にほん", ko: "일본", level: "n5" },
  { ja: "日本語", reading: "にほんご", ko: "일본어", level: "n5" },
  { ja: "毎日", reading: "まいにち", ko: "매일", level: "n5" },
  { ja: "今", reading: "いま", ko: "지금", level: "n5" },
  { ja: "電車", reading: "でんしゃ", ko: "전철", level: "n5" },
  { ja: "駅", reading: "えき", ko: "역", level: "n5" },
  { ja: "休み", reading: "やすみ", ko: "휴일, 쉼", level: "n5" },
  { ja: "分かる", reading: "わかる", ko: "이해하다", level: "n5" },
  { ja: "大丈夫", reading: "だいじょうぶ", ko: "괜찮다", level: "n5" },
  { ja: "本当", reading: "ほんとう", ko: "진짜", level: "n5" },
  { ja: "始める", reading: "はじめる", ko: "시작하다", level: "n5" },
  { ja: "終わる", reading: "おわる", ko: "끝나다", level: "n5" },
  // N4
  { ja: "届く", reading: "とどく", ko: "도착하다, 전달되다", level: "n4" },
  { ja: "遅れる", reading: "おくれる", ko: "늦다", level: "n4" },
  { ja: "残る", reading: "のこる", ko: "남다", level: "n4" },
  { ja: "伝える", reading: "つたえる", ko: "전하다", level: "n4" },
  { ja: "慣れる", reading: "なれる", ko: "익숙해지다", level: "n4" },
  { ja: "探す", reading: "さがす", ko: "찾다", level: "n4" },
  { ja: "続ける", reading: "つづける", ko: "계속하다", level: "n4" },
  { ja: "直す", reading: "なおす", ko: "고치다", level: "n4" },
  { ja: "直る", reading: "なおる", ko: "고쳐지다", level: "n4" },
  { ja: "経験", reading: "けいけん", ko: "경험", level: "n4" },
  { ja: "理由", reading: "りゆう", ko: "이유", level: "n4" },
  { ja: "相談", reading: "そうだん", ko: "상담", level: "n4" },
  { ja: "予定", reading: "よてい", ko: "예정", level: "n4" },
  { ja: "約束", reading: "やくそく", ko: "약속", level: "n4" },
  { ja: "計画", reading: "けいかく", ko: "계획", level: "n4" },
  { ja: "機会", reading: "きかい", ko: "기회", level: "n4" },
  { ja: "心配", reading: "しんぱい", ko: "걱정", level: "n4" },
  { ja: "説明", reading: "せつめい", ko: "설명", level: "n4" },
  { ja: "注意", reading: "ちゅうい", ko: "주의", level: "n4" },
  { ja: "連絡", reading: "れんらく", ko: "연락", level: "n4" },
  { ja: "確認", reading: "かくにん", ko: "확인", level: "n4" },
  { ja: "関係", reading: "かんけい", ko: "관계", level: "n4" },
  { ja: "参加", reading: "さんか", ko: "참가", level: "n4" },
  { ja: "失敗", reading: "しっぱい", ko: "실패", level: "n4" },
  { ja: "最近", reading: "さいきん", ko: "최근", level: "n4" },
  { ja: "到着", reading: "とうちゃく", ko: "도착", level: "n4" },
  { ja: "値段", reading: "ねだん", ko: "가격", level: "n4" },
  { ja: "予約", reading: "よやく", ko: "예약", level: "n4" },
  { ja: "申し込む", reading: "もうしこむ", ko: "신청하다", level: "n4" },
  { ja: "受け取る", reading: "うけとる", ko: "받다", level: "n4" },
  { ja: "見つける", reading: "みつける", ko: "찾다, 발견하다", level: "n4" },
  // N3
  { ja: "届ける", reading: "とどける", ko: "전달하다, 배달하다", level: "n3" },
  { ja: "比べる", reading: "くらべる", ko: "비교하다", level: "n3" },
  { ja: "確かめる", reading: "たしかめる", ko: "확인하다", level: "n3" },
  { ja: "調べる", reading: "しらべる", ko: "조사하다", level: "n3" },
  { ja: "進む", reading: "すすむ", ko: "나아가다", level: "n3" },
  { ja: "預ける", reading: "あずける", ko: "맡기다", level: "n3" },
  { ja: "温める", reading: "あたためる", ko: "데우다", level: "n3" },
  { ja: "集める", reading: "あつめる", ko: "모으다", level: "n3" },
  { ja: "当たる", reading: "あたる", ko: "맞다, 당첨되다", level: "n3" },
  { ja: "片付ける", reading: "かたづける", ko: "정리하다", level: "n3" },
  { ja: "決める", reading: "きめる", ko: "정하다", level: "n3" },
  { ja: "暮らす", reading: "くらす", ko: "살다", level: "n3" },
  { ja: "壊れる", reading: "こわれる", ko: "부서지다", level: "n3" },
  { ja: "壊す", reading: "こわす", ko: "부수다", level: "n3" },
  { ja: "支える", reading: "ささえる", ko: "지지하다", level: "n3" },
  { ja: "触る", reading: "さわる", ko: "만지다", level: "n3" },
  { ja: "沈む", reading: "しずむ", ko: "가라앉다", level: "n3" },
  { ja: "済む", reading: "すむ", ko: "끝나다", level: "n3" },
  { ja: "捨てる", reading: "すてる", ko: "버리다", level: "n3" },
  { ja: "頼む", reading: "たのむ", ko: "부탁하다", level: "n3" },
  { ja: "試す", reading: "ためす", ko: "시험하다", level: "n3" },
  { ja: "捕まえる", reading: "つかまえる", ko: "잡다", level: "n3" },
  { ja: "続く", reading: "つづく", ko: "계속되다", level: "n3" },
  { ja: "勤める", reading: "つとめる", ko: "근무하다", level: "n3" },
  { ja: "乗り換える", reading: "のりかえる", ko: "갈아타다", level: "n3" },
  { ja: "影響", reading: "えいきょう", ko: "영향", level: "n3" },
  { ja: "原因", reading: "げんいん", ko: "원인", level: "n3" },
  { ja: "経済", reading: "けいざい", ko: "경제", level: "n3" },
  { ja: "世話", reading: "せわ", ko: "돌봄, 세간", level: "n3" },
  { ja: "都合", reading: "つごう", ko: "사정, 편의", level: "n3" },
  { ja: "意見", reading: "いけん", ko: "의견", level: "n3" },
  { ja: "規則", reading: "きそく", ko: "규칙", level: "n3" },
  { ja: "競争", reading: "きょうそう", ko: "경쟁", level: "n3" },
  { ja: "具合", reading: "ぐあい", ko: "상태", level: "n3" },
  { ja: "結構", reading: "けっこう", ko: "꽤, 충분히", level: "n3" },
  { ja: "見学", reading: "けんがく", ko: "견학", level: "n3" },
  { ja: "通訳", reading: "つうやく", ko: "통역", level: "n3" },
  { ja: "翻訳", reading: "ほんやく", ko: "번역", level: "n3" },
  { ja: "無理", reading: "むり", ko: "무리", level: "n3" },
  { ja: "役に立つ", reading: "やくにたつ", ko: "도움이 되다", level: "n3" },
  { ja: "油断", reading: "ゆだん", ko: "방심", level: "n3" },
  { ja: "我慢", reading: "がまん", ko: "참다, 인내", level: "n3" },
  { ja: "気持ち", reading: "きもち", ko: "기분", level: "n3" },
  { ja: "決心", reading: "けっしん", ko: "결심", level: "n3" },
  { ja: "交差点", reading: "こうさてん", ko: "교차로", level: "n3" },
  { ja: "故障", reading: "こしょう", ko: "고장", level: "n3" },
  { ja: "作文", reading: "さくぶん", ko: "작문", level: "n3" },
  { ja: "就職", reading: "しゅうしょく", ko: "취직", level: "n3" },
  { ja: "状況", reading: "じょうきょう", ko: "상황", level: "n3" },
  { ja: "冗談", reading: "じょうだん", ko: "농담", level: "n3" },
  { ja: "成長", reading: "せいちょう", ko: "성장", level: "n3" },
  { ja: "貯金", reading: "ちょきん", ko: "저금", level: "n3" },
  { ja: "伝統", reading: "でんとう", ko: "전통", level: "n3" },
  { ja: "仲", reading: "なか", ko: "사이, 관계", level: "n3" },
  { ja: "悩む", reading: "なやむ", ko: "고민하다", level: "n3" },
  { ja: "発見", reading: "はっけん", ko: "발견", level: "n3" },
  { ja: "判断", reading: "はんだん", ko: "판단", level: "n3" },
  { ja: "不満", reading: "ふまん", ko: "불만", level: "n3" },
  { ja: "無料", reading: "むりょう", ko: "무료", level: "n3" },
  { ja: "申し訳", reading: "もうしわけ", ko: "사과, 변명", level: "n3" },
  { ja: "応募", reading: "おうぼ", ko: "지원하다", level: "n3" },
  { ja: "掛ける", reading: "かける", ko: "걸다, 걸치다", level: "n3" },
  { ja: "消える", reading: "きえる", ko: "사라지다, 꺼지다", level: "n3" },
  { ja: "決まる", reading: "きまる", ko: "정해지다", level: "n3" },
  { ja: "崩れる", reading: "くずれる", ko: "무너지다", level: "n3" },
  { ja: "込む", reading: "こむ", ko: "붐비다", level: "n3" },
  { ja: "取り消す", reading: "とりけす", ko: "취소하다", level: "n3" },
  { ja: "見直す", reading: "みなおす", ko: "다시 보다, 개선·재검토하다", level: "n3" },
  { ja: "見送る", reading: "みおくる", ko: "배웅하다", level: "n3" },
  { ja: "おっしゃる", reading: "おっしゃる", ko: "말씀하시다(존경)", level: "n3" },
  { ja: "いらっしゃる", reading: "いらっしゃる", ko: "계시다, 오시다(존경)", level: "n3" },
  { ja: "召し上がる", reading: "めしあがる", ko: "드시다(존경)", level: "n3" },
  { ja: "差し上げる", reading: "さしあげる", ko: "드리다(겸양)", level: "n3" },
  { ja: "いただく", reading: "いただく", ko: "받다, 드리다(겸양)", level: "n3" },
  { ja: "拝見する", reading: "はいけんする", ko: "뵙다, 보다(겸양)", level: "n3" },
  { ja: "存じる", reading: "ぞんじる", ko: "알다(겸양)", level: "n3" },
  { ja: "お目にかかる", reading: "おめにかかる", ko: "뵙다(겸양)", level: "n3" },
  // N2
  { ja: "下げる", reading: "さげる", ko: "내리다", level: "n2" },
  { ja: "責める", reading: "せめる", ko: "비난하다", level: "n2" },
  { ja: "戦う", reading: "たたかう", ko: "싸우다", level: "n2" },
  { ja: "建つ", reading: "たつ", ko: "세워지다", level: "n2" },
  { ja: "包む", reading: "つつむ", ko: "싸다", level: "n2" },
  { ja: "覚悟", reading: "かくご", ko: "각오", level: "n2" },
  { ja: "見物", reading: "けんぶつ", ko: "구경", level: "n2" },
  { ja: "覚える", reading: "おぼえる", ko: "기억하다, 배우다", level: "n2" },
  { ja: "乾く", reading: "かわく", ko: "마르다", level: "n2" },
  { ja: "加える", reading: "くわえる", ko: "더하다", level: "n2" },
  { ja: "差す", reading: "さす", ko: "쓰다(우산), 비치다", level: "n2" },
  { ja: "痩せる", reading: "やせる", ko: "날씬해지다", level: "n2" },
  { ja: "遅刻", reading: "ちこく", ko: "지각", level: "n2" },
  { ja: "都合がいい", reading: "つごうがいい", ko: "편하다", level: "n2" },
  { ja: "申し上げる", reading: "もうしあげる", ko: "말씀드리다(겸양)", level: "n2" },
  { ja: "お越しになる", reading: "おこしになる", ko: "오시다(존경)", level: "n2" },
  { ja: "譲る", reading: "ゆずる", ko: "양보하다", level: "n2" },
  { ja: "認める", reading: "みとめる", ko: "인정하다", level: "n2" },
  { ja: "許す", reading: "ゆるす", ko: "용서하다", level: "n2" },
  { ja: "避ける", reading: "さける", ko: "피하다", level: "n2" },
  { ja: "争う", reading: "あらそう", ko: "다투다", level: "n2" },
  { ja: "訴える", reading: "うったえる", ko: "호소하다, 고소하다", level: "n2" },
  { ja: "批判", reading: "ひはん", ko: "비판", level: "n2" },
  { ja: "評価", reading: "ひょうか", ko: "평가", level: "n2" },
  { ja: "議論", reading: "ぎろん", ko: "논의, 토론", level: "n2" },
  { ja: "主張", reading: "しゅちょう", ko: "주장", level: "n2" },
  { ja: "納得", reading: "なっとく", ko: "납득", level: "n2" },
  { ja: "妥協", reading: "だきょう", ko: "타협", level: "n2" },
  { ja: "契約", reading: "けいやく", ko: "계약", level: "n2" },
  { ja: "義務", reading: "ぎむ", ko: "의무", level: "n2" },
  // N1
  { ja: "貫く", reading: "つらぬく", ko: "관철하다", level: "n1" },
  { ja: "催す", reading: "もよおす", ko: "개최하다, 느끼다", level: "n1" },
  { ja: "施す", reading: "ほどこす", ko: "시설하다, 베풀다", level: "n1" },
  { ja: "陥る", reading: "おちいる", ko: "빠지다, 함락되다", level: "n1" },
  { ja: "欺く", reading: "あざむく", ko: "속이다", level: "n1" },
  { ja: "脅かす", reading: "おどかす", ko: "협박하다", level: "n1" },
  { ja: "葬る", reading: "ほうむる", ko: "장례하다, 묻다", level: "n1" },
  { ja: "唆す", reading: "そそのかす", ko: "부추기다", level: "n1" },
  { ja: "陥れる", reading: "おとしいれる", ko: "함정에 빠뜨리다", level: "n1" },
  { ja: "賄う", reading: "まかなう", ko: "공급하다, 부담하다", level: "n1" },
  { ja: "潤う", reading: "うるおう", ko: "젖다, 풍요로워지다", level: "n1" },
  { ja: "渋る", reading: "しぶる", ko: "꺼리다, 막힌다", level: "n1" },
  { ja: "紛れる", reading: "まぎれる", ko: "섞이다, 잊히다", level: "n1" },
  { ja: "滞る", reading: "とどこおる", ko: "지연되다, 밀리다", level: "n1" },
  { ja: "伴う", reading: "ともなう", ko: "동반하다", level: "n1" },
  { ja: "即する", reading: "そくする", ko: "따르다, 부합하다", level: "n1" },
  { ja: "鑑みる", reading: "かんがみる", ko: "참작하다", level: "n1" },
  { ja: "顧みる", reading: "かえりみる", ko: "돌아보다, 반성하다", level: "n1" },
  { ja: "鑑定", reading: "かんてい", ko: "감정(鑑定)", level: "n1" },
  { ja: "糾弾", reading: "きゅうだん", ko: "규탄", level: "n1" },
  { ja: "懐疑", reading: "かいぎ", ko: "회의, 의심", level: "n1" },
  { ja: "妥結", reading: "だけつ", ko: "타결", level: "n1" },
  { ja: "抵触", reading: "ていしょく", ko: "위반, 충돌", level: "n1" },
  { ja: "履行", reading: "りこう", ko: "이행", level: "n1" },
  { ja: "免除", reading: "めんじょ", ko: "면제", level: "n1" },
  { ja: "放棄", reading: "ほうき", ko: "포기", level: "n1" },
];

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
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const choicesContainer = document.getElementById("choices");
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

let mode = "ja-to-ko";
let totalQuestions = 10;
let currentIndex = 0;
let score = 0;
let quizList = [];
let levelPool = [];
let answered = false;
let wrongWordsBook = []; // 틀린 단어장 { ja, reading, ko }

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

function startQuiz() {
  const level = levelSelect.value;
  levelPool = VOCABULARY.filter((v) => v.level === level);
  if (levelPool.length === 0) {
    alert("선택한 난이도에 단어가 없습니다. 다른 난이도를 선택해 주세요.");
    return;
  }
  const requested = Number(questionCountSelect.value);
  totalQuestions = Math.min(requested, levelPool.length);
  quizList = shuffle(levelPool).slice(0, totalQuestions);
  currentIndex = 0;
  score = 0;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
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
      li.classList.add("show-reading");
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
  const byDate = {};
  wrongWordsBook.forEach((w) => {
    const d = w.date || "날짜 없음";
    if (!byDate[d]) byDate[d] = [];
    byDate[d].push(w);
  });
  const parseDate = (s) => {
    if (s === "날짜 없음") return new Date(0);
    const parts = s.split("/").map(Number);
    return new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
  };
  const dates = Object.keys(byDate).sort((a, b) => parseDate(b) - parseDate(a));
  wordbookList.innerHTML = "";
  resultWordbookList.innerHTML = "";
  const addGroup = (container) => {
    dates.forEach((dateStr) => {
      const groupLi = document.createElement("li");
      groupLi.className = "wordbook-date-group";
      const header = document.createElement("div");
      header.className = "wordbook-date-header";
      header.textContent = dateStr;
      const wordsUl = document.createElement("ul");
      wordsUl.className = "wordbook-date-words";
      byDate[dateStr].forEach((w) => wordsUl.appendChild(createWordbookItem(w)));
      groupLi.appendChild(header);
      groupLi.appendChild(wordsUl);
      container.appendChild(groupLi);
    });
  };
  addGroup(wordbookList);
  addGroup(resultWordbookList);
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
openWordbookBtn.addEventListener("click", openWordbookModal);
closeWordbookBtn.addEventListener("click", closeWordbookModal);
wordbookModal.addEventListener("click", (e) => {
  if (e.target === wordbookModal) closeWordbookModal();
});
renderWordbook();
