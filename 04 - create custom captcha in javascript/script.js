let codeCharacters = 
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%^&*"; // 70 character
const CODE_LENGTH = 50
let capchaCode = ""

let randomIndexGenerator = () => {
    return Math.floor( Math.random() * (70 - 0 + 1) - 0)
}

for(let index = 0; index < CODE_LENGTH; index++){
    capchaCode += codeCharacters[randomIndexGenerator()]
}

console.log(capchaCode)