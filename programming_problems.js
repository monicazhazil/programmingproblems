//Write a program that asks the user for their name and greets them with their name.
function greeting() {
  let name = prompt("Please enter your name");
  alert("Hello " + name + " Welcome");
}

greeting();

//Modify the previous program such that only the users Alice and Bob are greeted with their names.
function newGreet() {
  let name = prompt("Please enter your name");
  if (name === "Alice" || name === "Bob") {
    alert("Hello " + name + " Welcome");
  }
}

newGreet();

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function sum() {
  let input = prompt("Please enter an integer number");
  let inputInt = parseInt(input);
  let result = 0;

  for (i = 1; i < inputInt + 1; i++) {
    result = i + result;
  }

  console.log(result);
}

sum();

// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

function multiples() {
  let input = prompt("Please enter an integer number");
  let inputInt = parseInt(input);
  let result = 0;

  for (i = 1; i < inputInt + 1; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = i + result;
    }
  }

  return result;
}

multiples();