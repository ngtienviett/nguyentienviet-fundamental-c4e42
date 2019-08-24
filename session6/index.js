    // let laptop = {
    //     HP : 20,
    //     DELL : 50,
    //     MACBOOK : 12,
    //     ASUS : 30
    // }
    // console.log(`MACBOOK : ${laptop.MACBOOK}`);
    // let ask = prompt("What kind of laptop brand you want see?")
    // if( laptop[ask] == undefined){
    //     console.log("You enter wrong brand");
        
    // }
    // else{
    //     console.log(`${ask} : ${laptop[ask]}`);
    // }
    // laptop.TOSHIBA = 10;
    // let newItem = prompt("What is the name of brand you want add?")
    // let soLuong = Number(prompt(`How many laptop of ${newItem}`))
    // laptop[newItem] = soLuong;
    // console.log(laptop);
    // laptop.DELL += 10;
    // laptop.MACBOOK = 2;
    // let sum = 0;
    // laptop.FUJITSU = 15;
    // laptop.ALIENWARE = 5;
    // for(let key in laptop){
    //     console.log(`${key} : ${laptop[key]}`);
    //     sum += laptop[key];
    // }
    // console.log(`All laptop in store is ${sum}`);

    // let price = {
    //     HP : 600,
    //     DELL : 650,
    //     MACBOOK : 12000,
    //     ASUS : 400,
    //     ACER : 350,
    //     TOSHIBA : 600,
    //     FUJITSU : 900,
    //     ALIENWARE : 1000,
    // }
// console.log(` ASUS : ${price.ASUS}`);
// let seePrice = prompt("Enter the name of brand you want see price?")
// if( laptop[seePrice] == undefined ){
//     console.log("you enter wrong brand");
    
// }    
// else{
//     console.log(`${seePrice} : ${price[seePrice]}`);
    
// }
// let buy = prompt("Enter the name of brand you want to buy")
// let totalPrice = prompt(`How many laptop of ${buy} you want to buy`)
// console.log(`You need to pay : ${(price[buy])*totalPrice}`);
// for(let key in laptop){
//     if(buy == key){
//         laptop.key -= totalPrice
//     }
//     console.log(`${key} : ${laptop[key]}`);    
// }
//  let calculateTotalPrice = 0
// for(let key in laptop){
//     console.log(laptop[key]);
//     console.log(price[key]);
//     console.log(`${key} : ${laptop[key]*price[key]}`);
//     calculateTotalPrice += laptop[key]*price[key];
// }
// console.log(`Calculate total price : ${calculateTotalPrice} `);

// PARt 7

// let character = {
//     name : "light",
//     age : 17,
//     strength: 8,
//     defence: 10,
//     HP : 100,
//     backPack: [
//         "shield",
//         "bread loaf",
//     ],
//     gold: 100,
//     level: 2,
// }
// character.gold += 50;
// character.backPack.push("FlintStone")
// character.pocket =["MonsterDex","Flashlight"]
// let skill = [
//     {
//         name : "Tackle",
//         minimumLevel: 1,
//         damage : 5,
//         hitRate : 0.3,
//     },
//     {
//         name: "Quick attack",
//         minimumLevel: 2,
//         damage: 3,
//         hitRate: 0.5,
//     },
//     {
//         name: "Strong Kick",
//         minimumLevel: 4,
//         damage: 9,
//         hitRate: 0.2

//     }
// ]
// for( let i = 0; i < skill.length; i++){
//     console.log(skill[i]);
//     console.log(`${i + 1}. ${skill[i].name}`);
// }
// let checkSkill = Number(prompt("Enter the skill you want to use? (chose 1,2 or 3)"))
// if (character.level >= skill[checkSkill - 1 ].minimumLevel ){
//     if (skill[checkSkill - 1].hitRate > Math.random){
//     console.log(skill[checkSkill - 1].damage);
//     }
//     else{
//         console.log("your skill is miss");
        
//     }
    
// }
// else {
//     console.log("you have not enough lever to use this skill");
    
// }


// let count = 0;
// let x = true
// for(let i = 0; x ; i ++){
// let answer = Math.floor(Math.random()*2)
// let a = Math.floor(Math.random()*10);
// let b = Math.floor(Math.random()*10);
// let c = Math.floor(Math.random()*19);
//     if(answer == 0){
//         let quiz = prompt(`${a} + ${b} = ${c} `);
//         if (quiz === "f"){
//             quiz = false;
//         }
//         else{
//             quiz = true;
//         }
//         if (((a + b) === c) === quiz ){
//             count++;
//         }
//         else{
//             x = false;
//             console.log(`OVER GAME`);
//             console.log(`You had corectly ${count}.`);
//         }
//         }
//     if(answer == 1){
//         let quiz = prompt(`${a} + ${b} = ${a + b} `);
//         if(quiz == "t"){
//             count++;
//         }
//         else{
//             x = false;
//             console.log(`OVER GAME`);
//             console.log(`You had corectly ${count}.`);
//         }
//     }
// }
