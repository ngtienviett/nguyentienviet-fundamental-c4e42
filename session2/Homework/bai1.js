let month =Number(prompt("Enter the month"))

if(month >=13 || month <= 0) {
    console.log("You enter wrong month.");
}
else{
    if(month <= 3){
        console.log("Spring");
    }
    else if(month <= 6){
        console.log("Summer");
    }
    else if (month <=9){
        console.log("Fall");
    }
    else{
        console.log("Winter");
    }
}