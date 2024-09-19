let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer = null;
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displaytime.innerHTML = h + ":" + m + ":" + s;
}
function watchStart() {
  console.log("watch is started");
  if (timer !== null) {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
  }
  timer = setInterval(stopwatch, 1000);
}
function watchStop() {
  console.log("watch is stoped");

  clearInterval(timer);
}
function watchReset() {
  console.log("watch is reset");

  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00";
}
