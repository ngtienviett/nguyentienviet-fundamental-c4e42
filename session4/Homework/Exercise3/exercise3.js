let inPut = prompt("Enter a list of numbers, separated by ‘ ‘ ")
let newInPut = inPut.split(" ")
let sum = 0;
for(let i = 0; i< newInPut.length; i++){
    sum += Number(newInPut[i])
}
console.log(sum);