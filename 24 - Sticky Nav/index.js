const nav = document.querySelector('#nav')
const header = document.querySelector('#header')
const insert = document.querySelector('#insert')

document.onscroll = (e) => {
    let headerRect = header.getBoundingClientRect()
    let navRect = nav.getBoundingClientRect()


    // Checking the position of the bottom of the header element
    if(headerRect.bottom <= 100){

        // giving the entry of the Insert element a smooth animation with intervals
        let inc = setInterval(() => {
            if(Number(insert.style.width.split('px')[0]) >= 160){
                return clearInterval(inc)
            }
            insert.style.width = `${Number(insert.style.width.split('px')[0]) + 1}px`
            
        }, 1)
        
        // setting the postion of the nav bar to fixed
        nav.style.position = 'fixed'
        nav.style.top = 0
        
    }else{
        // setting every elemtn back to their initial states

        nav.style.position = 'relative'
        // insert.style.width = '0rem' 
        let dec = setInterval(() => {
            if(Number(insert.style.width.split('px')[0]) <= 0){
                return clearInterval(dec)
            }
            insert.style.width = `${Number(insert.style.width.split('px')[0]) - 1}px`
            
        }, 10)
    }
}