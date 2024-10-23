console.log("M");
console.log("U");
console.log("B");
console.log("I");
console.log("N");



function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("B");
    console.log("I");
    console.log("N");
}

//sayMyName()

//function addTwoNumbers(number1, number2){

   //console.log(number1 + number2);
//}


function addTwoNumbers(number1, number2){

  //let result = number1 + number
  //return result
  return number1 + number2

}

const result = addTwoNumbers(3, 5)

//console.log("Result:", result);

function loginUserMessage(username = "ramika"){
    if(!username){
         console.log("PLease enter a username");
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Mubin"))
console.log(loginUserMessage())
   
