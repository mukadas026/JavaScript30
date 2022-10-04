const main = document.querySelector('#main')
const section = document.querySelector('#section')
const vid = document.querySelector('#vid')
const vidControls = document.querySelector('#vid-controls')

const progress = document.querySelector('#prog')
const pausePlay = document.querySelector('#pp')
const volBtn = document.querySelector('#vol-btn')
const volumeSlider = document.querySelector('#volume')
const vol = document.querySelector('#vol')
const fullScreen = document.querySelector('#fs')
const seekBack = document.querySelector('#sb')
const seekForward = document.querySelector('#sa')

main.style.width = vid.style.width

vid.controls = false
vidControls.style.display = 'grid'
progress.setAttribute('max', vid.duration)
console.dir(vid)


vid.ontimeupdate = () => {
    progress.value = vid.currentTime/vid.duration;
}
progress.onclick = (e) => {
    vid.currentTime = e.offsetX
    console.log(vid.currentTime)

} 

pausePlay.onclick = (e) => {
    e.preventDefault()
    if(vid.paused){
        return vid.play()
    }
    return vid.pause()
}
vid.onclick = (e) => {
    e.preventDefault()
    if(vid.paused){
        return vid.play()
    }
    return vid.pause()
}
document.onkeydown = (e) => {
    if(e.key === ' '){
        if(vid.paused){
            return vid.play()
        }
        return vid.pause()
    }
}

volBtn.onmouseenter = () => {
    volBtn.style.cursor = 'pointer'
    if(volumeSlider.classList.contains('slide-out')){
        return volumeSlider.classList.replace('slide-out', 'slide-in')
    }
    return volumeSlider.classList.add('slide-in')
}
volumeSlider.onmouseenter = () => {
    volBtn.style.cursor = 'pointer'
    if(volumeSlider.classList.contains('slide-out')){
        return volumeSlider.classList.replace('slide-out', 'slide-in')
    }
    return volumeSlider.classList.add('slide-in')
}
vol.onmouseout = () => {
    if(volumeSlider.classList.contains('slide-in')){
        return volumeSlider.classList.add('slide-out')
    }
    return volumeSlider.classList.add('slide-out')
}
volBtn.onclick = () => {
    vid.muted = !vid.muted
}
volumeSlider.oninput = () => {
    vid.volume = volumeSlider.value/100
}

seekBack.onclick = () => {
    vid.currentTime -= 10
}
seekForward.onclick = () => {
    vid.currentTime += 10
}
vid.onmouseenter = () => {
    if(vidControls.classList.contains('fade-out')){
        return vidControls.classList.replace('fade-out', 'fade-in')
    }
    return vidControls.classList.add('fade-in')
}
vidControls.onmouseover = () => {
    if(vidControls.classList.contains('fade-out')){
        return vidControls.classList.replace('fade-out', 'fade-in')
    }
    return vidControls.classList.add('fade-in')
}
vid.onmouseleave = () => {
    if(vidControls.classList.contains('fade-in')){
        return vidControls.classList.add('fade-out')
    }
    return vidControls.classList.add('fade-out')
}

fullScreen.onclick = (e) => {
    if(document.fullscreenElement !== null){
        document.exitFullscreen();
        setFullscreenData(false)
    }else{
        section.requestFullscreen()
        // vidControls.requestFullscreen()
        setFullscreenData(true)
    }
}
function setFullscreenData(state){
    section.setAttribute('data-fullscreen', !!state)
}

document.addEventListener('fullscreenchange', (e) => {
    setFullscreenData(!!document.fullscreenElement)
})

console.log(document.fullscreenEnabled)