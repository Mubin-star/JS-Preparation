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
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

//console.log(calculateCartPrice(200, 400, 500, 20000))

const user = {
   username: " mubin",
   price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is $
    {anyobject.price}`);
}

//handleObject(user)
handleObject({
  username: "ramika",
  price: 499
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


