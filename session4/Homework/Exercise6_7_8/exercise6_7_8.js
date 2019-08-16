let district = ["ST", "BĐ", "BTL","CG","ĐĐ","HBT"]
let population = ["150.300","247.100","333.300","266.800","420.900","318.000"]
let max = 0;
let min = population[0];
for(let i= 0; i < population.length; i++){
    if(population[i] > max){
        max = population[i];
    }
}
for(let i= 1; i < population.length; i++){
    if(population[i] < min){
        min = population[i];
    }
}
console.log(`Index of the highest population ${population.indexOf(max)}`);
console.log(`Index of the lowest population ${population.indexOf(min)}`);
console.log(`The district has the highest population ${district[population.indexOf(max)]}`);
console.log(`The district has the lowest population ${district[population.indexOf(min)]}`);