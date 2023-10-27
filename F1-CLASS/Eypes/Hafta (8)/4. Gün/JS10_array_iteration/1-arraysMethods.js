//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****");

const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3];

//* includes()
//*-----------------------------------------------------------

console.log(numbers.includes(4)); //? false
console.log(numbers.includes("4")); //? true

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf(3)); //?0
console.log(numbers.lastIndexOf(3)); //?9
console.log(numbers.lastIndexOf(7)); //?-1

//* join()
//*-----------------------------------------------------------

//? join, dizinin elamanlari birlestirip string'e cevirir.

const strNumber = numbers.join("-");
const strNumber1 = numbers.join("");
const strNumber3 = numbers.join();
console.log(strNumber);
console.log(strNumber1);
console.log(strNumber3); //? 3,5,2,4,four,3,4,bes,1,3
console.log(numbers);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(numbers.toString()) //?3,5,2,4,four,3,4,bes,1,3

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------

const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];

console.log(cars.slice(2,3)) //? ['Fiat'] 2 den 3 e kadar istedik ama sonuncu dahil olmadı.
console.log(cars.slice(2)) //? ['Fiat', 'Anadol'] bitişi yazmadığımız için 2 den sonrasının hepsini aldı
//! Tek rakam baslangic anlamina gelir ve sonuna kadar alir.

const newCars = cars.slice(3,4)
console.log(newCars) //? ['Anadol']

//* concat()
//*-----------------------------------------------------------
const message = ["The weather","is","very","nice"]
const now = [new Date().toLocaleString()]
console.log(now) //? ['19.10.2023 20:44:28']

const concatedMsg = message.concat(now)
const concatedMsg1 = now.concat(message)
const concatedMsg2 = now.concat(message,"JS Arrays",4,true)
console.log(concatedMsg)
console.log(concatedMsg1)
console.log(concatedMsg2)