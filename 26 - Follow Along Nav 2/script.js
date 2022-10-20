function isPowerOfTwo(num){
    return num === 2 ** Math.floor(Math.log2(num))
}


function main(input){
     
    let jValues
    let arrValues
    let maxIndex
    let arr = []
    for(let i = 0; i < input.length; i){
        jValues = []
        arrValues = []
        for(let j = i + 1; j < input.length - 1; j++){
            if(isPowerOfTwo(j - i)){
                jValues.push(j)
            }
        }
        // arrValues = jValues.map(val => [val, input[val]])
        
        jValues.forEach((values, ind) => {
            maxIndex = values
            for(let j = ind + 1; j < jValues.length; j++){
                if(input[values] > )
            }
        })


        // arr.push(Math.max.apply(null, jValues.map(val => input[val])))
        
    }
    arr.push(input.length - 1)

    return arr
}

console.log(main([1, -2, -3, 7, -1]))