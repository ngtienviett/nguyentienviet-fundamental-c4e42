let inPut = ["5","1","8","92","-1","30"]

let n = prompt("Enter the number you want to find")
if(inPut.includes(n) == false){
    console.log("Not found");
    
}
else {
    console.log(`Found, position ${(inPut.indexOf(n))}`);   
}