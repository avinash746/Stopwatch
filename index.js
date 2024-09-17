let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

const displayTime = document.getElementById("time");
const playPauseBtn = document.getElementById("play-pause");
let timer = null;

function stopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  const mi = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + mi;
}

let currentStatus = "Stop";

function runStopwatch() {
  if (currentStatus === "Start") {
    currentStatus = "Stop";
    playPauseBtn.innerHTML = "Start";

    clearInterval(timer);
  } else {
    currentStatus = "Start";
    playPauseBtn.innerHTML = "Stop";

    if (timer !== null) {
      clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
  }
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  clearInterval(timer);
  displayTime.innerHTML = "00:00:00:00";
  playPauseBtn.innerHTML = "Start";
  currentStatus = "Stop";
}
