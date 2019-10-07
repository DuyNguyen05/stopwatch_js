var h1 = document.getElementsByTagName('h1')[0],
  seconds = 0, minutes = 0, hours = 0;

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
  window.myTimeout = setTimeout(add, 1000);
}

var startTime = function() {
  timer();
}

var stopTime = function() {
  clearTimeout(window.myTimeout);
  start.style.display = "none";
  resume.style.display = "inline";
}

var clearTime = function() {
  h1.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
  start.style.display = "inline";
  resume.style.display = "none";
}
