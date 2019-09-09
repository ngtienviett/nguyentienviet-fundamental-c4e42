// let h1 = document.getElementById('heading-1');

// console.log(h1);
// console.dir(h1);


// let headingTags = document.getElementsByClassName('heading');

// console.log(headingTags);
// console.dir(headingTags);



// let divs = document.getElementsByTagName('div');

// console.log(divs);
// console.dir(divs);

// let h1 = document.getElementById('heading-1');

// h1.id = "Hello, my name is HEADING LEVEL 1";
// console.log(h1);
// let changeLink = document.getElementsByTagName('a');
// console.log(changeLink[0]);
// changeLink[0].href = "https://www.facebook.com"
// console.log(changeLink[0]);

// // let h2 = `<h2>This is heading level 2</h2>`;
// let ul = `<ul id="list"><li> Ronaldo</li><li> Messi</li><li> Neymar</li></ul>`;
// let body = document.getElementById('nice-body');

// body.innerHTML += h2;
// body.innerHTML += ul;

// let h2 = document.getElementsByClassName('heading')
// h2.remove();

// let h1 = document.getElementById('heading-1');
// h1.addEventListener('click', function(){
//     console.log("Click");
// })

let body = document.getElementById('nice-body')
let playerList = document.getElementById('player-list');
let names = ["Ronaldo","Messi","Neymar"]
function addPlayer(name){
    let li = `<li class="player">${name}</li>`
    playerList.innerHTML += li
}
names.forEach(function (name){
    addPlayer(name);
});
body.innerHTML +=`<button id="button">Click too add a player</button>`;
let click = document.getElementById('button');
click.addEventListener('click', function(){
    let newPlayer = prompt("Enter the new player")
    addPlayer(newPlayer)
})




// let myInput = document.getElementById('my-input');
// myInput.addEventListener('keypress', function(){
//     console.log("Inputing...");  
// })