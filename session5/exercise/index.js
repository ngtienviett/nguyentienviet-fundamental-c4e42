// // ------------Bài 1--------------- 

// const dictionary = {
//     cmnr : "com me nau roi",
//     cc: "cuc cung",
//     vch: "vai ca hon",
//     dkmvl: "dung khoc ma vui len",
// }
// let inPut = prompt("Enter the word you want to translate")

// if (inPut in dictionary == false){
//     let ask = prompt("You word is not in our dictionary. Do you want to translate to help us?")
//     if(ask == "yes"){
//         let meaning = prompt("What is the meaning of this word?")
//         dictionary[inPut] = meaning
//     }
// console.log(dictionary);
// }
// else{
//     console.log(dictionary[inPut]);
     
// }

// --------------- Bài  2------------------
// let staff = [
//     {
//         name: "Nam",
//         role: "Waiter",
//         hour: 10,
//         salaryPerHour: 5,
//     },
//     {
//         name: "Duc",
//         role: "Security",
//         hour: 15,
//         salaryPerHour: 3,
//     }
// ]
// let nameOfNewStaff = prompt("Enter name of new staff")
// let roleOfNewStaff = prompt("Enter role of new staff")
// let hourOfNewStaff = prompt("Enter hour of new staff")
// let salaryPerHourOfNewStaff = prompt("Enter salary per hour of new staff")
//   let newStaff ={
//             name : nameOfNewStaff,
//             role : roleOfNewStaff,
//             hour: hourOfNewStaff,
//             salaryPerHour: salaryPerHourOfNewStaff,
//             }
// staff.push(newStaff)
// let sumSalary = 0;
// for(let i = 0; i <staff.length; i++){
//     console.log(`${staff[i].name}, role: ${staff[i].role }, salary per month: ${(staff[i].hour)*(staff[i].salaryPerHour)*30} `);  
//     sumSalary +=  (staff[i].hour)*(staff[i].salaryPerHour)*30
// }
// console.log(`${sumSalary} is total money must pay for staffs`);

//------------------ bài 3 --------------------
let ask =
[
    {
    question:"How many leg does spide have?",
    choice: 
    {
        1 : "2 legs",
        2 : "4 legs",
        3 : "6 legs",
        4 : "8 legs",
    },
    correct : 3,
    },
    {
    question:"How many leg does dog have?",
    choice: {
        1 : "2 legs",
        2 : "4 legs",
        3 : "6 legs",
        4 : "8 legs",
    },
    correct : 2,

    }
]
console.log(ask);
