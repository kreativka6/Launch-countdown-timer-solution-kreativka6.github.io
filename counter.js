const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const date = "24 Feb 2024";  /*end of the war in Ukraine*/


function counting(){
const today = new Date();
const newDate = new Date(date);
const totalSeconds = new Date(newDate - today)/1000;

const d = Math.floor(totalSeconds/ 3600 / 24);
const h = Math.floor(totalSeconds/ 3600) % 24;
const m = Math.floor(totalSeconds/ 60) % 60;
const s = Math.floor(totalSeconds) % 60;  /* how many seconds */

days.textContent = d;
hours.textContent = h;
minutes.textContent = m;
seconds.textContent = s;
}

counting();
setInterval(counting, 1000);