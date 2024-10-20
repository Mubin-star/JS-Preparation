// singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Mubinur",
    "full name": "Mubinur Rahman",
    [mySym]: "mykey1",
    age: 22,
    location: "Dhaka",
    email:"mubinurr274@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "mubin@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "mubin@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());