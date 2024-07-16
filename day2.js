//  activity one
// write a program to perform arithmetic operationss like (+,-,*,/,%)

let num1 = 5;
let num2 = 3;

let result;
//+
result = num1 + num2;

console.log(result);
//-
result = num1 - num2;

console.log(result);
//*
result = num1 * num2;

console.log(result);
// /
result = num1 / num2;

console.log(result);
//%
result = num1 % num2;

console.log(result);

// assignment operatorr  use += and _-= operatorss
//+=
let n1 = 10;

n1 +=2;

console.log(n1);

//-=
n1 = 10;
n1 -=2;

console.log(n1);

// comparision operatorr
//< > 

let var1 = 11;
let var2 = 12;

console.log(var1 < var2);
console.log(var1 > var2);

// >= <=

let vari1 = 11;
let vari2 = 11;

console.log(vari1 <=  vari2);
console.log(vari1 >= vari2);


// == ===
console.log(vari1 == vari2);
console.log(vari1 === vari2);


// logical operatorsss
//&&

let com1 = 10;
let com2 = 15;
 
console.log(com1 < com2 && com2 < com1);
console.log(com1 < com2 || com2 < com1);
console.log(com1 < com2 !== com2 < com1);

// ternary operatorr
// let n = 0;
// let n = 2;
let n = -2;

let ans = n < 0 ? "Negative" : n > 0 ? "Positive" : "Zero";

console.log(ans);