const hour = document.getElementsByClassName("hour")[0];
const minute = document.getElementsByClassName("min")[0];
const second = document.getElementsByClassName("sec")[0];

setInterval(() => {
  second.innerHTML = new Date().getSeconds().toString().padStart(2, "0");
  hour.innerHTML = new Date().getHours().toString().padStart(2, "0");
  minute.innerHTML = new Date().getMinutes().toString().padStart(2, "0");
}, 1000);

clearInterval();
