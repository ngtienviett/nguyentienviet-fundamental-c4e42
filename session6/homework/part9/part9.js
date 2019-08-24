let count = 0;
let x = true
for(let i = 0; x ; i ++){
let answer = Math.floor(Math.random()*2)
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
let c = Math.floor(Math.random()*19);
    if(answer == 0){
        let quiz = prompt(`${a} + ${b} = ${c} `);
        if (quiz === "f"){
            quiz = false;
        }
        else{
            quiz = true;
        }
        if (((a + b) === c) === quiz ){
            count++;
        }
        else{
            x = false;
            console.log(`OVER GAME`);
            console.log(`You had corectly ${count}.`);
        }
        }
    if(answer == 1){
        let quiz = prompt(`${a} + ${b} = ${a + b} `);
        if(quiz == "t"){
            count++;
        }
        else{
            x = false;
            console.log(`OVER GAME`);
            console.log(`You had corectly ${count}.`);
        }
    }
}