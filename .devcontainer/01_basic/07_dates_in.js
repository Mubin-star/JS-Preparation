// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreateDate = new Date(2024, 0, 24)
let myCreateDate = new Date(2024, 0, 24, 5 , 3)
let myCreateDate = new Date("20-10-2024")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/10000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `//

newDate.toLocaleString('default',{
    weekday: "long",
    
})
