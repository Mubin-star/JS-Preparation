const name = "mubin"
const repoCount = 50


console.log(`Hello my name is ${name} and my repo count is $
    {repoCount}`);//Hello my name mubin and my repo count is 50

const gameName = new String('mubin-hc')

console.log(gameName[0]);//h//
console.log(gameName.__proto__);//{}//


console.log(gameName.length);//5//
console.log(gameName.toUpperCase());//MUBIN//
console.log(gameName.charArt(2));//u//
console.log(gameName.indexOf);//2//

const newString = gameName.substring(0, 4)
console.log(newString);//mubi//

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);//ubi//

const newStringOne = "   mubin   "
console.log(newStringOne.trim());//    mubin   //


const url ="https://mubin.com/mubin%20rahman"

console.log(url.replace('%20', '_' ))//https://mubin.com/mubin_rahman//

console.log(url.includes('ramika'))//false//

console.log(gameName.split('-'));