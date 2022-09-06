// "use strict"
const main = document.getElementById('main');
const para = document.getElementsByTagName('p');


main.addEventListener('click', (e) => {
    let classes = e.target.classList; 
    let children = e.target.children;
    let newClasses = [];
    

    classes.forEach(value => newClasses.push(value));

    if(newClasses.includes('stretch')){
        children[0].classList.replace('dropin', 'dropout')
        children[1].classList.replace('scaleup', 'scaledown')
        children[2].classList.replace('popin', 'popout')
        return classes.replace('stretch', 'squeeze');
        }
    if(newClasses.includes('squeeze')){
        children[0].classList.replace('dropout', 'dropin')
        children[1].classList.replace('scaledown', 'scaleup')
        children[2].classList.replace('popout', 'popin')
        return classes.replace('squeeze', 'stretch');
    }

        children[0].classList.add('dropin')
        children[1].classList.add('scaleup')
        children[2].classList.add('popin')
    return classes.add('stretch');

    
})