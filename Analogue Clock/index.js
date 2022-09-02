const container = document.getElementById('container');
const main = document.getElementById('main')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const seconds = document.getElementById('seconds')

setInterval(() => {
    date = new Date();
    seconds.style.transform = 'rotate(' + (date.getSeconds() / 60) * 360 + 'deg)';
    minute.style.transform = 'rotate(' + (date.getMinutes() / 60) * 360 + 'deg)';
    hour.style.transform = 'rotate(' + (date.getHours() / 12) * 360 + 'deg)';
}, 1000)