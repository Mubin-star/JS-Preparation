const userEmail = "m@mubin.ai"

if (userEmail) {
    console.log("GOt user email");
} else {
    console.log("Don't have user email");
}

//false values

//false, 0, -0, Bight on, "", null, undefined, NaN

//truethy values
// "0", 'fasle', " ", [], {} , function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//false == 0
//true
//false == ''
//true
//0 == ''
//true

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less the 80") : console.log
("more than 80")