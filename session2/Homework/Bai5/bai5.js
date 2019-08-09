let i = Number(prompt("Enter a number"))
let x = true
let count
for(count = 0; x ; count ++){
    i = Math.floor(i / 10)
    if(i === 0 ) {
        x = false
    }
}
console.log("The number you entered has", count, "digits");