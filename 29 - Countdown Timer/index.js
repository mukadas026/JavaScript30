const item = document.querySelectorAll('.item')
const input = document.querySelector('.item > [type="number"]')
const form = document.querySelector('form')
const output = document.querySelector('#content')
const estimate = document.querySelector('#estimate')
let tick

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(tick !== undefined) {
        clearInterval(tick) 
    }

    let minutes = Number(input.value)
    timer(minutes)
})

item.forEach((value, index) => {
    value.addEventListener('click', (e) => {
        if(tick !== undefined) {
            clearInterval(tick)        
        }
        if(value.innerHTML === '20 Secs'){
            let minutes = 0
            let seconds = 20
            timer(minutes, seconds)
        }

        if(value.innerHTML === 'Work 5'){
            let minutes = 5
            timer(minutes)
        }
        if(value.innerHTML === 'Quick 15'){
            let minutes = 15
            timer(minutes)
        }
        if(value.innerHTML === 'Snack 20'){
            let minutes = 20
            timer(minutes)
        }
        if(value.innerHTML === 'Lunch Break'){
            let minutes = 60
            timer(minutes)
        }
})
})

let timer = (minutes, seconds) => {
    if(seconds === undefined){
        seconds = 59
    }
    // let minutes = 5
    if(minutes < 1 && minutes > 0){
        seconds = minutes * 60
        minutes = 0
    }
    let total = ((minutes * 60) + seconds) * 1000

    let hour = new Date(Date.now() + total).getHours()
    let minute = new Date(Date.now() + total).getMinutes()
    estimate.innerHTML = `Be back at ${String(hour).length === 2 ? hour : '0' + hour}:${String(minute).length === 2 ? minute : '0' + minute}`


    console.log()

    tick = setInterval(() => {
        if(minutes === 0 && seconds === 0){
            clearInterval(tick)
        }
            if(seconds < 0){
                seconds = 59
            }
            if(seconds === 59 && minutes !== 0){
                minutes --
            }
        
        output.innerHTML = `
        ${String(minutes).split('').length === 2 ? minutes : '0' + minutes}:${String(seconds).split('').length === 2 ? seconds : '0' + seconds}`
        seconds--
    }, 1000)
}