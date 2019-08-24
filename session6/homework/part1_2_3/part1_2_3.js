    let laptop = {
        HP : 20,
        DELL : 50,
        MACBOOK : 12,
        ASUS : 30
    }
    console.log(`MACBOOK : ${laptop.MACBOOK}`);
    let ask = prompt("What kind of laptop brand you want see?")
    if( laptop[ask] == undefined){
        console.log("You enter wrong brand");
        
    }
    else{
        console.log(`${ask} : ${laptop[ask]}`);
    }
    laptop.TOSHIBA = 10;
    let newItem = prompt("What is the name of brand you want add?")
    let soLuong = Number(prompt(`How many laptop of ${newItem}`))
    laptop[newItem] = soLuong;
    console.log(laptop);
    laptop.DELL += 10;
    laptop.MACBOOK = 2;
    let sum = 0;
    laptop.FUJITSU = 15;
    laptop.ALIENWARE = 5;
    for(let key in laptop){
        console.log(`${key} : ${laptop[key]}`);
        sum += laptop[key];
    }
    console.log(`All laptop in store is ${sum}`);
