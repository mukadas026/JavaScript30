const sections = document.querySelectorAll('.sections')
const para = document.querySelectorAll('.para')
const main = document.querySelector('#main')
const check = document.querySelector('#check')

// window.onscroll = (e) => {
//     // console.dir(sections[0])
//     // check.innerHTML = ''
//     // let position = para[0].getBoundingClientRect()
//     // for(x in position){
//     //     // check.innerHTML = ''
//     //     if(typeof(x) !== 'function'){
//     //         // check.innerHTML = ''
//     //         check.innerHTML += `<br> ${x} : ${position[x]}`
//     //     }
//     // }

//     para.forEach((value, i) => {
//         let pos = value.getBoundingClientRect()
//         if(pos.bottom <= window.innerHeight/4 || pos.top >= window.innerHeight/4){
            // if(value.classList.contains('slide-in')){
            //     value.classList.replace('slide-in','slide-out')
            // }
            // value.classList.add('slide-out')
//         }
//         if(pos.top > window.innerHeight/4 && pos.bottom < window.innerHeight){
            // if(value.classList.contains('slide-out')){
            //     value.classList.replace('slide-out', 'slide-in')
            // }
//             value.classList.add('slide-in')
//         }
        
//     })
    
// }


// let observer = new IntersectionObserver(function(entries){
//     if(entries[0].intersectionRatio > 0){
//         console.log('Im working')
        
//     }
// })

para.forEach((value) => {
    let observer = new IntersectionObserver(function(entries){
        if(entries[0].intersectionRatio > 0){
            if(value.classList.contains('slide-out')){
                value.classList.replace('slide-out', 'slide-in')
            }
            return value.classList.add('slide-in')
        }
        if(entries[0].intersectionRatio < 1){
            if(value.classList.contains('slide-in')){
                value.classList.replace('slide-in','slide-out')
            }
            return value.classList.add('slide-out')
        }
        
    })
    observer.observe(value)
})