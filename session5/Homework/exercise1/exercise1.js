let ask =
[
    {
        question:"How many legs an octopus have?",
        choice: 
        [
            "1. One leg",
            "2. Two legs",
            "3. Four legs",
            "4. Eight legs",
        ],
        correct : 4,
    },
    {
        question:"How many legs a cat have",
        choice:[
            "1. One leg",
            "2. Four legs",
            "3, Six legs",
            "4. Eight legs"
        ],
        correct: 2,
    },
    {
        question: "How many peoples are there",
        choice: [
            "1. 10",
            "2. 8",
            "3. 6",
            "4. 4"
        ],
        correct: 1,
    }

]

let count = 0;
for (let i = 0; i < ask.length; i++){
    console.log(ask[i].question, ask[i].choice);
    
    let answer = prompt("What is your answer? (chose 1,2,3 or 4) ") 
   if (answer == ask[i].correct){
        count++;
        console.log(`Quiz ${i + 1}`);
        console.log("Hura!!");
        }
    else{
        console.log(`Quiz ${i + 1}`);
        console.log("Not a correct answer :’(");   
    }
}
console.log(`You answered ${count} questions correctly.`);
console.log(`Percent that you answered correctly is ${(count/ask.length)*100}%`);

    