//Write a program that asks the user for their name and greets them with their name.
// function greeting() {
//   let name = prompt("Please enter your name");
//   alert("Hello " + name + " Welcome");
// }

//greeting();

//Modify the previous program such that only the users Alice and Bob are greeted with their names.
// function newGreet() {
//   let name = prompt("Please enter your name");
//   if (name === "Alice" || name === "Bob") {
//     alert("Hello " + name + " Welcome");
//   }
// }

//newGreet();

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
// function sum() {
//   let input = prompt("Please enter an integer number");
//   let inputInt = parseInt(input);
//   let result = 0;

//   for (i = 1; i < inputInt + 1; i++) {
//     result = i + result;
//   }

//   console.log(result);
// }

//sum();

// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
// function multiples() {
//   let input = prompt("Please enter an integer number");
//   let inputInt = parseInt(input);
//   let result = 0;

//   for (i = 1; i < inputInt + 1; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result = i + result;
//     }
//   }

//   return result;
// }

//multiples();

// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
// function choices() {
//   let input = document.querySelector("#int-input").value;
//   let inputInt = parseInt(input);
//   let result = 0;
//   let operation = document.querySelector("#operation");
//   let printOperation = document.querySelector("#result");
//   let value = operation.value;

//   if (value === "sum") {
//     for (i = 1; i < inputInt + 1; i++) {
//       result = i + result;
//     }

//     printOperation.innerHTML = result;
//   } else {
//     result = 1;
//     for (i = 1; i < inputInt + 1; i++) {
//       result = i * result;
//     }

//     printOperation.innerHTML = result;
//   }
// }

// Write a program that prints a multiplication table for numbers up to 12.
// function table() {
//   const selectedNumber = 12;
//   let result = 0;
//   for (j = 1; j < selectedNumber + 1; j++) {
//     for (i = 1; i < selectedNumber + 1; i++) {
//       result = i * j;
//       console.log(result);
//     }
//   }
// }

// table();

//Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.
// function game() {
//   const setNumber = 27;
//   let counter = 1;
//   let input = prompt("Guess an integer number. Between 1 - 50");
//   let inputInt = parseInt(input);

//   while (inputInt !== setNumber) {
//     if (inputInt > setNumber) {
//       console.log("Your number is larger. Try again");
//       let newTry = prompt("Your number is larger. Try again");
//       let newInt = parseInt(newTry);
//       inputInt = newInt;
//     } else {
//       console.log("Your number is smaller. Try again");
//       let newTry = prompt("Your number is smaller. Try again");
//       let newInt = parseInt(newTry);
//       inputInt = newInt;
//     }
//     counter = counter + 1;
//   }

//   console.log("You have guessed correctly!");
//   console.log("You needed " + counter + " tries to guess.");
// }

//game();

//Write a program that prints the next 20 leap years.
// function leap() {
//   let lastLeap = 2020;
//   let nextLeap = [];

//   while (nextLeap.length < 20) {
//     lastLeap = lastLeap + 4;
//     if (lastLeap % 4 !== 0) {
//       console.log("nadita");
//     } else if (lastLeap % 100 !== 0) {
//       nextLeap.push(lastLeap);
//     } else if (lastLeap % 400 !== 0) {
//       console.log("naca la pirinaca");
//     } else {
//       nextLeap.push(lastLeap);
//     }
//   }
//   console.log("The next 20 leaps years will be: " + nextLeap);
// }

//leap();

//Write a function that returns the largest element in a list.
// let list = [18, 21, 27, 5, 12];

// function getLargest() {
//   let currentLarger = 0;
//   for (i = 0; i < list.length; i++) {
//     if (list[i] > currentLarger) {
//       currentLarger = list[i];
//     }
//   }
//   console.log("The largest number of the array is: " + currentLarger);
// }

// getLargest();

//Write function that reverses a list, preferably in place.

// function reverse() {
//   let list = ["January", "February", "March", "April", "May", "June"];
//   console.log("This is the original list: " + list);

//   list.reverse();

//   console.log("This is the reversed list: " + list);
// }

//reverse();

//Write a function that checks whether an element occurs in a list.

// function check(element, list) {
//   for (i = 0; i < list.length; i++) {
//     if (element === list[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// check("Apples", ["Milk", "Eggs", "Bread", "Apples", "Bananas"]);

//Write a function that returns the elements on odd positions in a list

// function odd(list) {
//   let oddList = [];
//   for (i = 0; i < list.length; i++) {
//     if (list[i] % 2 !== 0) {
//       oddList.push(list[i]);
//     }
//   }
//   return oddList;
// }

// let newList = odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(newList);

//Write a function that computes the running total of a list.

// function computing(list) {
//   let result = 0;
//   for (i = 0; i < list.length; i++) {
//     result = result + list[i];
//   }
//   console.log("The compute of the list is: ", result);
// }

// computing([20, 50, 10, 5, 5, 30]);

//Write a function that tests whether a string is a palindrome.

function test(string) {
  let chars1 = "";
  for (i = string.length - 1; i >= 0; i--) {
    chars1 = chars1 + string[i];
  }
  console.log(chars1);
  if (chars1 === string) {
    console.log("This is a palindrome word");
  } else {
    console.log("This is not a palindrome word");
  }
}

test("solos");
