console.log('hello')

const massMark = 10;
const heightMark = 2;
const massJohn =12;
const heightJohn =2;


const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark,BMIJohn,markHigherBMI);
