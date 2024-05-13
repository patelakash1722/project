let timer;
let startTime;
let pausedTime = 0;
let isPaused = false;

function start() {
  const startButton = document.getElementById("start");
  const pauseButton = document.getElementById("pause");
  const stopButton = document.getElementById("stop");

  startButton.disabled = true;
  pauseButton.disabled = false;
  stopButton.disabled = false;

  startTime = Date.now() - pausedTime;
  timer = setInterval(updateTime, 1000);
}

function pause() {
  if (!isPaused) {
    clearInterval(timer);
    pausedTime += Date.now() - startTime;
    document.getElementById("pause").textContent = "Continue";
    isPaused = true;
  } else {
    start();
    document.getElementById("pause").textContent = "Pause";
    isPaused = false;
  }
}

function stop() {
  clearInterval(timer);
  document.getElementById("time").textContent = "00:00:00";
  pausedTime = 0;
  isPaused = false;
  document.getElementById("pause").textContent = "Pause";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("stop").disabled = true;
}

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("time").textContent = formattedTime;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}