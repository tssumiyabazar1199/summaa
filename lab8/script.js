var questions = [
    'Дэлхийн хамгийн өндөр амьтан?',
    'Нарны аймгийн хамгийн том гараг?',
    'Монгол улсын нийслэл?',
    'Дэлхийн хамгийн хүйтэн тив?',
    'Хамгийн том далай?',
    'Монголын хамгийн урт гол?'
];

var answers = [
    'АНААШ',
    'БАРХАСБАДЬ',
    'УЛААНБААТАР',
    'АНТАРКТИД',
    'НОМХОН',
    'ОНОН'
];

let chosenAnswer = "";
let displayArray = [];
let wrongCount = 0;
let currentIndex = 0;

const startBtn = document.getElementById("startBtn");
const questionText = document.getElementById("question");
const wordDisplay = document.getElementById("wordDisplay");
const lettersDiv = document.getElementById("letters");
const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");

startBtn.addEventListener("click", startGame);

function startGame() {
    ctx.clearRect(0, 0, 250, 250);
    wrongCount = 0;
    currentIndex = 0;
    lettersDiv.innerHTML = "";
    displayArray = [];

    let i = Math.floor(Math.random() * questions.length);
    questionText.innerText = questions[i];
    chosenAnswer = answers[i].toUpperCase();

    for (let char of chosenAnswer) {
        displayArray.push(char === " " ? " " : "_");
    }

    drawGallows();
    renderWord();
    createLetterButtons();
}

function drawGallows() {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#4a4a4a";
    ctx.beginPath();
    ctx.moveTo(20, 230); ctx.lineTo(180, 230); 
    ctx.moveTo(50, 230); ctx.lineTo(50, 20);
    ctx.moveTo(50, 20);  ctx.lineTo(125, 20); 
    ctx.moveTo(125, 20); ctx.lineTo(125, 40); 
    ctx.stroke();
}

function renderWord() {
    wordDisplay.innerText = displayArray.join("");
}

function createLetterButtons() {
    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЫЬЭЮЯ";
    for (let letter of alphabet) {
        let btn = document.createElement("button");
        btn.innerText = letter;
        btn.onclick = () => guess(letter);
        lettersDiv.appendChild(btn);
    }
}

function guess(letter) {
    if (wrongCount >= 6 || currentIndex === chosenAnswer.length) return;

    if (chosenAnswer[currentIndex] === letter) {
        displayArray[currentIndex] = letter;
        currentIndex++;
        renderWord();
    } else {
        wrongCount++;
        drawStep(wrongCount);
    }

    if (currentIndex === chosenAnswer.length) {
        setTimeout(() => alert("🎉 Баяр хүргэе! Та зөв таалаа."), 100);
    }

    if (wrongCount >= 6) {
        setTimeout(() => alert("❌ Хожигдлоо! Хариулт: " + chosenAnswer), 100);
    }
}

function drawStep(step) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    
    switch(step) {
        case 1: 
            ctx.beginPath(); ctx.arc(125, 65, 25, 0, Math.PI * 2); ctx.stroke(); break;
        case 2: 
            ctx.beginPath(); ctx.moveTo(125, 90); ctx.lineTo(125, 160); ctx.stroke(); break;
        case 3: 
            ctx.beginPath(); ctx.moveTo(125, 105); ctx.lineTo(95, 135); ctx.stroke(); break;
        case 4:
            ctx.beginPath(); ctx.moveTo(125, 105); ctx.lineTo(155, 135); ctx.stroke(); break;
        case 5: 
            ctx.beginPath(); ctx.moveTo(125, 160); ctx.lineTo(105, 200); ctx.stroke(); break;
        case 6: 
            ctx.beginPath(); ctx.moveTo(125, 160); ctx.lineTo(145, 200); ctx.stroke(); break;
    }
}