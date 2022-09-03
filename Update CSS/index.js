const padding = document.getElementById('padding');
const blur = document.getElementById('blur');
const color = document.getElementById('color');
const image = document.getElementById('image');
const file = document.getElementById('file');
const button = document.getElementById('button');


padding.value = 0;
blur.value = 0;
image.style.borderWidth = (padding.value) + 'px';
image.style.filter = 'blur( ' + (blur.value/8) + 'px)';
image.style.width = window.getComputedStyle(image).width;
image.style.height = window.getComputedStyle(image).height;
// console.log(image.style.height);


padding.oninput = () => {
    image.style.borderWidth = (padding.value) + 'px';
}
// padding.oninput = () => {
//     if(padding.value++){
//         image.style.height = Number(imgHeight() - 1) + 'px';
//         image.style.width = Number(imgWidth() - 1) + 'px';
//         image.style.borderWidth = (padding.value) + 'px';
//     }
//     if(padding.value--){
//         image.style.height = Number(imgHeight() + 1) + 'px';
//         image.style.width = Number(imgWidth() + 1) + 'px';
//         image.style.borderWidth = (padding.value) + 'px';
//     }
// }

blur.oninput = () => {
    image.style.filter = 'blur( ' + (blur.value/8) + 'px)';
}
color.oninput = () => {
    image.style.borderColor = color.value
}



function imgHeight(){
    let str = image.style.height;
    let newstr = str.split('');
    newstr.splice(newstr.length - 2, 2);
    // console.log(newstr.join(''));
    return Number(newstr.join(''));
}

function imgWidth(){
    let str = image.style.width;
    let newstr = str.split('');
    newstr.splice(newstr.length - 2, 2);
    // console.log(newstr.join(''));
    return Number(newstr.join(''));
}

file.onchange = (e) => {
    image.src = URL.createObjectURL(file.files[0])
    // console.log(file.)
}