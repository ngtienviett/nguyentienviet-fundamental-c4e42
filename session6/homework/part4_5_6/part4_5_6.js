    let laptop = {
        HP : 20,
        DELL : 50,
        MACBOOK : 12,
        ASUS : 30
    }
    laptop.TOSHIBA = 10;
    laptop.FUJITSU = 15;
    laptop.ALIENWARE = 5;
    let price = {
        HP : 600,
        DELL : 650,
        MACBOOK : 12000,
        ASUS : 400,
        TOSHIBA : 600,
        FUJITSU : 900,
        ALIENWARE : 1000,
    }
console.log(` ASUS : ${price.ASUS}`);
let seePrice = prompt("Enter the name of brand you want see price?")
if( laptop[seePrice] == undefined ){
    console.log("you enter wrong brand");
    
}    
else{
    console.log(`${seePrice} : ${price[seePrice]}`);
    
}
let buy = prompt("Enter the name of brand you want to buy")
let totalPrice = prompt(`How many laptop of ${buy} you want to buy`)
console.log(`You need to pay : ${(price[buy])*totalPrice}`);
for(let key in laptop){
    if(buy == key){
        laptop.key -= totalPrice
    }
    console.log(`${key} : ${laptop[key]}`);    
}
 let calculateTotalPrice = 0
for(let key in laptop){
    console.log(laptop[key]);
    console.log(price[key]);
    console.log(`${key} : ${laptop[key]*price[key]}`);
    calculateTotalPrice += laptop[key]*price[key];
}
console.log(`Calculate total price : ${calculateTotalPrice} `);