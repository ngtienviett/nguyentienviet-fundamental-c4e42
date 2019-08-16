let inPut = ["5","1","8","92","-1","30"]
let outPut = []
for (let i = 0; i< inPut.length; i++){
    if (inPut[i] % 2 == 0){
        outPut.push(inPut[i]);
    }
}
console.log("All even numbers:", outPut);
