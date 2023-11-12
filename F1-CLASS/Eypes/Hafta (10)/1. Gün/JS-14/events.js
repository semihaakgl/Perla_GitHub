//* ======================================================
//*                        EVENTS
//* ======================================================
//*JavaScript olayları (events), web sayfalarında kullanıcı etkileşimleri ve tarayıcı tarafından gerçekleştirilen diğer olayları yakalamak ve işlemek için kullanılan bir programlama kavramıdır. JavaScript, bir web sayfasında kullanıcı etkileşimlerini algılayarak, sayfada dinamik davranışlar oluşturmanıza ve kullanıcı deneyimini geliştirmenize olanak tanır. Olaylar, HTML öğeleriyle ilişkilendirilebilir ve bu öğelerin bir dizi olay türü vardır.

//* 4 yöntem kullanılır
// * 1- html içerisinde olayları tanımlayarak ve kulllanarak (inline)
// * 2- html içerisinde olay ve fonksiyonları çağırarak ve javascript içerisinde bunları tanımlayarak
// * 3- html sayfasına herhangi bir ekleme yapmaksızın sadece javascript ile olayları kontrol ederek
// * 4- addEventListener() metodu ile javascript kodunda olay tanımlayarak
//  * syntax: elementDiv.addEventListener(olay, fonksiyon)

console.log("****** EVENTS *******");

const h1 = document.querySelector("h1");

h1.onmouseover = function () {
  h1.style.color = "red";
}; //? onmouseover = üzerine gelindiğinde demek. css deki hover gibi.

h1.onmouseout = function () {
  h1.style.color = "black";
}; //? onmouseout = mouse üzerinden ayrıldığında.

const print = () => {
  document.write("PRINT");
};

// print();

const btn = document.querySelector("#btn");

// btn.onclick = () => {
//   alert("Btn clicked");
// };                         //?  onclick  = bir şeyin tıklanması durumunda

const langInput = document.getElementById("input");
const ul = document.createElement("ul");   //? createElement yeni bir element oluştutur.
btn.after(ul);

btn.addEventListener("click", () => {
  //! ÖDEV : space tuşuna basıldığında alert oluşturun !!!
  console.log(langInput.value);
  !langInput.value
    ? alert("Please enter a value")
    : (ul.innerHTML += `<li>${langInput.value}</li>`); //? value yazdık
  langInput.value = ""; //? value nin içini yazdıktan sonra  boşalttık.
  langInput.focus(); //? cursor un sabit kalır.
});

langInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  if (event.code === "Enter") {
    btn.click();
  }
});

// window.onload = print();
langInput.addEventListener("keydown", (event) => {
  if (event.code === "Backspace") {
    langInput.style.outlineColor = "orange";
  }
});

window.addEventListener("load", () => {
  langInput.focus();
});

// ? mousedown event  (yani mouse ile tıkladığında)

const jsLi = document.querySelector("#js");
jsLi.addEventListener("mousedown", () => {
  jsLi.style.backgroundColor = "blue";
});

//? mouseup event    (yani mouse u kaldırdığımızda )
const reactLi = document.getElementById("react");
reactLi.addEventListener("mouseup", () => {
  reactLi.style.color = "green";
});

//? scroll event   (sayfayı kaydırdığımızda)

const elementDiv = document.querySelector("div#scroll-box");

const outputP = document.querySelector("p#output");

elementDiv.addEventListener("scroll", () => {
  outputP.innerHTML = "Scroll yapılıyor";
  setTimeout(() => {
    outputP.innerHTML = "Waiting on scroll events...";
  }, 1000);
});

//? selection event

function selectLog(event) {
  const log = document.querySelector("p#log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected: ${selection}`;
}

const inputSelect = document.querySelector("input#sel");

inputSelect.addEventListener("select", selectLog);

//? double click event

const h2 = document.querySelector("#sec");

h2.addEventListener("dblclick", () => {
  h2.classList.toggle("large");
});

//? blur event   (focus durumundan çıkma,ayrılma)

const number = document.querySelector('input[type="number"]');
const password = document.querySelector('input[type="password"]');

number.addEventListener("focus", () => {
  //   event.target.style.backgroundColor = "pink";
  number.style.backgroundColor = "pink";
});
password.addEventListener("blur", () => {
  //   event.target.style.backgroundColor = "pink";
  password.style.backgroundColor = "red";
});
