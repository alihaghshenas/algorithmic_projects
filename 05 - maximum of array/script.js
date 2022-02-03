const numbers = [4,8,2,5]
let maximumValue = 0
let minimumValue = Infinity

for(let number of numbers){
    if(number > maximumValue)
        maximumValue = number

    if(number < minimumValue)
        minimumValue = number
}

console.log(maximumValue)
console.log(minimumValue)