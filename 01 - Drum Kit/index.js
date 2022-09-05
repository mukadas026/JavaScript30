const content = document.querySelector("#content-group");
const keys = document.getElementsByClassName('key');
const keyHolder = document.getElementsByClassName('key-holder')
let reader = new Audio();
const main = document.querySelector("#main")
const body = document.querySelector('#body')
// content.addEventListener('click', (e) => {
//     reader.pause();
//     switch(e.target.innerHTML){
//         case 'A':
//             reader.src= "./sounds/boom.wav";
            
//             break;
//         case 'S':
//             reader.src = "./sounds/clap.wav";
            
//             break;
//         case 'D':
//             reader.src = "./sounds/kick.wav";
            
//             break;
//         case 'F':
//             reader.src = "./sounds/ride.wav";
            
//             break;
//         case 'G':
//             reader.src = "./sounds/snare.wav";
            
//             break;
//         case 'H':
//             reader.src = "./sounds/tom.wav";
            
//             break;
//         case 'J':
//             reader.src = "./sounds/hihat.wav";
            
//             break;
//         case 'K':
//             reader.src = "./sounds/openhat.wav";
            
//             break;
//         case 'L':
//             reader.src = "./sounds/tink.wav";
            
//             break;
//     }
//     reader.play();
    
// })




body.addEventListener('keydown', (e) => {
    // console.log(e.target)
    reader.pause();
    switch(e.key.toUpperCase()){
        case 'A':
            reader.src= "./sounds/boom.wav";
            // keys[0].classList.add('glow')
            break;
        case 'S':
            reader.src = "./sounds/clap.wav";
            // keys[1].classList.add('glow')
            break;
        case 'D':
            reader.src = "./sounds/kick.wav";
            // keys[2].classList.add('glow')
            break;
        case 'F':
            reader.src = "./sounds/ride.wav";
            // keys[3].classList.add('glow')
            break;
        case 'G':
            reader.src = "./sounds/snare.wav";
            // keys[4].classList.add('glow')
            break;
        case 'H':
            reader.src = "./sounds/tom.wav";
            // keys[5].classList.add('glow')
            break;
        case 'J':
            reader.src = "./sounds/hihat.wav";
            // keys[6].classList.add('glow')
            break;
        case 'K':
            reader.src = "./sounds/openhat.wav";
            // keys[7].classList.add('glow')
            break;
        case 'L':
            reader.src = "./sounds/tink.wav";
            // keys[8].classList.add('glow')
            break;
        default:
            reader.src = "";
    }

    for(let i = 0; i < keys.length; i++){

        if(keys[i].innerHTML === e.key.toUpperCase()){
            keyHolder[i].classList.add('glow')
            setTimeout(() => keyHolder[i].classList.remove('glow'), 250)
        }
    }

    reader.play();
    
    console.log(e)
    
    
})