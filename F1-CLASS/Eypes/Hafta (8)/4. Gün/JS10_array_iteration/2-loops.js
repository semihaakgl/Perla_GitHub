//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33];
console.log(grades.length); //? yani grades in uzunluğu kadar ded ik.

let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
console.log((sum / grades.length).toFixed(2));

//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.

const arr = [-5, 15, 22, -4, 45, 78];

let negatives = [];
let positives = [];

for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}

console.log(positives);
console.log(negatives);
console.log(arr);

//* =========================================
//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------


const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
];

const findStudent = (name)=>{
    let counter = 0
    for ( let i in students){  //? i index değeridir.
        if(name === students[i]){
            counter++
        }
    }

    if( counter === 0){
        return `${name} can not be found`
    } else {
        return `${name} found ${counter} times`
    }

}

console.log(findStudent("sergio"))
console.log(findStudent("ahmet"))

//* =========================================
//*            FOR-OF LOOP
//* =========================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentForOF =(name)=>{
      let counter = 0;
      for (let student of students ){
        student === name ? counter++ : null
      }

      return counter ? `${name} found ${counter} times` : `${name} can not be found`

}

console.log(findStudentForOF("sergio"))
console.log(findStudentForOF("ahmet"))