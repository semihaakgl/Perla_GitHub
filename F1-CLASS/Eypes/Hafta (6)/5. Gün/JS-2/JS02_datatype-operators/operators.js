// * =======================================================
// *                 ARITMETIK OPERATORLER
// * =======================================================

console.log("*** Operators***");

const cola = 20;
const gum = 5;
const biscuits = 15;

const totalPrice = cola + gum + biscuits;
console.log(totalPrice);
console.log("Total Price", totalPrice);

// //? + operatoru String Concatination islemi de yapar.
console.log("Total Price" + totalPrice); //? String Concatination

const comments = totalPrice + "TL";
console.log(comments);

const comment = 50 + 40 + "TL" + 10 + 15;
console.log(comment);

const firstName = "Ahmet";
const lastName = "CAN";
console.log(firstName + " " + lastName);

const s1 = 5;
const s2 = "4";
const s3 = "three";

console.log(s1 + s2); //? 54
console.log(s1 - s2); //? 1
console.log(s1 - s3); //? Nan (Not a Number)
// //! String ifadeyi number a cevirmeye calisti fakat mumkun olmadigi icin NaN dondurdu.

// //? Ornek
//?-----------------------

const yearOfBirth = 1970;
const name = "John";
console.log(name + " is " + (2023 - yearOfBirth) + " years old");

//* Sistem tarih ve saat bilgileri icin Date() kullanilabilir.
const date = new Date();
console.log(date);

console.log(
  name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
);

//! ========== Template Literals ============

//? 3 sekilde de string tanimlanabilir.

const message1 = "Merhaba Javascript";
const message2 = "Merhaba Javascript";
const message3 = `Merhaba Javascript`; //? Template literals

console.log(`${name} is ${2023 - yearOfBirth} years old`);

// //* CAPRMA VE US ALMA (Multiply, Pow)
// //*--------------------------------------

// //? Ornek
// //?-------------------------------------

//? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
//? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.

// const r = +prompt("Please enter r :");
// const r = Number(prompt("Please enter r :")); //? en yaygın kullanılan
const r = 3;
console.log(r);

const pi = 3.14;
const square = pi * r * r; //? carpma
const square1 = pi * r ** 2; //? us alma //? r**3 3ncu kuvveti
console.log(square);
console.log(square1);

console.log(`Square of Circle: ${square}`);

console.log(`Square of Circle: ${Math.floor(square)}`);
console.log(`Square of Circle: ${Math.ceil(square)}`);
console.log(`Square of Circle: ${Math.trunc(square)}`);
console.log(`Square of Circle: ${Math.round(square)}`);

console.log(`Square of Circle: ${square.toFixed(3)}`);

// //?Bazi fonksiyonlar
Math.floor(); //* her zaman en yakin alt tamsayiya yuvarlar
Math.ceil(); //* her zaman en yakin ust tam tamsayiya yuvarlar
Math.trunc(); //* sayinin tam kismini alir.
Math.round(); //* en yakin tam sayiya yuvarlar.

Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

const randomNumber = Math.random(); //? 0 - 1 arasinda rasgele sayi
console.log(randomNumber);

const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

// //* ARTTIRMA VE AZALTMA (Inc, Dec)
// //*--------------------------------------

let a = 5;
console.log(++a);
let x = a + 5;
console.log(x);
--a;
let y = a + 5;
console.log(y);

// //* MOD
// //*--------------------------------------
//******************************************************* */
const number = 327
// const number = prompt("Please enter a 3-digits number")

const ones = number %10
console.log(ones)
const tens = Math.floor( number / 10) %10
console.log(tens)
const hundreds = Math.trunc(number /100)
console.log(hundreds)



// * =======================================================
// *                 ATAMA OPERATORLER
// * =======================================================


let z = 4
z = z + 5  //? 9  => z += 5  //? 9
z -=1 //? 8

// * ================================================
// *          KARSILASTIRMA OPERATORLERI
// * ================================================

const num1 = 3
 //? sonuc her zaman ya true ya da false

 console.log(num1==3) //? true
 console.log(num1=="3") //? true
 console.log(num1===3) //? true
 console.log(num1==="3") //? false

 const num2 = 1
 const num3 =5
 console.log(num2<num3) //? true
 console.log(num2>num3) //? false

 // * ================================================
// *            MANTIKSAL OPERATORLER
// * ================================================


const v1 = true
const v2= false

console.log(v1 && v2) //? false
console.log(v1 || v2) //? true

// const age = Number(prompt("Please enter your age"))
// const healty = confirm("are you healty")
// console.log(age,healty)

// if ( age >= 18  && healty == true){
// console.log("Ehliyet alabilir")
// }else{
//     console.log("Ehliyet alamaz")
// }



//? Javascripte surekli falsy olan 6 deger bulunmaktadir.
const nal = null
const tanimsiz = undefined
const bos = ""
const sayiDegil = NaN
const sifir = 0
const falsy = false