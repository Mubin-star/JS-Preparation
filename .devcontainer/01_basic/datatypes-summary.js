// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3534564596459743657n


// Reference (Non Primitive)

// Array, Objects,Functions


const heros = ["superman", "batman", "Hunk"];
let myObj = {
   name: "Mubin",
   age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


//+++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let  myYoutubename ="mubin467com"

let anothername = myYoutubename
anothername = "my love ramika" 

console.log(myYoutubename);//mubin467com//
console.log(anothername);//my love ramika//

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mubin@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//mubin@google.com//