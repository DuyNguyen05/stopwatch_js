var h1 = document.getElementsByTagName('h1')[0],
  start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  resume = document.getElementById('resume'),
  clear = document.getElementById('clear'),
  seconds = 0, minutes = 0, hours = 0,
  t,
  running;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
  }

  h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}

var hideButton = function() {
  if (running === true) {
    start.style.display = "none";
    resume.style.display = "inline";
  } else {
    start.style.display = "inline";
    resume.style.display = "none";
  }
}

var startTime = function() {
  running = false;
  timer();
}

var stopTime = function() {
  running = true;
  clearTimeout(t);
  hideButton();
}

var clearTime = function() {
  h1.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
  running = false;
  hideButton();
}

start.onclick = startTime;

resume.onclick = startTime;

stop.onclick = stopTime;

clear.onclick = clearTime;
