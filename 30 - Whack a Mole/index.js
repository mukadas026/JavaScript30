const count = document.querySelector('#count')
const moles = document.querySelectorAll('#holes [src="mole.svg"]')
const dirt = document.querySelectorAll('#holes [src="dirt.svg"]')
const button = document.querySelector('#btn')
let out = false
let hit = 0

moles.forEach((val) => {
    val.setAttribute('draggable', false)
})
dirt.forEach(val => val.setAttribute('draggable', false))




const handleStart = (e) => {
    e.preventDefault()

    hit = 0
    count.innerHTML = hit

    let timerStart = performance.now() 
    // let rand
    let start = setInterval(() => {

        let diff = performance.now() - timerStart 
        // if(diff > 20000){
            
        //     clearInterval(start)
        //     window.alert(`you have finished with ${hit} hits`)
        // }
        // console.log(diff)
        let rand = Math.floor(Math.random() * 10) % 6
        
        
        moles[rand].style.transform = `translatey(0%)`

        setTimeout(() => {
            moles[rand].style.transform = `translatey(100%)`
        }, 700)

        if(diff > 20000){
            
            clearInterval(start)
            window.alert(`you have finished with ${hit} hits`)
        }
    
    }, 1000)
}

const changeCount = (e) => {
try{
    hit++
    count.innerHTML = hit
}catch(err){
    console.log(err)
}

}


button.addEventListener('click', handleStart)
moles.forEach((val) => val.addEventListener('mousedown', changeCount))