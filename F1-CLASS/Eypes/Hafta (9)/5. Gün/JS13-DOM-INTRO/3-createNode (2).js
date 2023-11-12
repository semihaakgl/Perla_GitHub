//!createNode

//? Yeni bir p elementi olusturalım

const newPar = document.creatElement("p");
const text = document.createTextNode("bu bir p elementidir");
newPar.appendChild(text);

console.log(newPar);

const h2 = documentquerySelector(".item-list h2");
h2.after(newPar);

//! Input Value
const myInput = document.getElementById("input");
console.log(myInput.value); //*input içerisinde kullanıcının girdiği değeri alıyor.

//* 1. Yol
//! id, class
newPar.id = "par";
newPar.className = "center red";

//* 2. Yol
//! setAttribute
newPar.setAttribute("id", "para");

//! classList
newPar.classList.add("bg-tomato", "left", "blue"); //*"add" le class ekleme yaptık
newPar.classList.remove("left"); //* left class ını "remove" ile sildik

if (newPar.classList.contains("blue")) {
	newPar.classList.add("blue");
} else {
	newPar.classList.add("orange");
}

//! toggle

newPar.classList.toggle("white"); //*newPar içerisindeki class larda white varsa kaldırır yoksa ekler

//! getAttribute()
console.log(newPar.getAttribute("class"));
console.log(newPar.getAttribute("ig"));
console.log(newPar.getAttribute("name"));
console.log(newPar.getAttribute("type"));

//! alternative
console.log(myInput.id);
console.log(myInput.type);

//! innerHTML (CIDDI GUVENLIK ACIKLARI VAR)

const newDiv = document.createElement("div");
newDiv.id = "new-id";
document.getElementById("btn").after(newDiv);
newDiv.innerHTML += '<li id= "go" class="red">Go</li>';
