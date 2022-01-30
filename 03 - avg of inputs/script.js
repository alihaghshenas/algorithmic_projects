let input
const values = []

while(input != "quit"){
    input = window.prompt()
    if(!isNaN(input))
        values.push(parseFloat(input))
}

let sum = 0
values.forEach( (value) => {
    sum += value
})

const result = sum / values.length
console.log(result)