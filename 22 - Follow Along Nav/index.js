// const main = document.querySelector('#main')
// const items = document.querySelectorAll('.nav-item')
// const hover = document.querySelector('#hover')

// items.forEach((value) => {
//     value.onmouseover = () => {
//         let styles = getComputedStyle(value)
//         let rect = value.getBoundingClientRect()
//         let hoverLeft = Number(hover.style.left.split('px')[0])
//         let hoverTop = Number(hover.style.top.split('px')[0])
//         let move;

//         // hover.style.top = `${rect.y + 15}px`
//         // hover.style.left = `${rect.x}px`
//         hover.style.width = `${Number(styles.width.split('px')[0]) + Number(styles.padding.split('px')[0])}px`
//         hover.style.height = `${Number(styles.height.split('px')[0]) + Number(styles.padding.split('px')[0])}px`

//         function updateValues(){
//             hoverTop = Number(hover.style.top.split('px')[0])
//             hoverLeft = Number(hover.style.left.split('px')[0])
//         }

//         console.log(hoverLeft, hoverTop, rect.x, rect.y)

//     // if(hoverTop < rect.y + 15){
//     //     move = setInterval(() => {
//     //         updateValues()

//     //         if(hoverLeft <= rect.x){
//     //             hover.style.left = `${hoverLeft + 10}px`
//     //         }
//     //         if(hoverLeft > rect.x){
//     //             hover.style.left = `${hoverLeft - 10}px`
//     //         }
//     //         if(hoverTop < rect.y + 15){
//     //             hover.style.top = `${hoverTop + 10}px`
//     //         }
//     //         if(hoverLeft >= rect.x && hoverTop >= rect.y +15){ 
//     //             return clearInterval(move)
//     //         }

//     //     }, .01)

//     //     return 
//     // }

//     if(hoverLeft <= rect.x){
//         move = setInterval(() => {
//             updateValues()
//             if(hoverTop > rect.y){
//                 hover.style.top = `${hoverTop - 10}px`
//             }
//             if(hoverTop < rect.y){
//                 hover.style.top = `${hoverTop + 10}px`
//             }

//             hover.style.left = `${hoverLeft + 10}px`

//             if(hover.style.left.split('px')[0] >= rect.x){ 
//                 return clearInterval(move)
//             }
//         }, .1)
//         return 
//     }
//     if(hover.style.left.split('px')[0] >= rect.x){
//         move = setInterval(() => {
//             updateValues()
//             if(hoverTop > rect.y){
//                 hover.style.top = `${hoverTop - 10}px`
//             }
//             if(hoverTop < rect.y){
//                 hover.style.top = `${hoverTop + 10}px`
//             }

//             hover.style.left = `${hoverLeft - 10}px`
//             if(hover.style.left.split('px')[0] <= rect.x){ 
//                 return clearInterval(move)
//             }
//         }, .00001)
//         return
//     }


//     // if(hoverTop > rect.y + 15){
//     //     move = setInterval(() => {
//     //         updateValues()

//     //         if(hoverLeft <= rect.x){
//     //             hover.style.left = `${hoverLeft + 10}px`
//     //         }
//     //         if(hoverLeft > rect.x){
//     //             hover.style.left = `${hoverLeft - 10}px`
//     //         }
//     //         if(hoverTop > rect.y + 15){
//     //             hover.style.top = `${hoverTop - 10}px`
//     //         }
//     //         if(hoverLeft < rect.x && hoverTop <= rect.y +15){ 
//     //             return clearInterval(move)
//     //         }

//     //     }, .01)

//     //     // return 
//     // }

    
//     }
// })


// Trying another approach

const hover =  document.querySelector('#hover')
const items = document.querySelectorAll('.nav-item')

items.forEach(value => {
    // let styles = getComputedStyle(value)



    value.addEventListener('mouseover', (e) => {
        let rect = e.target.getBoundingClientRect()

        hover.style.width = `${rect.width}px`
        hover.style.height = `${rect.height}px`
        hover.style.transform = `translate(${Math.round(e.target.offsetLeft)}px, ${(e.target.offsetTop - 50 + e.target.offsetParent.offsetTop)}px)`
        // console.log(rect)
    })



    // value.addEventListener('mouseover', (e) => {
    //     let target = e.target
    //     let rect = target.getClientRects()[0]
    //     let previous

    //     hover.style.height = target.offsetHeight + 'px'
    //     hover.style.width = target.offsetWidth + 'px'
        
    //     // hover.style.top = `${Math.round(rect.top) + Number(styles.padding.split('px')[0])}px`
    //     // hover.style.left = target.offsetLeft + 'px'

    //     let start = performance.now()
    //     let duration = 500

    //     requestAnimationFrame(function animate(time){
    //         let diff = time - start
    //         let fraction = diff/duration
    //         let hoverTop = Number(hover.style.top.split('px')[0])
    //         let hoverLeft = Number(hover.style.left.split('px')[0])

    //         hover.style.top = (hoverTop + (((target.offsetTop + target.offsetParent.offsetTop)- hoverTop) * fraction)) + 'px';

    //         hover.style.left = (hoverLeft + ((Number(target.offsetLeft - hoverLeft)) * fraction)) + 'px'
            
    //         if(diff < 1000){
    //             requestAnimationFrame(animate)
    //         }
    //     })
    //     console.log(target.offsetTop + target.offsetParent.offsetTop)
    // })
})