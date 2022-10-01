const canv = document.getElementById('canvas')
const main = document.getElementById('main');
const btn = document.getElementById('btn')


let canvas = canv.getContext('2d');
// let cangra = canvas.createLinearGradient(0, 0, 200, 900)
// cangra.addColorStop(0, 'red')
// cangra.addColorStop(.5, 'green')
// cangra.addColorStop(1, 'blue')
// canvas.strokeStyle = cangra
// canvas.lineCap = 'round'
// canvas.lineWidth = 50
// // canvas.globalAlpha = 0.75

// canvas.beginPath()
// canvas.moveTo(10, 10)
// canvas.lineTo(100, 100)
// canvas.lineTo(200, 200)
// canvas.lineTo(200, 700)
// canvas.lineTo(900, 700)
// // canvas.closePath()
// canvas.stroke()

// window.onmousemove = (e) => {
//     console.log(e)
// }


btn.onclick = (e) => {
    // e.preventDefault()
    // canvas.reset()
}

canvas.lineWidth = 100;
    canvas.lineCap = 'round'
    canvas.lineJoin = 'round'
    let lastx = 0, lasty = 0, hue = 0
main.addEventListener('mousedown', (e) => {
    
    canvas.beginPath();
    
    canvas.globalAlpha = 1
    // let canvasGradient = canvas.createLinearGradient();
    // canvas.strokeStyle = `rgba(${(Math.random() * 1000) % 256}, ${(Math.random() * 1000) % 256}, ${(Math.random() * 1000) % 256}, 1)`;  
    let start = performance.now()

    canvas.moveTo(e.clientX, e.clientY);
    main.addEventListener('mousemove', (evt) => {
        canvas.beginPath();
        // canvas.moveTo(e.clientX, e.clientY)
        canvas.lineTo(evt.offsetX, evt.offsetY)
        canvas.strokeStyle = `hsl(${hue%360}, 100%, 50%)`
        canvas.stroke()
        lastx = evt.offsetX
        lasty = evt.offsetY
        hue++

})
})
main.addEventListener('mouseup', (e) => {
    // canvas.lineWidth = 0;
    canvas.globalAlpha = 0;
})
