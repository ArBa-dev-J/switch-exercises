"use strict";

let a = +prompt("Write a number");
let operator = prompt("Write an operator");
let b = +prompt("Write a second number");

function basicCalc(a, b, operator) {
  if (operator == "/" && b == 0) {
    return alert("Cannot divide by zero")
  } 

    switch (operator) {
      case "+":
        alert(a + b);
        break;
      case "-":
        alert(a - b);
        break;
      case "*":
        alert(a * b);
        break;
      case "/":
        alert(a / b);
        break;
      default:
        alert("Wrong operator");
    }
  
  return a, b, operator;
}


basicCalc(a, b, operator);
