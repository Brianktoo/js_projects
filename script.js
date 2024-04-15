#!/usr/bin/env python

// let firstName ='brian'
// let lastName ='kipkosgei'
// let x=19
// console.log(firstName + ' ' + lastName);

// console.log((x%2)===0 ? 'Even':'odd'); // tanary operator
// console.log((firstName === 'brian' ? 'correct' : 'incorrect name'));

//if..else


//tanary operator
let a=10
console.log((a>1)? 'postive':'negative');

//traditional for loops
const n=5;
for(let i=1; i<=n; i++){
    console.log(`${i} love js`);
}

//for of loop
let arr=['a', 'b', 'c']

for(let i of arr){
    console.log(i);
}
//for each loop
const cars=['toyota', 'nissan', 'probox']

cars.forEach(function(value,key,array){
    console.log(value,key,array);
});

//celcius to Fahrenheit
function cencius_to_Fahrenheit(x) {
    return ((x * 1.8) + 32.0);
}

const x = prompt('Please enter defrees in celcius')
 
alert(`${x} degrees celcius is equal to ${cencius_to_Fahrenheit( x )}`);





