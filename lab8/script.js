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
let wrongCount = 0;

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
    lettersDiv.innerHTML = "";
    wordDisplay.innerHTML = "";

    let i = Math.floor(Math.random() * questions.length);
    questionText.innerText = questions[i];
    chosenAnswer = answers[i].toUpperCase();

    for (let char of chosenAnswer) {
        wordDisplay.innerHTML += (char === " " ? " " : "_");
    }

    createLetterButtons();
}

function createLetterButtons() {
    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЫЬЭЮЯ";

    for (let letter of alphabet) {
        let btn = document.createElement("button");
        btn.innerText = letter;
        btn.onclick = () => guess(letter, btn);
        lettersDiv.appendChild(btn);
    }
}

function guess(letter, btn) {
    btn.disabled = true;

    let revealed = "";
    let correct = false;

    for (let i = 0; i < chosenAnswer.length; i++) {
        if (chosenAnswer[i] === letter) {
            revealed += letter;
            correct = true;
        } else {
            revealed += wordDisplay.innerText[i];
        }
    }

    wordDisplay.innerText = revealed;

    // --------------- Буруу үсэг бүр дээр зурна -------------------
    if (!correct) {
        wrongCount++;
        drawStep(wrongCount);
    }

    if (revealed === chosenAnswer) {
        alert("🎉 Зөв таалаа!");
        return;
    }

    if (wrongCount >= 6) {
        alert("❌ Буруу таалаа! Хариулт: " + chosenAnswer);
    }
}

// ----------------------------
// 👤 Буруу таалт бүрийн Hangman алхам
// ----------------------------
function drawStep(step) {
    ctx.lineWidth = 3;

    // 1. Толгой
    if (step === 1) {
        ctx.beginPath();
        ctx.arc(125, 60, 25, 0, Math.PI * 2);
        ctx.stroke();
    }

    // 2. Бие
    if (step === 2) {
        ctx.beginPath();
        ctx.moveTo(125, 85);
        ctx.lineTo(125, 150);
        ctx.stroke();
    }

    // 3. Зүүн гар
    if (step === 3) {
        ctx.beginPath();
        ctx.moveTo(125, 100);
        ctx.lineTo(95, 130);
        ctx.stroke();
    }

    // 4. Баруун гар
    if (step === 4) {
        ctx.beginPath();
        ctx.moveTo(125, 100);
        ctx.lineTo(155, 130);
        ctx.stroke();
    }

    // 5. Зүүн хөл
    if (step === 5) {
        ctx.beginPath();
        ctx.moveTo(125, 150);
        ctx.lineTo(105, 190);
        ctx.stroke();
    }

    // 6. Баруун хөл
    if (step === 6) {
        ctx.beginPath();
        ctx.moveTo(125, 150);
        ctx.lineTo(145, 190);
        ctx.stroke();
    }
}
