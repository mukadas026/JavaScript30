const checkbox = document.querySelectorAll('.check-box')
const para = document.querySelectorAll('.para')
let clicked = false, indexStart, indexEnd;


checkbox.forEach((value, i) => {
    value.addEventListener('click', (e) => {
        if(e.shiftKey){
            indexEnd = i;
            console.log('hello')
            return check();
        }
        if(value.checked === true){
            clicked = true;
            indexStart = i;
            para[indexStart].style.textDecoration = 'line-through';

            return
        }
        if(value.checked === false ){
            clicked = false;
            indexStart = i;
            para[indexStart].style.textDecoration = 'none';
            // indexStart = null;

            return 
        }
        
    })
})

// document.addEventListener('keydown', (e) => {
    // console.log(e)
    // if(e.key === 'Shift'){
        // checkbox.forEach((value, i) => {
        //     value.addEventListener('click', (e) => {
        //         if(e.shiftKey){
        //         indexEnd = i;
        //         console.log('hello')
        //         return check();
        //         }
        //     })
        // })        
//     }
// })

    
function check(){
    if(indexStart < indexEnd){
        for(indexStart; indexStart <= indexEnd; indexStart++){
            para[indexStart].style.textDecoration = 'line-through';
            checkbox[indexStart].checked = true;
            console.log(indexStart, indexEnd)
            if(indexStart === indexEnd){
                break;
            }
            
        }
    }
    else if(indexStart > indexEnd){
        for(indexEnd; indexEnd <= indexStart; indexEnd++){
            checkbox[indexEnd].checked = true;
            para[indexEnd].style.textDecoration = 'line-through';
            if(indexEnd === indexStart){
                break;
            }
        }
    }
}