const items = document.querySelectorAll('.nav-item')
const hover= document.querySelector('#menu')
const hoverText = document.querySelector('#menu-text')
// const content = document.querySelectorAll('.content')
const nav = document.querySelector('#nav')

function handleEnter(e){
    this.classList.add('trigger')
    setTimeout(() => this.classList.contains('trigger') && this.classList.add('trigger-active'), 150)
    hover.classList.add('open')

    const content = this.querySelector('.content')
    // content.style.left = items.getBoundingClientRect().left/2 + 'px'
    const contentCoords = content.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    const coords = {
        height: contentCoords.height,
        width: contentCoords.width,
        top: contentCoords.top,
        left: contentCoords.left
    }

    hover.style.setProperty('width', `${coords.width}px`)
    hover.style.setProperty('height', `${coords.height}px`)
    hover.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave(e){
    this.classList.remove('trigger', 'trigger-active')
    hover.classList.remove('open')
}


items.forEach(val => val.addEventListener('mouseenter', handleEnter))
items.forEach(val => val.addEventListener('mouseleave', handleLeave))