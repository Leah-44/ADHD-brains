const quotes = [
  "You’re not lazy. Your brain just works differently.",
  "Starting is the hardest part.",
  "Small progress still counts.",
  "Done is better than perfect.",
  "Focus comes after action.",
  "One task at a time.",
  "Your effort matters."
  "You’re not lazy. You’re navigating a different operating system.",
  "Starting is hard. That doesn’t mean you’re incapable.",
  "Your brain runs on interest, not pressure — and that’s okay.",
  "Small steps still count. Especially today.",
  "Executive dysfunction is real. So is your potential.",
  "You don’t lack discipline. You need the right spark.",
  "Progress > perfection. Always.",
  "Your creativity isn’t chaos — it’s unfiltered brilliance.",
  "It’s not procrastination. It’s a brain waiting for momentum.",
  "Hyperfocus is basically a superpower with poor scheduling.",
  "You deserve systems that work with you, not against you.",
  "One task. One start. That’s enough for now.",
  "Your effort counts — even when it’s invisible to others.",
  "ADHD isn’t a flaw. It’s high-voltage wiring.",
  "You’re not behind. You’re just on a different timeline."
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
