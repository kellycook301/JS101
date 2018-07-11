console.log("hello main.js");

console.log("add this", "2+2", "and another", 3 + 4);

let lostColors = {
    yellow: ["dandelion", "mac and cheese"],  // array //
    blue: "blues",
    add: function(a,b){
        return a + b;
    }
};
lostColors.length = 16;

console.log(lostColors.length);
console.log("add color ", lostColors.add(3, 12));

let crayonBox = ["yelow", "blue", "lemon", lostColors];
console.log("crayonBox", crayonBox);
let junkDrawer = ["tape", "sticky", 2, "fishing wire", "crayon", "Phillip", crayonBox]
console.log("junkDrawer", junkDrawer);

let name = "linda";

console.log("what kind of data is name", typeof(name));

let myCost = 3 / 1.5;
console.log("myCost is", myCost);

let myDads = 2 / 2;
console.log("myDads is", myDads);

let snow = true;
let ice = true;

if (snow !== true || ice === true) {
    console.log("school is cancelled");
    } else {
        console.log("learn more cool stuff");
    }

let phrase = "The quick brown fox jumps over the lazy dog";
console.log("phrase length", phrase.length);
console.log("where is the x", phrase.indexOf("fox"));

let newStuff = `<h2>My Favorite Poems</h2>
        <p>${phrase}</p>
        <h3>By Kelly Cook</h3>`;

console.log("newStuff", newStuff);

// let addToDom = document.getElementById("demo");
// addToDom.innerhtml = newStuff;

let addToDom = document.querySelector(".demo");
addToDom.innerHTML = newStuff;

// Basic JS demo from 7.11.18 // 