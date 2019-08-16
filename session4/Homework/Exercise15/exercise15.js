let score = [45, 67,56,78]
let temp
let newNumber = prompt("Enter new score")
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
let ask = prompt("Do you want to add new score?")
if (ask == 'yes'){
    newNumber = prompt("Enter new score")
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
for(let i =0; i< 5;i++){
    console.log(score[i]);
    }
}