import { Questions } from "./questions.js";

const app = document.querySelector("#application-container");
console.log(app);

const startButton = document.createElement("button");
startButton.innerText = "Start the game";
startButton.classList = "application-button";

startButton.addEventListener("click", () => {
  app.removeChild(startButton);
});

app.appendChild(startButton);
