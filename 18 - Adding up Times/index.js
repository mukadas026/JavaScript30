const items = Array.from(document.querySelectorAll('[data-time]'))
let hours = 0, minutes = 0, seconds = 0

function addTime(){
items.forEach((value) => {
    value = value.dataset.time.split(':')

    // seconds += Number(value[1])
    // if (seconds >= 60) {
    //     minutes += Math.floor(seconds / 60)
    //     seconds = seconds % 60
    // }
    // minutes += Number(value[0])
    // if (minutes === 24) {
    //     hours += Math.floor(minutes / 24)
    //     minutes = minutes % 24
    // }

    seconds += Number(value[1])
    minutes += Number(value[0])
})
}

function logTime(){
    addTime()
    minutes += Math.floor(seconds/60)
    seconds = seconds % 60
    hours += Math.floor(minutes / 60)
    minutes = minutes % 60

    console.log(hours, minutes, seconds)
}
logTime()
