const a = Math.floor(Math.random() *10);
const b = Math.floor(Math.random() *10);
const saiSo = [-1, 0 , 1]
const ops = ["+", "-","*","/"]
const randNumber = Math.floor(Math.random() * 3);
const randOps = ops[Math.floor(Math.random() * 4)]; 
const displayResult = calculate(a,b,randOps) + saiSo[randNumber] 
const c = calculate(a,b,randOps)
const ans = prompt("T/F?")
if ( c === displayResult){
    if (ans === "T"){
        console.log("Correct!");
    }
    else if (ans === "F"){
        console.log("Wrong -_-");
    }
}
else{
    if (ans === "F"){
        console.log("Correct!");
    }
    else if (ans === "T"){
        console.log("Wrong -_-");
    }
}

