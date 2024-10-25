const cards = [
    { question: "JavaScript 是什么？", answer: "一种编程语言" },
    { question: "HTML 用于什么？", answer: "构建网页结构" },
    { question: "CSS 的作用是什么？", answer: "样式表" }
];

let currentCardIndex = 0;

const card = document.getElementById('card');
const front = document.getElementById('front');
const back = document.getElementById('back');

function updateCard() {
    front.textContent = cards[currentCardIndex].question;
    back.textContent = cards[currentCardIndex].answer;
    card.classList.remove('flipped');
}

document.getElementById('flipButton').addEventListener('click', () => {
    card.classList.toggle('flipped');
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCard();
});

// 初始化显示第一张卡片
 updateCard();

