let a = Number(prompt("Enter a"))
let b = Number(prompt("Enter b"))
let c = Number(prompt("Enter c"))

if(a==0){
    if (b == 0 && c == 0){
        console.log("Wrong equation");
    }
    else if (b == 0 && c!=0){
        console.log("The equation hasn't root");
    }
    else{
        let x = -c/b
    console.log("x =",x);
    }
}
else{
    let denta = b**2 - 4*a*c
    if(denta < 0 ){
        console.log("The equation hasn't root"); 
    }
    else if(denta == 0){
        console.log("The equation has a root x =",-b/(2*a));
    }
    else{
        console.log("The equation two roots");
        console.log("x1 =",(-b + denta**0.5)/(2*a));
        console.log("x1 =",(-b - denta**0.5)/(2*a));
    }
}
