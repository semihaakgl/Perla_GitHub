// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****");

//* ORNEK1:
//***********************************************/

//? Cannot access 'printHello' before initialization
// printHello();

const printHello = function () {
  console.log("Hello");
};

printHello();

//* ORNEK2:
//*********************************************/

let oddOrEven =function(number){
    return number % 2 ===0 ? "EVEN" : "ODD"
}

let oddEven =oddOrEven(5)
console.log(oddEven)
console.log(oddOrEven(6))

//* ORNEK3: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

const findBiggest = function(n1,n2,n3){
    let biggest = n1
    if(n2 >biggest){
        biggest=n2
    }
    if(n3>biggest){
        biggest=n3
    }

    return biggest;
}

console.log(`The Biggest :${findBiggest(1,2,3)}`)
console.log(`The Biggest :${findBiggest(-1,-2,-3)}`)

console.log(findBiggest(10,20,30))
console.log(`The Biggest :${findBiggest(10,20,30)}`);


//* ORNEK3: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//**************************************************/

const toplama = function(s1,s2){
    return s1+s2
}

const sum = function(n1,n2){
   return toplama(n1,n2)
}


console.log(sum(2,3))
