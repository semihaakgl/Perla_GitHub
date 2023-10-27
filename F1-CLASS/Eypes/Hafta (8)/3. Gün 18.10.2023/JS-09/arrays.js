// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem

// const names = ["ilay", "hasret", "yagmur", "mustafa"];

// console.log(names);

//? 4 (names dizisinin lenght property'sine erisiyoruz.)

// console.log(names.length);

// const x = 5.111111;

// console.log(x.toFixed(2));

// console.log(typeof names);

// const emptyArr = [];
// console.log(emptyArr);

// ! 2.Yöntem (Object Constructor)

// const lang = new Array("HTML", "CSS", "JS", "React");
// console.log(lang);

// ! 3.Yöntem (Array.of())

// const number = Array.of(1, 2, 3);
// console.log(number);

// const number1 = Array.of();
// console.log(number1);

//!  Diziden veri okuma

const names1 = [
  "ilay",
  "yagmur",
  "hasret",
  "mustafa",
  "faruk",
  "yasemin",
  "mahmut",
];

// console.log(names1[1]);

// const mustafa1 = names1[3];

// console.log(mustafa1);

// const lastEl = names1[6]; //? (hard-coded)
// const leng = names1.length;
// console.log(leng);
const lastEl = names1[names1.length - 1];
// console.log(lastEl);

//? Alternative olarak at() metodu // negatif indis verilebilir yeni nesil JS'de bu mümkün at ile
// console.log(names1.at(-3)); //faruk

//!  Diziye veri yazma

// names1[2] = "Nico";

// console.log(names1);

// names1[2] = names1[2].toUpperCase();
// //? assigning yapildiginda etki eder.

// console.log(names1);

// const names1 = ["ahmet", "mehmet"]; //Identifier 'names1' has already been declared

// names1 = ["ahmet", "mehmet"]; // Assignment to constant variable.

//! Diziler farkli veri tiplerini bir arada saklayabilir.

// const ageArr = [35, 50, 80];

// const people = ["Jhon", "Nico", new Date().getFullYear() - 1989, true, ageArr];

// console.log(people);

// console.log(people[4][1]);

// ageArr[1]++;

// console.log(people[4][1]);
// console.log(people); //! JS cogu durumda sig (shallow copying) yapar.

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

//! 1. pop() method ---- son elemanı siler, sildiği son elemanı döndürür.

const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];

console.log(cars);
console.log(cars.pop());
console.log(cars);

//! 2. push() method ----- dizinin sonuna eleman ekler, kendisi dizinin length'ini döndürür.

console.log(cars.push("Tesla"));

console.log(cars);

//! 3. unshift() method ----- dizinin başına (0. indexinden itibaren) eleman ekler. Kendisi dizinin length'ini döndürür.

console.log(cars.unshift("Togg", "Volvo"));
console.log(cars);

//! 4. shift() method ----- dizinin başındaki (0. indexteki) elemanı siler, kendisi sildiği elemanı döndürür.

console.log(cars.shift());
console.log(cars);

//! 5. reverse() method ---- Dizinin tamamını ters çevirir.

cars.reverse();
console.log(cars);

//! 6. sort() method ----- Diziyi alfabetik sıraya göre sıralar.

cars.sort();
console.log(cars);

const number2 = [1, 2, 3, 11, 22, 35, 6];
number2.sort();
console.log(number2); //? sonuç  [1,11,2,22,3,35,6]

number2.sort((a, b) => a - b); //? sonuç  [1,2,3,6,11,22,35]
console.log(number2);
number2.sort((a, b) => b - a); //?  sonuç  [32,22,11,6,3,2,1]
console.log(number2);
