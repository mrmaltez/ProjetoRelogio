let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let secondDeg = ((360/60) * second) - 90;
    let minuteDeg = ((360/60) * minute) - 90;
    let hourDeg = ((360/12) * hour) + ((30/60) * minute) - 90;

    secondElement.style.transform = `rotate(${secondDeg}Deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}Deg)`;
    hourElement.style.transform = `rotate(${hourDeg}Deg)`;
}

function fixZero (time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();