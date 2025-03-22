const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");

setInterval(() => {
  // Analog Clock

  let date = new Date();
  // console.log(date);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // • هر ساعت معادل ۳۰ درجه است (چون ۳۶۰ درجه تقسیم بر ۱۲ ساعت = ۳۰ درجه). بنابراین، تعداد ساعت‌ها را در ۳۰ ضرب می‌کنیم.
  hr.style.transform = `rotateZ(${30 * hours + minutes / 12}deg)`;

  //  • هر دقیقه معادل ۶ درجه است (چون ۳۶۰ درجه تقسیم بر ۶۰ دقیقه = ۶ درجه). بنابراین، تعداد دقیقه‌ها را در ۶ ضرب می‌کنیم.
  mn.style.transform = `rotateZ(${minutes * 6}deg)`;

  // •ثانیه مشابه دقیقه، هر ثانیه نیز معادل ۶ درجه است
  sc.style.transform = `rotateZ(${seconds * 6}deg)`;

  // Digital Clock
  const digital = document.getElementById("digital");

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  digital.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
