// -------------OBJECT-----------------
// Create
// const personObject = {
//     name: "Nam", 
//     yob: 99,
//     city: "Ha Noi",
//     girlFriend: 0,
// }
// console.log(personObject);

const movieObject = {
    name: "Về nhà đi con",
    actor:["Dương","Bảo","Huệ","Thanh"],
    director : "Nguyễn Danh Dũng",
    year: "2018-2019",
}
// Read
// console.log(movieObject["name"]);
// console.log(movieObject.director);
for(let key in movieObject){
    console.log(key);
    console.log(movieObject[key]);
    console.log(key, movieObject[key]); // Không dùng được movieObject.key   
}
// Update
movieObject.name = "Về nhà ngay"
console.log(movieObject);
movieObject.play = ["thứ 5","thứ 6"] // thêm key
const actorsArray = movieObject.actor
console.log(actorsArray[0]);

// Delete
delete movieObject.year
console.log(movieObject);

