const timer = 20;
let amountTime = 20 * 60;
const btn = document.querySelector("#btn");
let timerId;
const player = document.querySelector("#player");

btn.addEventListener("click", startTimer);

function startTimer() {
  if (!timerId) {
    timerId = setInterval(calculateTime, 1000);
    player.play()
  }
}

function calculateTime() {
  let countdown = document.querySelector("#countdown");
  let minutes = Math.floor(amountTime / 60);
  let seconds = amountTime % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  countdown.textContent = `${minutes}:${seconds}`;
  amountTime--;

  if (amountTime < 0) {
    stopTimer(timerId);
  }
}

function stopTimer(id) {
  clearInterval(id);
  player.pause();
  timerId = null;
  amountTime = timer * 60;
  countdown.textContent = "20:00";
}
