import { Questions } from "./questions.js";

const appBase = document.querySelector("#application-container");

const startButton = createButton(["application-button"], "start");
appBase.appendChild(startButton);

startButton.addEventListener("click", startQuizz);

function createButton(classList, text) {
  const button = document.createElement("button");

  for (const classItem of classList) {
    button.classList += " " + classItem;
  }

  button.innerText = text;
  return button;
}

function startQuizz(event) {
  clean();
  let currentQuestion = 0;
  let score = 0;

  appBase.appendChild(displayQuestion(currentQuestion));
}

function displayQuestion(index) {
  const question = Questions[index];
  const divToWrite = document.createElement("div");

  if (!question) {
    //TODO: finish the quizz
  }

  const title = getTitleElement(question.question);
  const answers = getAnswers(question.choix, question.reponse);
  const validateButton = createButton(["application-button"], "validate");

  divToWrite.appendChild(title);
  divToWrite.appendChild(answers);
  divToWrite.appendChild(validateButton);

  validateButton.addEventListener("click", validatingAnswer, [
    answers,
    question,
  ]);

  divToWrite.classList = "quizz-answer-zone";

  return divToWrite;
}

function getAnswers(answers, reponse) {
  const t_answer = document.createElement("div");
  for (const answer of answers) {
    const label = formatAnswer(answer);
    t_answer.append(label);
  }

  return t_answer;
}

function getTitleElement(text) {
  const title = document.createElement("h4");
  title.innerText = text;
  return title;
}

function clean() {
  while (appBase.children.length != 0) {
    appBase.firstElementChild.remove();
  }
}

function formatAnswer(text) {
  const quizzDiv = document.createElement("div");
  const label = document.createElement("label");
  label.innerText = text;

  const input = document.createElement("input");
  const id = formatID(text);

  input.id = id;
  label.htmlFor = id;

  setClassForDivAnswer(quizzDiv);
  setClassForLabel(label);
  setAttributeForAnswer(input, text);
  setClassForAnswer(input);

  quizzDiv.appendChild(label);
  quizzDiv.appendChild(input);

  return quizzDiv;
}

function setClassForDivAnswer(input) {
  input.classList = "quizz-div";
}

function setClassForLabel(input) {
  input.classList = "quizz-label";
}

function setClassForAnswer(input) {
  input.classList = "quizz-input";
}

function setAttributeForAnswer(input, text) {
  input.setAttribute("type", "radio");
  input.setAttribute("name", "answer");
  input.setAttribute("value", text);
}

function formatID(text) {
  const formatedText = text.replaceAll(" ", "-").toLowerCase();
  return formatedText;
}

function validatingAnswer(answers, question) {
  console.log("test");
  alert(question.reponse);
}
