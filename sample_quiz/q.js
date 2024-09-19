// const questions = [
//   {
//     question: "Who is the  powerfull man in the world??",
//     answers: [
//       { text: "JohnCHina", correct: false },
//       { text: "Hulk", correct: false },
//       { text: "Superman", correct: false },
//       { text: "Me(Ajoy Saha)", correct: true },
//     ],
//   },
//   {
//     question: "Which is the smallest animal in the world??",
//     answers: [
//       { text: "Ant", correct: false },
//       { text: "Puka", correct: false },
//       { text: "Mosha", correct: true },
//       { text: "Machi", correct: false },
//     ],
//   },
//   {
//     question: "Which is the largest country in the world??",
//     answers: [
//       { text: "Bangladesh", correct: true },
//       { text: "india", correct: false },
//       { text: "Australia", correct: false },
//       { text: "Noakhali", correct: false },
//     ],
//   },
//   {
//     question: "Which is the smallest country in the world??",
//     answers: [
//       { text: "Tangail", correct: false },
//       { text: "Austria", correct: true },
//       { text: "Hong-Kong", correct: false },
//       { text: "Corea", correct: false },
//     ],
//   },
//   {
//     question: "Who is the big fighter in the world??",
//     answers: [
//       { text: "(me)Ajoy Saha", correct: true },
//       { text: "Honey Singh", correct: false },
//       { text: "Rofique", correct: false },
//       { text: "Jobbar", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + "." + currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// startQuiz();
const questions = [
  {
    question: "Who is the most powerful man in the world?",
    answers: [
      { text: "John Cena", correct: false },
      { text: "Hulk", correct: false },
      { text: "Superman", correct: false },
      { text: "Me (Ajoy Saha)", correct: true },
    ],
  },
  {
    question: "Which is the smallest animal in the world?",
    answers: [
      { text: "Ant", correct: false },
      { text: "Puka", correct: false },
      { text: "Mosha", correct: true },
      { text: "Machi", correct: false },
    ],
  },
  {
    question: "Which is the largest country in the world?",
    answers: [
      { text: "Bangladesh", correct: true },
      { text: "India", correct: false },
      { text: "Australia", correct: false },
      { text: "Noakhali", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Tangail", correct: false },
      { text: "Austria", correct: true },
      { text: "Hong Kong", correct: false },
      { text: "Korea", correct: false },
    ],
  },
  {
    question: "Who is the biggest fighter in the world?",
    answers: [
      { text: "Me (Ajoy Saha)", correct: true },
      { text: "Honey Singh", correct: false },
      { text: "Rofique", correct: false },
      { text: "Jobbar", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
  }
  Array.from(answerButtons.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");
  });
  nextButton.style.display = "block";
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
  nextButton.removeEventListener("click", startQuiz); // Remove previous event listener
  nextButton.addEventListener("click", startQuiz);
}

startQuiz();
