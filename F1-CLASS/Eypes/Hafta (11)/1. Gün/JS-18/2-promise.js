//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------

//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){ // resolve ve rejectte kendi içerisinde bir fonksiyondur

//! siz bir söz veriyorsubnuz başarılı biterse resolve, başarısız biterse reject çalışıyor. İsimler değişebilir.

console.log("Promise");

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan : ilk istek gönderildiğinde olan durum
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

const myPromise = new Promise((resolve, reject) => {
  const success = Math.floor(Math.random() * 4); //? 0 , 1 , 2 , 3
  console.log(success);
  const data = { a: 2, b: 3 };
  if (success) {
    console.log("Data Fetched");
    resolve(data);
  } else {
    reject(new Error("Something went wrong!"));
  }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
