const cards = [
  { id: 1, file: "陽光玫瑰卡-01.jpg", volume: "第一卷 為自己出征", rose: "02", title: "做你自己！", theme: "回到自己", guidance: "你不需要用別人的期待來證明自己。今天的答案是把注意力收回來，先問：這是不是我真正想走的方向？" },
  { id: 2, file: "陽光玫瑰卡-02.jpg", volume: "第一卷 為自己出征", rose: "03", title: "愛是從「給」中獲得", theme: "流動的愛", guidance: "你正在尋找的支持，會在你願意先給出溫柔時開始流動。不是犧牲，而是從富足的位置分享。" },
  { id: 3, file: "陽光玫瑰卡-03.jpg", volume: "第一卷 為自己出征", rose: "04", title: "Listen to your heart", theme: "聽見心聲", guidance: "理智已經說了很多，現在請安靜一點聽心。真正的答案通常不吵，只是很清楚。" },
  { id: 4, file: "陽光玫瑰卡-04.jpg", volume: "第一卷 為自己出征", rose: "05", title: "多久才能療癒？", theme: "允許時間", guidance: "療癒不是進度比賽。你可以慢，但不要停止照顧自己；每一次承認感受，都是復原的一部分。" },
  { id: 5, file: "陽光玫瑰卡-05.jpg", volume: "第一卷 為自己出征", rose: "06", title: "I'm possible", theme: "可能性", guidance: "你以為不可能的地方，其實只差一次重新命名。把「我不行」換成「我正在學會」。" },
  { id: 6, file: "陽光玫瑰卡-06.jpg", volume: "第一卷 為自己出征", rose: "01", title: "黑暗其實並不存在", theme: "看見光", guidance: "黑暗常常只是光還沒被打開。不要急著否定自己，先點亮一個很小、很實際的行動。" },
  { id: 7, file: "陽光玫瑰卡-07.jpg", volume: "第一卷 為自己出征", rose: "07", title: "轉化你的壓抑", theme: "情緒轉化", guidance: "被壓住的能量不是敵人，它只是還沒找到出口。把情緒寫下、說出或動起來，讓它變成力量。" },
  { id: 8, file: "陽光玫瑰卡-08.jpg", volume: "第一卷 為自己出征", rose: "08", title: "找到爆發力，才能發揮影響力", theme: "啟動力量", guidance: "你不缺影響力，你缺的是願意站出來的那一刻。把熱情聚焦到一件最重要的事上。" },
  { id: 9, file: "陽光玫瑰卡-09.jpg", volume: "第一卷 為自己出征", rose: "09", title: "不要因為他人的眼光改變方向", theme: "方向感", guidance: "外界的眼光只能提供參考，不能替你掌舵。今天請保護自己的選擇，不必急著解釋。" },
  { id: 10, file: "陽光玫瑰卡-10.jpg", volume: "第一卷 為自己出征", rose: "10", title: "你就是你是的", theme: "存在確認", guidance: "你的價值不是表現換來的。先承認自己已經足夠，再去做想做的事。" },
  { id: 11, file: "陽光玫瑰卡-11.jpg", volume: "第一卷 為自己出征", rose: "11", title: "成功的人在逆境中站了起來", theme: "逆境站起", guidance: "這張牌提醒你：跌倒不是結論，只是一個位置。先站穩，再決定下一步。" },
  { id: 12, file: "陽光玫瑰卡-12.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "12", title: "成功是你朝著哪個方向走", theme: "成功方向", guidance: "成功不在於你現在站在哪裡，而在於你願意朝哪裡走。選方向，比責備起點更重要。" },
  { id: 13, file: "陽光玫瑰卡-13.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "13", title: "你不被看見，是因為選錯舞台", theme: "舞台選擇", guidance: "不是你不夠好，可能只是環境不對。把力氣用在找到適合你的舞台，而不是討好不懂你的人。" },
  { id: 14, file: "陽光玫瑰卡-14.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "14", title: "不溶化，不是太冰，而是不夠熱", theme: "熱度", guidance: "問題不一定是對方太冷，也可能是你的願望還沒有被真正點燃。問自己：我願意投入多少熱度？" },
  { id: 15, file: "陽光玫瑰卡-15.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "15", title: "慢著抱怨！這一切一定有原因", theme: "理解因果", guidance: "先暫停抱怨，因為事件背後有它的訊息。看懂原因，你就能拿回選擇權。" },
  { id: 16, file: "陽光玫瑰卡-16.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "16", title: "別太在意他人而錯過你自己", theme: "自我優先", guidance: "照顧別人之前，先確認你沒有把自己弄丟。你的感受也需要被安排進人生裡。" },
  { id: 17, file: "陽光玫瑰卡-17.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "17", title: "放棄很容易，只要什麼都不做", theme: "承擔行動", guidance: "真正的放棄常常不是宣布，而是不再行動。今天只要做一件小事，就能讓路重新出現。" },
  { id: 18, file: "陽光玫瑰卡-18.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "18", title: "不要放棄自己的沉香", theme: "珍惜本質", guidance: "不要為了迎合別人的木炭，丟掉自己的沉香。你最珍貴的特質，值得被好好保存。" },
  { id: 19, file: "陽光玫瑰卡-19.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "19", title: "你「識貨」嗎？", theme: "辨識價值", guidance: "你需要重新訓練自己的眼光。別只看表面的價格，請看見真正值得投入的人事物。" },
  { id: 20, file: "陽光玫瑰卡-20.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "20", title: "因，果。", theme: "因果回應", guidance: "現在的結果有它的種子。與其只看結果，不如回頭調整每天正在種下的因。" },
  { id: 21, file: "陽光玫瑰卡-21.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "21", title: "「師」還是「匠」？", theme: "精進層次", guidance: "技能可以讓你成為匠，心法與格局讓你成為師。今天的功課是把技術帶回初心。" },
  { id: 22, file: "陽光玫瑰卡-22.jpg", volume: "第二卷 天下沒有懷才不遇這回事", rose: "22", title: "OFF 學學 OFF", theme: "休息學習", guidance: "暫停不是退步，是讓系統重新整理。你需要休息，也需要從休息裡學會更新。" },
  { id: 23, file: "陽光玫瑰卡-23.jpg", volume: "第三卷 順著生命之流", rose: "23", title: "很好！這是件好事", theme: "重新詮釋", guidance: "先別急著把它判定成壞事。生命可能正在用另一種方式，把你推向更適合的位置。" },
  { id: 24, file: "陽光玫瑰卡-24.jpg", volume: "第三卷 順著生命之流", rose: "24", title: "天使會飛，因為他們把自己看得很輕", theme: "輕盈", guidance: "放下過度沉重的自我要求，你會更容易前進。輕，不是逃避，是不再背不屬於你的重量。" },
  { id: 25, file: "陽光玫瑰卡-25.jpg", volume: "第三卷 順著生命之流", rose: "25", title: "找到你的手錶", theme: "自己的節奏", guidance: "不要用別人的時間表逼自己。找到你的節奏，你才會知道何時開始、何時等待。" },
  { id: 26, file: "陽光玫瑰卡-26.jpg", volume: "第三卷 順著生命之流", rose: "26", title: "人生最大的修行", theme: "生命修行", guidance: "最大的修行不在遠方，而在日常裡如何面對自己。把眼前這件事當成練習場。" },
  { id: 27, file: "陽光玫瑰卡-27.jpg", volume: "第三卷 順著生命之流", rose: "27", title: "不要為了得到想要的，而失去最珍貴的", theme: "珍貴排序", guidance: "這張牌要你重新排序。想要的很好，但不能用最珍貴的健康、自由、愛與尊嚴交換。" },
  { id: 28, file: "陽光玫瑰卡-28.jpg", volume: "第三卷 順著生命之流", rose: "28", title: "剪斷心中的那根臍帶", theme: "獨立", guidance: "有些連結曾經保護你，現在卻限制你。用溫柔但堅定的方式，讓自己真正長大。" },
  { id: 29, file: "陽光玫瑰卡-29.jpg", volume: "第三卷 順著生命之流", rose: "29", title: "「不死」的秘訣", theme: "韌性", guidance: "不死不是永遠不痛，而是每次受傷後仍能更新。你的生命力比你以為的更強。" },
  { id: 30, file: "陽光玫瑰卡-30.jpg", volume: "第三卷 順著生命之流", rose: "30", title: "人的最高境界", theme: "境界", guidance: "當你不再只用得失衡量人生，境界就開始打開。讓心更寬，答案也會更寬。" },
  { id: 31, file: "陽光玫瑰卡-31.jpg", volume: "第三卷 順著生命之流", rose: "31", title: "先問「能容多少」", theme: "容量", guidance: "你想承接更多，就要先擴大容量。能容納情緒、變化與不同意見，才能容納更大的禮物。" },
  { id: 32, file: "陽光玫瑰卡-32.jpg", volume: "第三卷 順著生命之流", rose: "32", title: "凡你所做，必回歸你身", theme: "回歸", guidance: "你送出去的心念與行動，終會以某種形式回來。今天請種下你也願意收成的東西。" },
  { id: 33, file: "陽光玫瑰卡-33.jpg", volume: "第三卷 順著生命之流", rose: "33", title: "孩子，儘管振翅高飛吧！", theme: "祝福放手", guidance: "這是祝福與放手的牌。允許自己飛，也允許你愛的人走向他自己的天空。" }
];

const form = document.querySelector("#readingForm");
const input = document.querySelector("#questionInput");
const spread = document.querySelector("#spread");
const template = document.querySelector("#cardTemplate");
const readingTitle = document.querySelector("#readingTitle");
const readingText = document.querySelector("#readingText");
const readingKeyword = document.querySelector("#readingKeyword");
const historyList = document.querySelector("#historyList");
const clearHistory = document.querySelector("#clearHistory");
const modeButtons = [...document.querySelectorAll(".mode-button")];
const promptButtons = [...document.querySelectorAll("[data-prompt]")];

let mode = "single";
let currentCards = [];
const positions = {
  single: ["現在的訊息"],
  three: ["狀態", "提醒", "下一步"]
};

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    resetReading();
  });
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.prompt;
    promptButtons.forEach((item) => item.classList.toggle("is-selected", item === button));
    input.focus();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  drawReading();
});

clearHistory.addEventListener("click", () => {
  localStorage.removeItem("sunshineRoseHistory");
  renderHistory();
});

function drawReading() {
  const count = mode === "three" ? 3 : 1;
  currentCards = shuffle(cards).slice(0, count);
  spread.style.setProperty("--spread-count", count);
  spread.innerHTML = "";

  currentCards.forEach((card, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const img = node.querySelector(".front img");
    const label = node.querySelector(".position-label");
    label.textContent = positions[mode][index];
    img.src = `assets/cards/${card.file}`;
    img.alt = `${card.title}，${card.volume}，玫瑰 ${card.rose}`;
    node.querySelector(".card-number").textContent = `${card.volume} | 玫瑰 ${card.rose}`;
    node.querySelector("h3").textContent = card.title;
    node.querySelector(".card-guidance").textContent = card.guidance;
    node.querySelector(".card-face").addEventListener("click", () => revealCard(node));
    spread.append(node);
    window.setTimeout(() => revealCard(node), 180 + index * 260);
  });

  updateReading();
  saveHistory();
}

function revealCard(node) {
  node.classList.add("is-revealed");
}

function updateReading() {
  const question = input.value.trim();
  const names = currentCards.map((card) => `「${card.title}」`).join("、");
  readingTitle.textContent = currentCards.length === 1 ? names : `你的三張玫瑰：${names}`;
  readingKeyword.textContent = currentCards.map((card) => card.theme).join(" / ");

  if (mode === "single") {
    const card = currentCards[0];
    readingText.textContent = `${question ? `關於「${question}」，` : ""}這張牌的核心是「${card.theme}」。${card.guidance} 今天的微行動：在行事曆或便條紙上寫下一件 10 分鐘內能完成的小事，讓答案從心裡落到生活裡。`;
    return;
  }

  readingText.textContent = `${question ? `關於「${question}」，` : ""}第一張看見你的狀態，第二張指出需要聽見的提醒，第三張給出下一步。今天可以帶走的句子是：${currentCards.map((card) => card.theme).join(" → ")}。把它當成今天工作與關係裡的溫柔準則。`;
}

function saveHistory() {
  const history = getHistory();
  const question = input.value.trim() || "未填寫問題";
  history.unshift({
    at: new Date().toLocaleString("zh-TW", { hour12: false }),
    question,
    cards: currentCards.map((card) => card.title)
  });
  localStorage.setItem("sunshineRoseHistory", JSON.stringify(history.slice(0, 12)));
  renderHistory();
}

function renderHistory() {
  const history = getHistory();
  historyList.innerHTML = "";
  if (!history.length) {
    const empty = document.createElement("li");
    empty.textContent = "還沒有抽牌紀錄。";
    historyList.append(empty);
    return;
  }

  history.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(item.cards.join("、"))}</strong><br>${escapeHtml(item.question)}<br>${escapeHtml(item.at)}`;
    historyList.append(li);
  });
}

function resetReading() {
  spread.innerHTML = "";
  currentCards = [];
  readingKeyword.textContent = "等待玫瑰";
  readingTitle.textContent = mode === "single" ? "一張牌，回答此刻最重要的事" : "三張牌，整理狀態、提醒與下一步";
  readingText.textContent = "寫下問題後按下洗牌抽卡。卡片會自動翻開，也可以點擊牌面再次翻開。";
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("sunshineRoseHistory")) || [];
  } catch {
    return [];
  }
}

function shuffle(source) {
  const list = [...source];
  for (let index = list.length - 1; index > 0; index -= 1) {
    const random = Math.floor(Math.random() * (index + 1));
    [list[index], list[random]] = [list[random], list[index]];
  }
  return list;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

renderHistory();
resetReading();
