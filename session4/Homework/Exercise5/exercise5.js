let inPut = prompt("Enter a list of numbers, separated by ‘,’")
let newInPut = inPut.split(",")
let outPut = []
for( let i = 0;i < newInPut.length; i++ ){
    if (newInPut[i] % 2 == 0){
        outPut.push(newInPut[i])
    }
}
console.log("All even numbers from entered list:");

for (let i = 0; i < outPut.length; i++ ){
    console.log(outPut[i]);
}