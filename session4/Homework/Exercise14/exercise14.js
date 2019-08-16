let score = [45, 67,56,78]
let temp
for( let i = 0 ; i < score.length; i++){
    for( let j = i; j < score.length; j++){
        console.log(score[i],score[j]);
        
      if(score[i] < score[j]){
            temp = score[i]
            score[i] = score[j]
            score[j] = temp
      }
}
console.log(score);
}
let newNumber = prompt("Enter new number")
score.push(newNumber)
for( let i = 0 ; i < score.length; i++){
    for( let j = i; j < score.length; j++){
        console.log(score[i],score[j]);
        
      if(score[i] < score[j]){
            temp = score[i]
            score[i] = score[j]
            score[j] = temp
      }
    }
}
 console.log(score);