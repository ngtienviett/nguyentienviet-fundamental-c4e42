// for( let i=0; i<=10; i++) {
//     console.log(i)
// }
// for( let i=0; i<=100; i +=2){
//     console.log(i)
// }
// for ( let i=100; i>0; i--){
//     console.log(i)
// }
// let sum = 0
// let n = prompt("Nhập vào giá trị n")
 
// for(let i=0; i<=n; i++){
//     sum +=i 
// }
        // vẽ hình theo số cạnh
// console.log(sum)
// clear()
// let n =prompt("Nhap vao so canh cua da giac")
// lt(90)
// for(let m=0; m<=n; m++){
//  for(let i=0; i<m; i++){
//    rt(360/m)
//    fd(100)
//  }  
// }



// let n = prompt("Nhap vao mot so");
// if(n<13){
//     console.log(n,"bé hơn 13");
// }
// else {
//     console.log(n,"không bé hơn 13");
    
// }
// let yob = Number(prompt("Nhập vào năm sinh"));
// let age = 2019 - yob;

// if (age >18){
//     console.log("Trưởng thành");  
// }
// else if(12 <= age){
//     console.log("Thiêu niên");
// }
// else{
//     console.log("Thiếu nhi");
// }




let id = String(prompt("Nhập vào id của bạn"))

if (id === "mindX"){
    let pass = prompt("Nhập vào mật khẩu của bạn")
    if(pass === "123"){
        console.log("Bạn đã đăng nhập thành công");
    }
    else{
        console.log("Mật khẩu của bạn đã sai mời bạn nhập lại");
    }
}
else{
    console.log("ID cua bạn sai mời bạn nhập lại");
}