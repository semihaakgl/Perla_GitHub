// * =======================================================
// *             Karar Yapilari (Conditions)
// * =======================================================

console.log("*** Conditions ***");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// let x = Number("3")
// console.log(x)
// let y = String(3)
// console.log(y)

// const num =Number( prompt("Please enter a number:"))

// if(num > 0) {
//     console.log(`${num} is posivite`)
// }else if (num < 0){
//     console.log(`${num} is negative`)
// }else{
//     console.log(`${num} is equal to zero`)
// }

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

// const n1 = +prompt("Number1");
// const n2 = +prompt("Number2");
// const n3 = +prompt("Number3");

//* 1.Yöntem

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} is biggest`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} is biggest`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} is biggest`);
// }

//* 2.Yöntem

// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }

// if (n3 >= biggest) {
//   biggest = n3;
// }

// console.log(`${biggest} is biggest`);

// //* 3.Yöntem

// console.log(`The biggest : ${Math.max(n1, n2, n3)}`);

//? ORNEK3: kosullar birlestirilerek bir degiskene aktarilarak kullanilabilir.

const year = 11;
const kidsCount = 3;
const graduate = true;
const LangCount = 3;

const increase =
  year >= 10 && kidsCount >= 2 && graduate == true && LangCount >= 2;

if (increase === true) {
  console.log(" He or She deserves an increased salary");
}

//? ALternatif olarak

if (increase) {
  console.log(" He or She deserves an increased salary");
}

//! ODEV1: Kullanıcıdan 2 sayı ve 1 işlem istenerek basit bir hesap makinesi programını yazınız.

//**************** SWITCH-CASE *******************

console.log("-------------------------------------");
console.log(" ***** 4 Islem Hesap Makinasi ****** ");
console.log("-------------------------------------");
// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");

// let sonuc = 0;

// switch (islem) {
//   case "+":
//     sonuc = s1 + s2;
//     break;
//   case "-":
//     sonuc = s1 - s2;
//     break;
//   case "*":
//     sonuc = s1 * s2;
//     break;
//   case "/":
//     sonuc = s1 / s2;
//     break;
//   default:
//     alert("Yanlis islem girisi");
//     break;
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

//**************** TERNARY *******************

//? ORNEK5: Kaldi-Gecti

// const grade = +prompt("Please enter your grade:")

// const result = grade >= 50 ? "You are succesful" : "You are failed"

// console.log(result)

// grade >= 90 ? console.log("succes") : console.log("failed")

const age = 20
const gender = "male"
const healty = true
const status= "teacher"

age >= 18 && gender === "male" && healty === true && status !== "student"
  ? alert("Military services is required")
  : alert("Military services is not required");

//! ODEV2:Maasi asgari ucretten az ve eşit olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//* let salary = 5000;
//* salary = salary * 1.5
