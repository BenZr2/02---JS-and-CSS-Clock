function refClock() {

const time = new Date();
const hour = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();

console.log(hour,minutes,seconds);

const hourDeg = hour * 30 + 90;
const minuteDeg = minutes * 6 + 90;
const secondDeg = seconds * 6 + 90;

const hourHand = document.querySelector('.hour-hand');
hourHand.style.transform = "rotate(" + hourDeg + "deg)";

const minuteHand = document.querySelector('.min-hand');
minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";

const secondHand = document.querySelector('.second-hand');
secondHand.style.transform = "rotate(" + secondDeg + "deg)";

console.log(hourHand, minuteHand, secondHand); 

};

setInterval(refClock, 1000);
