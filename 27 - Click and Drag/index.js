const cards = document.querySelectorAll('.cards')
const main = document.querySelector('#main')
const div = document.querySelector('#div')

let clicked = false
let clickedAt, scrollLeft, x

cards.forEach((val, i) => {
    val.innerHTML = String(i).length === 1 ? '0'+ (i + 1) : (i + 1)
    if(i % 2 === 0){
        val.style.transformOrigin = `0% 50%`
        val.style.transform = `perspective(3000px) rotate3d(0, 1, 0, 45deg) scalex(1.66)`
    }else{
        val.style.transformOrigin = `100% 50%`
        val.style.transform = `perspective(3000px) rotate3d(0, -1, 0, 45deg) scalex(1.66)`
    }
})

function handleMousedown(e){
    startX = e.pageX - div.offsetLeft;
    scrollLeft = div.scrollLeft; 
    // console.log(e.pageX, div.offsetLeft)
    return clicked = true
}

function handleMouseup(e){
    return clicked = false
}

function handleMousemove(e){
   if(!clicked) return
   e.preventDefault()
   const x = e.pageX - div.offsetLeft
   const walk = (x - startX) * 3;
   div.scrollLeft = scrollLeft - walk;
  //  console.log(walk, scrollLeft)  
  
}

main.addEventListener('mousedown', handleMousedown)
main.addEventListener('mouseup', handleMouseup)
main.addEventListener('mousemove', handleMousemove)

// cards.forEach(val => val.addEventListener('mousedown', handleMousedown))




