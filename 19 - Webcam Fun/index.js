const main = document.querySelector('#main')
const video = document.querySelector('#video')
const captures = document.querySelector('.captures')
const btn = document.querySelector('#snap')
let count = 0
// const ctx = canvas.getContext('2d')
let image, newEl, track, photo, captured, ctx
// let 
let newAudio = new Audio('snap.mp3')
navigator.mediaDevices.getUserMedia({video: true})
.then(mediaStream => {
    video.srcObject = mediaStream
    video.play()
    track = mediaStream.getVideoTracks()[0]
})

snap.onclick = (e) => {
        e.preventDefault()
        newEl = document.createElement('canvas')
        newEl.setAttribute("class", "captured")
        // newEl.setAttribute("style", "filter: hue-rotate(200deg);")
        // captures.innerHTML += `<canvas class="captured"></canvas>`
        captures.append(newEl)
        captured = document.querySelectorAll('.captured')
        frame = captured[count]
        ctx = frame.getContext('2d')
    
        new ImageCapture(track)
        .grabFrame()
        .then(blob => createImageBitmap(blob))
        .then(img => {
            // for(let i = 0; i <= count; i++){
            ctx.drawImage(img, 0, 0, frame.width, frame.height)
            ctx.fillStyle = "red"
            ctx.globalAlpha = 0.5
            ctx.fillRect(0, 0, frame.width/4, frame.height)
            ctx.fillStyle = "green"
            ctx.fillRect(frame.width/4, 0, frame.width/2, frame.height)
            ctx.fillStyle = "blue"
            ctx.fillRect(frame.width/2, 0, frame.width, frame.height)
        })
        newAudio.currentTime = 0
        newAudio.play()
        count++
}

// captured.forEach(value => {
//     value.addEventListener('click', (e) => {
//         console.log()
//     })
// })

// console.log(Number(getComputedStyle(main).height.split('px')[0]))
