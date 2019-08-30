// function checkMail(mail){
//     return   mail.includes("@");     
// }
// const ask = prompt("Enter your e-mail");
// const check = checkEmail(ask);
// if (check == true){
//     console.log("you entered right e-mail");
// }    
// else{
//     console.log("you entered wrong e-mail");
// }

// function soChan(array){
//     let newArray = []
//     for( let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0){
//             newArray.push(i)
//         }
//     }
//     return newArray;
// }
// const ask = prompt("Enter number array")
// let display = soChan(ask)
// console.log(display);
// // cách khai báo hàm khác 
// const soChan = (array) => {              
//                                -------> arrow function
// }



const hocBai = (callback) => {
    console.log("đang học bài");
    console.log("...");
    console.log("học bài xong");
    callback()
}


const diNgu = () =>{
    console.log("di ngủ");
}

const diChoi = () =>{
    console.log("di choi");
    
}
const meNhac =() =>{
    hocBai(diNgu)
}
setTimeout(meNhac, 4000);
// array.map________array.filter___________array.reduce