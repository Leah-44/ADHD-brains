const quotes = [
  "You’re not lazy. Your brain just works differently.",
  "Starting is the hardest part.",
  "Small progress still counts.",
  "Done is better than perfect.",
  "Focus comes after action.",
  "One task at a time.",
  "Your effort matters."
];

function showRandomQuote() {
  const quoteDisplay = document.getElementById("adhdQuote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.innerText = randomQuote;
}

window.onload = showRandomQuote;
function spinTask() {
  const inputs = document.querySelectorAll("#task-container input");
  const spinBtn = document.getElementById("spinBtn");
  const resultDisplay = document.getElementById("result");

  let tasks = [];

  inputs.forEach(input => {
    if (input.value.trim() !== "") {
      tasks.push(input.value);
    }
  });

  if (tasks.length === 0) {
    alert("Please enter at least one task!");
    return;
  }

  // Disable button while spinning
  spinBtn.disabled = true;

  const spinInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    resultDisplay.innerText = tasks[randomIndex];
  }, 100);

  setTimeout(() => {
    clearInterval(spinInterval);

    const finalIndex = Math.floor(Math.random() * tasks.length);
    const selectedTask = tasks[finalIndex];

    resultDisplay.innerText = "🎯 GO DO: " + selectedTask;
    const motivationDisplay = document.getElementById("motivation");

const messages = [
  "Just start for 5 minutes.",
  "No pressure. Just begin.",
  "You don’t have to finish — just start.",
  "Momentum > perfection.",
  "Start messy.",
  "One small step is enough.",
  "I know this might not be the task that you wanted to do but it chose you. Accept it."
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
motivationDisplay.innerText = randomMessage;

    // POP ANIMATION
    resultDisplay.classList.add("pop");
    setTimeout(() => {
      resultDisplay.classList.remove("pop");
    }, 400);

    spinBtn.disabled = false;

    startTimer();
  }, 2000);
}

function startTimer() {
  let timeLeft = 300; // 5 minutes
  const timerDisplay = document.getElementById("timer");

  const interval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.innerText =
      `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      timerDisplay.innerText = "🎉 Time's up! Great job!";
    }
  }, 1000);
}