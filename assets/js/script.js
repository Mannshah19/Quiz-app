const quizData = [
    {
        question: "Which HTML tag is used to embed JavaScript code directly in a page?",
        options: ["script", "js", "code", "javascript"],
        answer: 0
    },
    {
        question: "Which CSS property controls the space between an element's border and its content?",
        options: ["margin", "padding", "spacing", "gap"],
        answer: 1
    },
    {
        question: "What does the 'alt' attribute on an img tag provide?",
        options: ["An alternate image source if loading fails", "A tooltip shown on click", "Descriptive text for accessibility and fallback", "The image's file size"],
        answer: 2
    },
    {
        question: "In JavaScript, which keyword declares a variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: 2
    },
    {
        question: "Which CSS display value removes an element from the layout completely, as if it isn't there?",
        options: ["visibility: hidden", "display: none", "opacity: 0", "display: block"],
        answer: 1
    },
    {
        question: "What is the purpose of the 'viewport' meta tag in HTML?",
        options: ["Sets the page's background color", "Controls how a page scales on different devices", "Defines the document's character encoding", "Loads external stylesheets"],
        answer: 1
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "Object.fromJSON()", "JSON.convert()"],
        answer: 1
    },
    {
        question: "In CSS Flexbox, which property aligns items along the main axis?",
        options: ["align-items", "justify-content", "flex-direction", "align-content"],
        answer: 1
    },
    {
        question: "Which selector targets the first child element of its parent in CSS?",
        options: [":first-of-type", ":nth-child(1)", ":first-child", "Both :nth-child(1) and :first-child"],
        answer: 3
    },
    {
        question: "What does 'DOM' stand for in web development?",
        options: ["Document Object Model", "Data Object Mapping", "Display Output Module", "Dynamic Object Manager"],
        answer: 0
    }
];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let time = 10;

let interval;

const questionEl      = document.getElementById("question");
const optionsEl       = document.getElementById("options");
const questionCounter = document.getElementById("questionCounter");
const timerEl         = document.getElementById("timer");
const timerFill       = document.getElementById("timerFill");
const timerRing       = document.getElementById("timerRing");
const nextBtn         = document.getElementById("nextBtn");
const dotContainer    = document.getElementById("progressDots");

const letters = ["A", "B", "C", "D"];

const CIRCUMFERENCE = 2 * Math.PI * 24;


function loadQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;

    const q = quizData[currentQuestion];

    questionEl.innerHTML = q.question;

    questionCounter.innerHTML = `<strong>${currentQuestion + 1}</strong> / ${quizData.length}`;

    optionsEl.innerHTML = "";

    q.options.forEach(function(optionText, index) {

        const btn = document.createElement("button");

        btn.type = "button";

        btn.classList.add("option");

        btn.innerHTML = `
            <span class="opt-letter">${letters[index]}</span>
            <span class="opt-text">${optionText}</span>
            <svg class="opt-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        btn.addEventListener("click", function() {

            document.querySelectorAll(".option").forEach(function(item) {
                item.classList.remove("is-selected");
            });

            btn.classList.add("is-selected");

            selectedAnswer = index;

            nextBtn.disabled = false;

        });

        optionsEl.appendChild(btn);

    });

    createDots();

    startTimer();

}

loadQuestion();


function createDots() {

    dotContainer.innerHTML = "";

    for (let i = 0; i < quizData.length; i++) {

        const dot = document.createElement("span");

        dot.classList.add("dot");

        if (i < currentQuestion) {
            dot.classList.add("is-done");
        }

        if (i === currentQuestion) {
            dot.classList.add("is-current");
        }

        dotContainer.appendChild(dot);

    }

}


function startTimer() {

    clearInterval(interval);

    time = 10;

    timerEl.textContent = time;

    timerFill.style.strokeDasharray = CIRCUMFERENCE;
    timerFill.style.strokeDashoffset = 0;

    timerRing.classList.remove("is-urgent");

    interval = setInterval(function() {

        time--;

        timerEl.textContent = time;

        timerFill.style.strokeDashoffset = CIRCUMFERENCE * (1 - time / 10);

        if (time <= 3) {
            timerRing.classList.add("is-urgent");
        }

        if (time === 0) {

            clearInterval(interval);

            selectedAnswer = null;

            currentQuestion++;

            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }

        }

    }, 1000);

}


nextBtn.addEventListener("click", function() {

    if (selectedAnswer === null) {
        return;
    }

    clearInterval(interval);

    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    const correct = quizData[currentQuestion].answer;

    document.querySelectorAll(".option").forEach(function(btn, i) {

        btn.disabled = true;

        if (i === correct) {
            btn.classList.add("is-correct");
        } else if (i === selectedAnswer) {
            btn.classList.add("is-wrong");
        }

    });

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }

    }, 800);

});


function showResult() {

    document.getElementById("quizCard").classList.add("is-hidden");
    document.getElementById("resultsCard").classList.remove("is-hidden");

    document.getElementById("resultScore").innerHTML = `${score}<span>/${quizData.length} correct</span>`;

    const percentage = score / quizData.length;

    if (percentage === 1) {
        document.getElementById("resultLine").textContent = "Perfect score — flawless!";
    } else if (percentage >= 0.7) {
        document.getElementById("resultLine").textContent = "Strong showing — a few sharp answers in there.";
    } else if (percentage >= 0.4) {
        document.getElementById("resultLine").textContent = "Not bad — room to grow.";
    } else {
        document.getElementById("resultLine").textContent = "Keep practising!";
    }

}


document.getElementById("restartBtn").addEventListener("click", function() {

    score = 0;

    currentQuestion = 0;

    document.getElementById("resultsCard").classList.add("is-hidden");
    document.getElementById("quizCard").classList.remove("is-hidden");

    loadQuestion();

});
