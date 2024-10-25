const coding = ["js", "ruby", "java", "pyhton", "cpp"]


const values = coding.forEach (  (item)  => {
        console.log(item);
        
})

console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter ( (num) => {
    return num > 4
} )
console.log(newNums);


const newNums = []

myNums.forEach( (num)  => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
     edition: 2004 },
    { title: 'Book two', genre: 'Non-Fiction', publish: 1987,
     edition: 2009 }, 
    { title: 'Book three', genre: 'History', publish: 1989,
    edition: 2008 },   
    { title: 'Book four', genre: 'science', publish: 1980,
    edition: 2009 },        
];

const userBooks = books.filter( (bk)  => bk.genre === 'History' )

console.log(userBooks);