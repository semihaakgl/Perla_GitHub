// // ************************OBJECT********************

// //* object, verileri saklamak ve bu veriler üzerinde işlemler yapmak için kullanılan bir veri yapısıdır. Nesneler, key-value çiftleri içeren bir veri koleksiyonu oluşturmanızı sağlar. Her bir key, bir dize (string) veya sembol (symbol) olabilir ve her bir value, herhangi bir JavaScript veri türü olabilir, yani dize, sayı, fonksiyon, başka bir nesne, dizi veya daha karmaşık veri yapılarını da içerebilir.

// //* 1-) Object Litearals

// const worker = {
//   name: "Can",
//   surname: "Canan",
//   age: 33,
//   languages: ["C++", "Go", "Java", "Javascript"],
//   salary: 140000,
// };
// console.log(worker);
// worker.age += 1; //? bu yöntem ile ekleme yapılabilir.
// console.log(worker);

// worker["languages"].forEach((lang) => console.log(lang)); //? ["languages"] bu yöntem squareBracket yöntemidir.

// // const upperCaseLang = worker["languages"].map((sem) => sem.toUpperCase()); //? büyük harfle yazdı
// // console.log(upperCaseLang);

// const upperCaseLang = worker["languages"].map((sem) => sem.toLowerCase()); //? küçük harf
// console.log(upperCaseLang);

// //* YENİ BİR PROPERTY VE VALUE EKLEME*
// worker.nationality = "T.C";
// console.log(worker); //? ekleme yaptık.

// const person = worker; //? yukarıdaki worker( değişken) objesini farklı bir değişkene atadık yani değişkenin ismini değiştirdik.
// person.car = "volvo"; //? ekleme yaptık
// console.log(person);
// console.log({ person }); //? person u obje içine almış olduk.

// let depCopyOfWorker = JSON.stringify(worker); //? string e çevirdi
// console.log(depCopyOfWorker);

// // *****************OBJECT METHODS*************************

// //? this= deişkene karşılık gelir. yani yani değişkenin adını yazmak yerine this yazabiliriz. Ama karışıklığa sebep olmaktadır. bu yüzden this leri ortadan kaldırmak için arrow func'lar geliştirilmiş.
// //? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir.

// const personel = {
//   name: "Can",
//   surname: "Canan",
//   dob: "1990",
//   salary: 140000,
//   job: "developer",
//   drivingLicence: false,
//   calculateAge: function () {
//     return new Date().getFullYear() - this.dob; //? güncel tarihten 1990 ı çıkardı
//   },
//   summary: function () {
//     return `${this.name} is ${this.calculateAge()} years old.`; //? calculateage artık 33
//   },
// };
// console.log(personel.dob);
// console.log("AGE", personel.calculateAge()); //? 51. satır ile bağlantı kurarak çıkarma işlemi ile yaşı buldu.
// console.log(personel.summary());

// ****************NESTED****************************
//? NESTED içiçe objelerdir.

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

// console.log(people.person2.name);
// console.log(people.person2.salary);

// ! people objesindeki  tüm salary leri yazdırınız.(döngü kullanmadan)
// ****FOR-İN*****
//*dizi ve nesnelerin iterasyonu için geliştirilmiştir.

// for (let a in people) {
//   // console.log(a);
//   console.log(people[a].salary);
//   // console.log(people[a].name);
// }

//*FOR-OF*******
//* for-in ve for-of aynı işlevdedir. sadece sintax farkı vardır.

// console.log(Object.keys(people));
// console.log(Object.values(people));
// console.log(Object.entries(people));

// for (let key of Object.keys(people)) {
//   console.log(key);
// }
// for (let v of Object.values(people)) {
//   console.log(v);
// }
// for (let [k, v] of Object.entries(people)) {
//   console.log("KEY:", k, "VALUE:", v);
// }

// //* Array metotları ile
// Object.keys(people).forEach((p) => console.log(p));

// //! job i developer olanların dob değerlerini yazdırınız.
// Object.values(people)
// .filter((p) => p.job === 'developer')
// .forEach((p) => console.log(p);)

//**JSON : javascript object natation */

const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];
console.log(team[0]);

//! team dizisine veri eklemek
team.push({ name: "Josh", surname: "okmen", job: "developer", age: 31 });
console.log(team); //? push ile dizinin sonuna eleman ekledik.

//! team dizisindeki job ları tek tek yazdırınız.
team.forEach((a) => console.log(a.job));

//! age leri 1 artırarak yeni bir diziye saklayınız.
console.log(team.map((x) => x.age + 1));

//! name ve surname leri birleştirip büyük harfe çeviren ve bunu fillName keyi olarak saklayan aynı zamanda age değerlerini 5 artırarak age keyine  saklayan ve oluşan keyi döndüren kodu yazınız.
const a = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));
console.log(a);

//! a dizisindeki 30 yaşından küçük ve eşit olanların isimlerini dizye saklayınız.
const b = a.filter((x) => x.age < 30).map((y) => y.fullName);

console.log(b);

//! ortalama yaşı hesaplayınız
const c = team.reduce((sum, person) => sum + person.age, 0) / team.length;
console.log(c);
