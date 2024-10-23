const user = {
    username: "mubin",
    price: 999,

    welcomeMessage: function() {
        console.log(` ${this.username} , welcone to website`)
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "ramika"
user.welcomeMessage()

//console.log(this);


function bro(){
    let username = "Mubin"
    console.log(this);
}

bro()


const bro = function () {
    let username = " mubin"
    console.log(this.username);
}

const bro =  () => {
    let username = " mubin"
    console.log(this);
}

bro()



//const addTwo = (num1, num2) =>   num1 + num2
//const addTwo = (num1, num2) =>   ( num1 + num2 )
const addTwo = (num1, num2) =>   ({user: "mubin"})


console.log( addTwo(3, 4))


const myArray = [2, 3, 4, 5, 6, 6]

myArray.forEach()