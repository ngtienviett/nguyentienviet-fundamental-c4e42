// ----------------- Bài 9-----------
let acreage = ["117.43","9.224","43.35","12.04","9.96","10.09"]
let populationDensity = []
for(let i = 0; i< population.length; i++){
    populationDensity.push((population[i]/acreage[i]))
}
console.log(populationDensity);

//---------------- Bài 10 --------------
let averagePopulationDensity 
let sum = 0
for(let i = 0; i< populationDensity.length; i++){
    sum += populationDensity[i]
}
averagePopulationDensity = sum / (populationDensity.length)

console.log(averagePopulationDensity);