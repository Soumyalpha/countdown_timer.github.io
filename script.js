const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYear = '1 Jan 2024';

function countdown() {
    const targetdate = new Date(newYear);
    const currentDate = new Date().getTime();
    const timeremaining = targetdate - currentDate;

    const totalseconds = (targetdate - currentDate) / 1000;
    
    const months = Math.floor(timeremaining/(1000 * 60 * 60 * 24 * 30.44)) ;
    const days1 = Math.floor(totalseconds / 3600 / 24);
    const days = days1 - 30 ;
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000)
