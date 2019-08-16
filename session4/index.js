// PART 1
//     Bài1
// let inPut = ["5","1","8","92","-1","30"]

// let n = prompt("Enter the number you want to find")
// if(inPut.includes(n) == false){
//     console.log("Not found");
    
// }
// else {
//     console.log(`Found, position ${(inPut.indexOf(n))}`);   
// }
// -------------- Bài 2------------
// let inPut = ["5","1","8","92","-1","30"]
// //Không dùng hàm sum
// let sum = 0;
// for(let i = 0; i< inPut.length; i++){
//     sum += Number(inPut[i])
// }
// console.log(sum);


// // ------------- Bài 3 ---------------
// let inPut = prompt("Enter a list of numbers, separated by ‘ ‘ ")
// let newInPut = inPut.split(" ")
// let sum = 0;
// for(let i = 0; i< newInPut.length; i++){
//     sum += Number(newInPut[i])
// }
// console.log(sum);


// PART 2
// ---------------- BÀi 4------------

// let inPut = ["5","1","8","92","-1","30"]
// let outPut = []
// for (let i = 0; i< inPut.length; i++){
//     if (inPut[i] % 2 == 0){
//         outPut.push(inPut[i]);
//     }
// }
// console.log("All even numbers:", outPut);

// ---------------- BÀi 5---------
// let inPut = prompt("Enter a list of numbers, separated by ‘,’")
// let newInPut = inPut.split(",")
// let outPut = []
// for( let i = 0;i < newInPut.length; i++ ){
//     if (newInPut[i] % 2 == 0){
//         outPut.push(newInPut[i])
//     }
// }
// console.log("All even numbers from entered list:");

// for (let i = 0; i < outPut.length; i++ ){
//     console.log(outPut[i]);
// }


// PART 3
// -------------- Bài 6--------------
// let district = ["ST", "BĐ", "BTL","CG","ĐĐ","HBT"]
// let population = ["150.300","247.100","333.300","266.800","420.900","318.000"]
// let max = 0;
// let min = population[0];
// for(let i= 0; i < population.length; i++){
//     if(population[i] > max){
//         max = population[i];
//     }
// }
// for(let i= 1; i < population.length; i++){
//     if(population[i] < min){
//         min = population[i];
//     }
// }
// console.log(`Index of the highest population ${population.indexOf(max)}`);
// console.log(`Index of the lowest population ${population.indexOf(min)}`);
// console.log(`The district has the highest population ${district[population.indexOf(max)]}`);
// console.log(`The district has the lowest population ${district[population.indexOf(min)]}`);

// // PART 4 
// // ----------------- Bài 9-----------
// let acreage = ["117.43","9.224","43.35","12.04","9.96","10.09"]
// let populationDensity = []
// for(let i = 0; i< population.length; i++){
//     populationDensity.push((population[i]/acreage[i]))
// }
// console.log(populationDensity);

// //---------------- Bài 10 --------------
// let AveragePopulationDensity 
// let sum = 0
// for(let i = 0; i< populationDensity.length; i++){
//     sum += populationDensity[i]
// }
// AveragePopulationDensity = sum / (populationDensity.length +1)

// console.log(AveragePopulationDensity);

// PART 5 
// ------------- bài 11 ---------------
// let score = ["45", "67","56","78"]
// for(let i = 0; i < score.length; i++){
// console.log(`${(score.indexOf(score[i])+1) }. ${score[i]}`);
// }
// let newScore = prompt("Enter new score")
// score.push(newScore)
// for(let i = 0; i < score.length; i++){
//     console.log(`${(score.indexOf(score[i])+1) }. ${score[i]}`);
//     }
//------------ bài 14-------------
// let score = [45, 67,56,78]
// let temp
// for( let i = 0 ; i < score.length; i++){
//     for( let j = i; j < score.length; j++){
//         console.log(score[i],score[j]);
        
//       if(score[i] < score[j]){
//             temp = score[i]
//             score[i] = score[j]
//             score[j] = temp
//       }
// }
// console.log(score);
// }
// let newNumber = prompt("Enter new number")
// score.push(newNumber)
// for( let i = 0 ; i < score.length; i++){
//     for( let j = i; j < score.length; j++){
//         console.log(score[i],score[j]);
        
//       if(score[i] < score[j]){
//             temp = score[i]
//             score[i] = score[j]
//             score[j] = temp
//       }
//     }
// }
//  console.log(score);

// ----------------- Bài 15 ---------------------
// let score = [45, 67,56,78]
// let temp
// let newNumber = prompt("Enter new score")
// score.push(newNumber)
// for( let i = 0 ; i < score.length; i++){
//     for( let j = i; j < score.length; j++){
//         console.log(score[i],score[j]);
        
//       if(score[i] < score[j]){
//             temp = score[i]
//             score[i] = score[j]
//             score[j] = temp
//       }
//     }
// }
// let ask = prompt("Do you want to add new score?")
// if (ask == 'yes'){
//     newNumber = prompt("Enter new score")
// score.push(newNumber)
// for( let i = 0 ; i < score.length; i++){
//     for( let j = i; j < score.length; j++){
//         console.log(score[i],score[j]);
        
//       if(score[i] < score[j]){
//             temp = score[i]
//             score[i] = score[j]
//             score[j] = temp
//       }
//     }
// }
// for(let i =0; i< 5;i++){
//     console.log(score[i]);
//     }
// }

