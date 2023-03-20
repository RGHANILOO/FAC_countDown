const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();

const closingDate= new Date(`March 26 ${currentYear} 11:59:00`);


// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = closingDate - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  mins.innerHTML = m < 10 ? '0' + m : m;
  secs.innerHTML = s < 10 ? '0' + s : s;
}


// Run every second
setInterval(updateCountdown, 1000);

