// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

printHello(); //! invoke, call
//! Declaration
function printHello() {
  console.log("Hello");
}

printHello(); //! invoke, call
printHello(); //! invoke, call
printHello(); //! invoke, call

//* ORNEK2:
//*****************************************/

function greet(firstName, lastName = "") {
  console.log(`Hi, ${firstName} ${lastName}`);
}

//? invoke examples
greet("Jack", "Sparrow");
greet("Hasret", "Koyuncu");
greet("hocam", "faruk");
greet("faruk", "hocam");

// const name =prompt("Your name")
// const surName =prompt("Your surname")

// greet(name,surName)

greet("Ahmet");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//******************************************/

// function calculate(name, yob) {
//   const age = 2023 - yob;
//   console.log(`${name}'s age is ${age}`);
// }
// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name}'s age is ${age}`);
// }
function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  return `${name}'s age is ${age}`;
}


calculate("elif",2000)
const elif = calculate("elif",2000)
console.log(elif)
console.log(calculate("elif",2000))

//* ORNEK4:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

// function oddOrEven(number){
//    return number % 2 === 0 ? "EVEN" : "ODD"
// }

// const number =+prompt("Please enter a number")
// oddOrEven(number)


// const oddEven = oddOrEven(number)


// console.log(`${number} is ${oddOrEven(number)}`)
// console.log(`${number} is ${oddEven}`)


function toplama(n1,n2){
    return n1+n2
}

const sum =toplama(5,3)
console.log(sum)
