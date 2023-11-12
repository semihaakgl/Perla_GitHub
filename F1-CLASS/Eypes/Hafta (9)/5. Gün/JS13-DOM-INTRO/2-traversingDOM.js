  //*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//! 1- Yukarı Yönde Traverse
//*parentElement, parentNode  yöntemi kullanılarak (aradaki farka bak!!!)

//*const list = document.querySelector("li");
console.log(list);

console.log(list.parentElement);

//* closest()

const list = document.querySelector("li");
console.log(list.closest("section"));

//! - Asagi yonde (children) Traverse

const addItem = document.querySelector(".add-item");
console.log(addItem.children);

addItem.children[0].style.color = "red";
addItem.children[1].style.backgroundColor = "blue";
addItem.children[2].style.backgroundColor = "purple";

const header = document.querySelector("header");
const h1 = header.firstElementChild;
console.log(h1);
console.log(adddItem.lastElementChild.value);

//! - Yatay yonde (Sibling) Traverse

//*nextElementSibling(aşağı), previousElementSibling(yukarı)

const js = document.querySelector("section.item-list ul li:nth-child(3)")
	.nextElementSibling.nextElementSibling.innerText;

console.log(js);
