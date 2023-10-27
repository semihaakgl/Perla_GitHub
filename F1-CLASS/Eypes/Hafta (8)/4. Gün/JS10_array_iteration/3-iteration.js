//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];

for (let price of prices) {
  console.log(price);
}

console.log("*********");

prices.forEach((p) => console.log(p));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */

let sum= 0
prices.forEach(price => sum += price)

console.log(sum)

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))) //! undefined

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

let upperNames = names.map(name => name.toLocaleUpperCase() )

console.log(upperNames)
console.log(names)

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 29.60
const dolar = 27.95
const tlPrices=  [100,150,100,50,80]

const euroPRices= tlPrices.map(tl => Number((tl/euro).toFixed(2)))
const dolarPRices= tlPrices.map(tl => Number((tl/dolar).toFixed(2)))
console.log(euroPRices)
console.log(dolarPRices)


//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//* =======================================
//*             FILTER METHOD
//* =======================================

//* =======================================
//*             REDUCE METHOD
//* =======================================

//* =======================================
//*               OTHERS
//* =======================================
