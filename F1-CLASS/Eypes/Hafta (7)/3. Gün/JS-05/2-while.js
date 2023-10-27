// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("*** WHILE ***");

// let count = 1;
// while (count <= 10) {
//   console.log("Count:", count);
//   count++;
// }

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let grade = Number(prompt("Enter your grade 0-100"));

// while (grade < 0 || grade > 100) {
//   console.log("Your grade should be 0-100");
//   break;
// }

// for(;grade < 0 || grade > 100;){

// }

//! ODEV3 (COZUM): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimiyle yaziniz.

// let number = Number(prompt("Your Number:"));
// let counter = 0;

// while (number != 0) {
//   number = Math.floor(number / 10);
//   console.log(number);
//   counter++;
// }

// console.log(`Your Counter: ${counter}`);
// console.log("Your Counter:", counter);

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.
let again = "";
do {
  let avg = 0;
  let midterm = Number(prompt("Your Midterm Grade:"));
  let final = Number(prompt("Your Final Grade:"));
  avg = midterm * 0.4 + final * 0.6;
  console.log(`Your Score is ${avg}`);
  // let x = prompt ("not hesaplamaya devam etmek istiyor musunuz? E/H")
  again = prompt("Do you want to continue(e/E)");
} while (again === "e" || again === "E");

console.log("See you later. Bye");
