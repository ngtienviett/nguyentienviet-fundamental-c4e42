// Khai báo hàm
// function tênHàm(){
//         Thân hàm
//}
// Gọi hàm 
// tênHàm()



function calculate(a,b,op) {
// const a = Number(prompt("Enter the first number"))
// const b = Number(prompt("Enter the second number"))
// const c = prompt("+, - , * or /")
let result = 0;
    if (op === "+"){
        result = a + b
    }
    if (op === "-"){
        result = a - b
    }
    if (op === "*"){
        result = a * b
    }
    if (op === "/"){
        result = a / b
    }
    return result;          // fruitful function( hàm có return ) _______ void function ( hàm không return )
}
const result = calculate(4,5,"+")
console.log(result);

