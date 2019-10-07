var h1 = document.getElementsByTagName('h1')[0],
  miliseconds = 0, seconds = 0, minutes = 0, hours = 0;

function add() {
  miliseconds+=11;
  if (miliseconds >= 999) {
    miliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliseconds > 99 ? miliseconds : miliseconds > 9 ? "0" + miliseconds : "00" + miliseconds);
  timer();
}
function timer() {
  window.myTimeout = setTimeout(add, 11);
}

var startTime = function() {
  timer();
  start.style.display = "none";
}

var resumeTime = function() {
  timer();
  resume.style.display = "none";
}

var stopTime = function() {
  clearTimeout(window.myTimeout);
  start.style.display = "none";
  resume.style.display = "inline";
}

var clearTime = function() {
  h1.textContent = "00:00:00:000";
  miliseconds = 0; seconds = 0; minutes = 0; hours = 0;
  clearTimeout(window.myTimeout);
  start.style.display = "inline";
  resume.style.display = "none";
}
