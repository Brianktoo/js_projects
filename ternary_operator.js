#!/usr/bin/env node

let result = (20 > 0) ? true:false;
console.log(result)

let message = (20>19) ? "yes": "no";
console.log(message)

function scores(marks){
//let marks=39
let pMark=(marks > 40) ? "pass": "fail";
console.log(pMark)
}
scores(22)

function age_bracket(age){
let myCategory =(age > 18) ? "you are an adult" : "you are a child"
console.log(myCategory)	
}
age_bracket(15)

function exam_message(mark){
let results = (mark < 40) ? "unsatisfactory":
	(mark<60) ? "average":
	(mark<80) ? "good" : "excellent"
console.log(results)
}
exam_message(67)
