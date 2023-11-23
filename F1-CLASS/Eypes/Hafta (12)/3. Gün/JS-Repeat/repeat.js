//**************************************** */
//************* JS Repeat ********** */
//**************************************** */

//? -------------Strings ---------------

let string = "Javascript";
// let firstLetter = string[0];
// console.log(string[0]);
// console.log(firstLetter);

// let secondLetter = string[1];
// console.log(secondLetter);

// let lastIndex = string.length - 1;
// console.log(lastIndex);
// console.log(string[lastIndex]);

//?-------- Conditionals-----------

if (!string) {
  console.log("girerdi");
} else {
  console.log("girmezdi");
}

//* Falsy değerler
//! null,false,0,undefined,nan,""

let weather = "sunny";

// switch (weather) {
//   case "rainy":
//     console.log("şemsiye al");
//     break;
//   case "windy":
//     console.log("sıkı giyin");

//     break;
//   case "sunny":
//     console.log("denize git");

//     break;
//   case "cloudy":
//     console.log("yağmuru bekle");

//     break;

//   default:
//     break;
// }

let ternary = string ? "doğru" : "yanlış";
// console.log(ternary);

// 0 && 1 = false
// console.log(1 && string && 5 && undefined && "nico");
// console.log(0 || undefined || null || undefined || NaN);
// 0 && 0 = false
// 1 && 1 = true

// 0 || 0 = false
// 1 || 0 || false || null || NaN || undefined = true
// 0 || 1 = true
// 1 || 1 = true

// let conditional = string && "ampersant"; //! varsa şunu yap
let conditional = !string || "ampersant"; //! yoksa şunu yap

// console.log(conditional);

//?-------- Arrays-----------

//* ****   Split   *******/

let js = "Javascript";

// const charJS = js.split("");
// console.log(charJS);

// let companies = "Facebook, Twitter, Instagram, Google, SpaceX";

// let splitCompanies = companies.split(",");
// console.log(splitCompanies);

// let txt =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// console.log(txt.split(" "));

//* ****   Index, Length   *******/

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100];

// console.log(numbers.length);
// console.log(numbers[2]);
// console.log(numbers[5]);
// console.log(numbers[numbers.length - 1]);

// //* -----------Fill-------------

// const arr = Array();

// const valueArr = Array(8).fill(5);
// console.log(valueArr);

// //* -----------Concat-------------

// const firstArr = ["Hasret", "İlay", "Yağmur"];
// const secondArr = [1, 2, 3];

// const lastArr = firstArr.concat(secondArr);
// console.log(lastArr);

//* -----------indexOf-------------

// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(9.81));
// console.log(numbers.indexOf(100));

//* -----------includes-------------
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.includes(7));
// console.log(numbers.includes(4));
// console.log(numbers.includes(2));

// console.log(numbers.includes(2) && "ampersant");
//* -----------toString-------------

// console.log(numbers.toString());

// const names = ["Nico", "Mathias", "Elias", "Brook"];
// // console.log(names.toString());

// //* -----------Join-------------

// console.log(names.join(" ! "));

// //* -----------Slice-------------

// console.log(numbers.slice(1, 4));

//?-------- Loops -----------
//* -----------For-------------
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

//! 0 * 0 = 0
//! 1 * 1 = 1
//! 2 * 2 = 4
//! ...
//! 10 * 10 = 100

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

const newArr = [];

// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
console.log(newArr);

//* -----------While-------------

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//* -----------Do While-------------

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

//* ----------- For of -------------
// const numbers = [1, 2, 3, 4, 5, 6];

// for (const num of numbers) {
//   console.log(num * num);
// }

//?-------- Functions -----------

// function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }

// square();

// function printFullName() {
//   let firstName = "Nico";
//   let lastName = "Ohan";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }

// printFullName();

// const sumTwoNumbers = (numOne, numTwo) => {
//   let sum = numOne + numTwo;
//   console.log(sum);
// };

// sumTwoNumbers(10, 20);

//?-------- Objeler -----------

// const person = {
//   firstName: "Nico",
//   lastName: "Ohan",
//   age: 250,
//   country: "Germany",
//   city: "Munich",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName}${this.lastName}`;
//   },
//   "phone number": "+3584545454545",
// };

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// console.log(person["firstName"]);
// console.log(person["phone number"]);

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

countries.map((item, i) => console.log(`${item} - ${i + 1}`));

let filtered = countries.filter((item) => item === "Sweden");
console.log(filtered);
