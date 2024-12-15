const timeoutUI = document.getElementById("timeout");
const daysUi = document.getElementsByClassName('days')[0]
const hoursUi = document.getElementsByClassName('hours')[0]
const minutesUi = document.getElementsByClassName('minutes')[0]
const secondsUi = document.getElementsByClassName('seconds')[0]
function Timeout() {
  const newYear = new Date("01-01-2025 12:00 AM");
  const todayDate = new Date();
  if (newYear < todayDate) {
    clearInterval(timeoutId);
    timeoutUI.innerHTML = `<p>Happy new year</p>`;
  }
  let distance = newYear - todayDate;

  const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  distance = distance - days * (24 * 60 * 60 * 1000);

  const hours = Math.floor(distance / (60 * 60 * 1000));
  distance = distance - hours * (60 * 60 * 1000);

  const minutes = Math.floor(distance / (60 * 1000));
  distance = distance - minutes * 60 * 1000;

  const seconds = Math.floor(distance / 1000);
  daysUi.innerHTML = days
  hoursUi.innerHTML = hours
  minutesUi.innerHTML = minutes
  secondsUi.innerHTML = seconds
  timeoutUI.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

const timeoutId = setInterval(Timeout, 1000);
