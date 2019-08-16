let score = ["45", "67","56","78"]
for(let i = 0; i < score.length; i++){
console.log(`${(score.indexOf(score[i])+1) }. ${score[i]}`);
}
let newScore = prompt("Enter new score")
score.push(newScore)
for(let i = 0; i < score.length; i++){
    console.log(`${(score.indexOf(score[i])+1) }. ${score[i]}`);
    }