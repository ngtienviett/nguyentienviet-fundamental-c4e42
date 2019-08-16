// // Array
// // Create
// const monAn = ["com", "pho", "chao", "thit cho"]
// console.log(monAn);
// monAn.push("thit meo")
// console.log(monAn);
// monAn.push("com rang", "mi")
// console.log(monAn);
// // Read
// for(let i= 0; i < monAn.length; i++){
//     console.log(monAn[i]);
// }
// // Update
// monAn[7] = "bun dau";
// console.log(monAn);
// console.log(monAn.includes("banh mi"));
// if(monAn.includes(monAn[8]) == true){
//     monAn[8] = "khong co gi"
// }

// // Delete
// monAn.splice(2,1);     //(index, số biến muốn xoá )
// console.log(monAn);

// const cauThu = ["Tiến Dũng", "Quang Hải", "Xuân Trường"]
// let addName = prompt("Do you want add someone?")
// if (addName == "yes"){
//     let x = prompt("Enter new name")
//     cauThu.push(x)
// }
// else if (addName == "no"){
// console.log("You had not add someone");
// }
// else {
//     console.log("You must enter yes or no"); 
// }
// for(let i =0; i < cauThu.length;i ++){
//     console.log((i+1),cauThu[i]);
// }


// let reName = prompt("Do you want rename?")
// if (reName == "yes"){
//     let x = prompt("Enter who you want rename")
// if (cauThu.includes(x) == false){
//     console.log("You entered wrong name");
// }
// else{
//     for(let i =0; i <cauThu.length; i++){               // dùng cauThu.indexOf("tên cầu thủ") để tìm index của tên cầu thủ thay vòng lặp for.
//         if(cauThu[i] == x){
//             cauThu[i] = prompt("Enter new name")
//         }
//     }
// }
// }
// else if (reName == "no"){
//     console.log("You had not rename someone");
// }
// else {
//     console.log("You must enter yes or no");   
// }
// for(let i =0; i < cauThu.length;i ++){
//     console.log(`${(i + 1)} ${cauThu[i]}`);         // String formating (dùng biến trong câu string)        `   ${}     `
// }

// 



const input = prompt("Nhập vào dãy số với các số ngăn cách nhau bằng dấu ,")
const newInPut = input.split(",") 
let sum = 0
for(i = 0; i< newInPut.length; i++){
    sum += Number(newInPut[i])
}
console.log(sum);
