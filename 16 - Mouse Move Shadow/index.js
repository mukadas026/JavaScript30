const test = document.querySelector('#test')
const main = document.querySelector('#main')


function showShadow(e){
    // console.log(e)
    let rect = test.getBoundingClientRect()

    // console.log(rect.left - e.offsetX)
    let shadow1 = `${e.pageX - window.innerWidth/2}px ${e.pageY - window.innerHeight/2}px rgba(255, 0, 0, 0.75)`
    let shadow2 = `${window.innerWidth/2 - e.pageX}px ${window.innerHeight/2 - e.pageY}px rgba(0, 0, 255, 0.75)`
    let shadow3 = `${e.pageY - window.innerHeight/2}px ${e.pageX - window.innerWidth/2}px rgba(0, 255, 0, 0.75)`
    let shadow4 = `${window.innerHeight/2 - e.pageY}px ${window.innerWidth/2 - e.pageX}px rgba(0, 255, 255, 0.75)`
    test.style.textShadow = shadow1.concat(',', shadow2, ',', shadow3, ',', shadow4)
}


main.addEventListener('mousemove', showShadow)




