const input = document.querySelector('#input')
const para = document.querySelector('#para')
const para2 = document.querySelector('#para2')

// console.dir(input)
para.innerHTML = ''

input.onkeyup = (e) => {
    para2.innerHTML = `You pressed ${e.key}`
    if(e.code === 'Space'){
        console.log(e.code)
        para.innerHTML += input.value
        return input.value = ''
    }
}