 //* =======================================
//*             FILTER METHOD
//* =======================================

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const salaries = [5500, 8000, 9500, 10000, 15000, 20000];

// const moreThan10000 = salaries.filter((s) => s >= 10000);
// console.log(moreThan10000);

// const range = salaries.filter((a) => a >= 6000 && a < 17000);

// console.log(range);

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));

console.log(lessThan9000);

const h = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .forEach((x) => console.log(x)); //! void function. Terminal method. Bir deger dondurmedigi icin devamına baska fonksiyon getirilemez.

console.log(h);

//* =======================================
//*             REDUCE METHOD
//* =======================================
// const salaries = [5500, 8000, 9500, 10000, 15000, 20000];

const totalSalary = salaries.reduce((a, v) => a + v, 0);

// totalSalary.forEach((x) => console.log(x));

console.log(totalSalary);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfRaisedSalaraies = salaries
  .filter((s) => s < 9000)
  .map((s) => s * 1.1)
  .reduce((t, s) => t + s, 0);

console.log(sumOfRaisedSalaraies);

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15];
const check = ages.every((age) => age >= 18);
check ? console.log("All ages are over 18") : console.log("Sum are under 18");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80);
console.log(over80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80)); //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18);
console.log(foundIndex); //? 1
