// ?======================================================
// ?                     STRING METOTLARI

// let str1 = "This is a string";
// let str2 = "This is a string";
// let str3 = `This is a string`;
// let str4 = new String("This is a string"); //?  String constructor ile yaptığımız için obj olarak dönüyor.

// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str4);

//! LENGTH PROPERTY

// let str1 = "Eypes Edu.";
// let str2 = "Full Stack";
// let str3 = "";
// let str4 = str1 + " " + str2;

// console.log(str1.concat(" ", str2));
//? Önceki işlemle aynı ama "+" işlemi concatten hızlı çalışır.

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
// console.log(str4.length);

//! INDEX

// let str = "Hello World";

// str[3] = "L";

// console.log(str);
// console.log(str.length);

// console.log(str[str.length - 1]);
// console.log(str[2]);
// console.log(str[7]);

//? str'nin elemanlarını for döngüsü ile yazdırma

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//? str'nin elemanlarını for döngüsü ile tersten yazdırma

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// let a = 5;

// let b = a;

// // console.log({ a }, { b });

// a = 10;

// console.log({ a }, { b });

//! Escape Sequences

// alert("Merhaba\tDünya");
// console.log("Merhaba\tDünya");
// console.log("Merhaba \tDünya");
// console.log("Merhaba \0Dünya");
// console.log("Merhaba\nDünya");
// console.log(`Merhaba

// Dünya`); //? Back tick ile istenildiği gibi boşluk verilir.

//! String Methods

//! 1. Slice()

// let str1 = "Eypes Education";

// let str2 = str1.slice(1, 9);

// console.log(str1.slice(1, 9));
// console.log(str1.slice(9, 1));
// console.log(str1.slice(-8, -2));
// console.log(str1.slice(-2, -8)); //? indeks sayılarının ters yazılması durumunda değer döndürmez!
// // console.log(str2);
// console.log(str1.slice(3));

//! 2. Substring()
// console.log(str1.substring(1, 9));
// console.log(str1.substring(9, 1)); //? Ters indeks değeri versekte kabul eder.

// // console.log(str1.substring(-8, -2)); //? Negatif indekslemeyi kabul etmez

// console.log(str1.substring(str1.length - 4));

//! 3. Concat()
// let str1 = "Eypes Edu.";
// let str2 = "Full Stack";
// let str3 = "5";
// let str4 = str1 + " " + str2;

// console.log(str1.concat(" ", str2, " ", str3));

//! 4. includes()

let email = "nicolas.o@eypes.com bravo";

// console.log(email.includes("@"));
// console.log(email.includes("*"));

// if (email.includes(".ocm")) {
//   console.log("Email is valid");
// } else {
//   console.log("Invalid Email");
// }

//! 5. indexof() // numeric değer döndürür ve bu bir kelime ise başlangıç indexini verir. varsa indexini yoksa -1 döndürür

// console.log(email.indexOf("eypes"));
// console.log(email.indexOf("*"));

//! 6. lastIndexOf()

// let str = "You do not KNOW what you do not know until you know.";

// console.log(str.length - 1);
// console.log(str.lastIndexOf("k"));
// console.log(str.lastIndexOf("k", 46));

//! 7. search()

// console.log(str.search("knowt"));
// console.log(str.search("know"));
// console.log(str.search(/know/)); //? with regular expression (Regex)
// console.log(str.search(/know/i)); //*  (i   'liği ortadan kaldırır) */

//! 8. replace()

// let str = "Mr Brown has a brown house and a brown car";

// let newStr = str.replace("brown", "red");
// let newStr = str.replace(/brown/g, "red"); //* g==global yani hepsi
// let newStr = str.replace(/brown/gi, "red");

// console.log(newStr);

//! 9. split()

// let str = "Welcome , to : Full Stack";

// console.log(str.split()); 
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("", 10));
// console.log(str.split("Full"));

// let arr = str.split("Full");
// console.log(arr.join(""));

//! 10. tolowerCase()

console.log(str.toLowerCase());

//! 10. toUpperCase()

console.log(str.toUpperCase());

//! 11. trim()

// let x = prompt("Kullanıcı adınızı giriniz").trim().toUpperCase().split(" ");
// console.log(x);

//! 12. startrswith Method //** Bununla mı başlar sorusunu sorar evetse true döner hayırsa false */

let str = "eypesedu@Eypes.com is our e-mail address";

console.log(str.startsWith("eypes"));
console.log(str.startsWith("Eypes".toLowerCase()));

console.log(str.startsWith("Eypes", 10));

//! 13. Endswith Method //* Bununla mı bitiyor diye sorar;
let str2 = "eypes@Eypes.com is our e-mail address";

console.log(str2.endsWith("address"));

console.log(str2.endsWith("Eypes", 19));
