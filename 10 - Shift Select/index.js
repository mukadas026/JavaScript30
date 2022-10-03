const checkbox = document.querySelectorAll('.check-box')
const para = document.querySelectorAll('.para')
let clicked = false, indexStart, indexEnd;


checkbox.forEach((value, i) => {
    value.addEventListener('click', (e) => {
        if(clicked === false || value.checked === true){
            clicked = true;
            indexStart = i;
            return
        }
        if(value.checked === false){
            clicked = false
            return 
        }
    })
})

window.addEventListener('keydown', (e) => {
    if(e.key ==='Shift'){
        checkbox.forEach((value, i) => {
            value.addEventListener('click', (evt) => {
                indexEnd = i;
                return check()
            })
        })        
    }
})

    
function check(){
    for(indexStart; indexStart <= indexEnd; indexStart++){
        checkbox[indexStart].checked = true
        para[indexStart].style.textDecoration = 'line-through'
    }
}
