let counter = 1
let prevRand = 1

const rand = (max = 10) => {
    time = new Date().getTime()
    randValue = ((time / counter) / (prevRand + 1)) % max
    counter++
    prevRand = randValue
    return parseInt(randValue)
}

console.log(rand(100))
console.log(rand(1000))
console.log(rand(10000))
console.log(rand())
console.log(rand())
console.log(rand())