//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir

//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatoru ile
//* ---------------------------------------------------------

const car = new Object();

car.model = 1990;
car.marka = "Bugatti";
car.color = "red";

const car1 = new Object();

car1.model = 1999;
car1.marka = "VW";
car1.color = "blue";

const car2 = new Object();

car2.model = 2000;
car2.marka = "Togg";
car2.color = "yesil";

// console.log(car);
// console.log(car1.model);
// console.log(car2["color"]);

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personel(id, ad, maas) {
  (this.tc = id), (this.name = ad), (this.salary = maas);
  //   console.log(this); //! this keyword'u icinde bulundugu scope'daki objeyi refere eder
}

// console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir

const p1 = new Personel("123456789", "İlay", 15000);
const p2 = new Personel("123456789", "Faruk", 16000);

// console.log(p1);

// console.log(window.Personel);

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Jack",
  surname: "Sparrow",
  age: 39,
  language: ["C++", "Phyton", "Java", "React"],
  salary: 20000,
};

console.log(worker.salary);

worker.age += 1; //! stackte adresi kayıtlı ama biz ne yaptık heap'teki yerde değişiklik yapılmasını istedik. Bir öncveki derste arraylerde yapmak istediğimiz gibi. Buradaki fark arrayler siralı index bazlı value'ya ulaşılırken buraad key ile ulaşılıyor.

console.log(worker);

worker["language"].forEach((lang) => console.log(lang));

const upperCaseValue = worker["language"].map((lg) => lg.toUpperCase());

console.log(upperCaseValue);

worker.nationality = "T.C.";

console.log(worker);

const person = worker;

console.log(person);

//! Deep Copy bellekte ayrı bir yer tutar her şey aynı olmasına rağmen. çok az yerde kullanılır
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker)); //? Deep Copy
console.log(JSON.stringify(worker));

//* ======================================================
//*              Object Metotlari
//* ======================================================

const personel = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  salary: 18000,
  job: "Developer",
  licence: false,
  calculate: function () {
    return new Date().getFullYear() - this.dob; //! sadece dob dersek tanımaz çunku scope dısında ama personel objesinin içinde
  },
  summary: function () {
    return `${this.name} is ${this.calculate()} years old`;
  },
};

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e (yukarıya bağlı olmak) sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log(personel.name);
console.log(personel.calculate());
console.log(personel.summary());

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
};

console.log(people);
