// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

// /! arrow'da tek bir islem yapiliyorsa suslu parantez ve return kullanmaya gerek yok ama birden fazla islem varsa suslu parantez ve return kullanmak gerekir.

//* ORNEK: Silindir Hacmi
//******************************************/

//? hacim = Pi * r * r * h

const r = +prompt("r:");
const h = +prompt("h:");

const volume = (r,h) => Math.PI * r * r * h;

console.log(volume(r,h));
console.log(`${r},${h} = volume : ${volume(r,h).toFixed(4)}`)

// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.

console.log(`${r},${h} = volume : ${volume(r,h).toPrecision(4)}`)

// //! alternatif olarak
const volumeLong = (r,h) => {
  const result = Math.PI * r * r * h;
  return result;
};
console.log(`${r},${h} = volume : ${volumeLong(r,h).toFixed(4)}`)

// ** ÖRNEK: Yaş hesaplama
// ****************************************************

const calculateAge = (year) => new Date().getFullYear() - year;
console.log(`AGE ${calculateAge(1950)}`);

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

// fibo(4) = 7
const fibo = (n) => {
	let sum = 0;
	let fib1 = 1;
	let fib2 = 1;

	for (let i = 2; i < n; i++) {
		sum = fib1 + fib2;
		fib1 = fib2;
		fib2 = sum;
	}
	return fib2;
};

console.log(fibo(n));
