//? selectörler seçme işlemi yapar

//! GETELEMENTBYID(id li elementler de kullanılır)

const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.color = "red";
myHeader.style.backgroundColor = "blue";
myHeader.style.textDecoration = "underline";

//! GETELEMENTSBYTAGNAME()

const list = document.getElementsByTagName("li");
console.log(list); //? html collection (tam array değil array imsi yapı)

list[1].style.color = "red";
list[2].style.color = "blue";

//! GETELEMENTSBYCLASSNAME(sadece class olan elementlerde)
const itemList = document.getElementsByClassName("list");

console.log(itemList);

//**Array.from()  =>   Array  1. yöntem:Arrayimsi yapıyı array a çevirme
const  = Array.from(itemList)
console.log(itemListArr);

//*spread (html collection  =>   Array) 2.yöntem:Spread le array a çevirme
const itemListSpread = [...itemList]
console.log(itemListSpread);

//! QUERYSELECTOR() //*teg ('' kullanılır) class(. denir) ıd(# denir) seçebilir

const myLi = document.querySelector('li') //?tag
console.log(myLi);

const addItem = document.Selector('.add-item') //?class
console.log(additem);

const addBtn = document.querySelector('#btn')//? id
console.log(addBtn);

//! QUERYSELECTORALL() çoklu şeyler seçilir (ul içindeki li ler gibi)
const lists = document.querySelectorAll('ul li')

list.forEach((a) => console.log(a))
console.log(
  document.querySelectorAll('section.item-list ul li:nth-child(4)')[0].innerText
);

console.log(
  document.querySelector('section.item-list ul li:nth-child(4)') .innerText
);

  document.querySelector('section.item-list ul li:nth-child(4)') .innerHTML = "<p>Paragraf</p>"
);
