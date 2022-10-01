"use strict"
const cat = {
    name: 'Milo',
    age: 3,
    color: 'white'
}

// const body = document.querySelector('body')

const humans = [
    [1, 3],
    [6, 8, 0],
    [1, 8, 2, 4],
    3
]

let arr = [5, 2, 3, 9, 6, 0]

function isPrime(num, timer){

    console.time(timer)
    if(num === 0 || num === 1){
        console.timeEnd(timer)
        return false
    }
    if(num === 2){
        console.timeLog(timer)
        console.timeEnd(timer)
        return true
    }
    for(let i = num - 1; i > 2; i--){
        if(num % i === 0){
            console.timeLog(timer)
            console.timeEnd(timer)
            return false
        }
    }
    console.timeLog(timer)
    console.timeEnd(timer)
    return true
}
console.warn('hello world')
