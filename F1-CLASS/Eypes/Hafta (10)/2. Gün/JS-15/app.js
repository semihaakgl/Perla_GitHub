// //! KÖTÜ YÖNTEM

// const tasImage = document.querySelector("#tas");
// const kagitImage = document.querySelector("#kagit");
// const makasImage = document.querySelector("#makas");

// tasImage.addEventListener("click", (e) => {
//   console.log(e);
//   yourChoice.innerHTML = `<img src="./assets/tas.png">`;
// });
// kagitImage.addEventListener("click", (e) => {
//   console.log(e);
//   yourChoice.innerHTML = `<img src="./assets/kagit.png">`;
// });
// makasImage.addEventListener("click", (e) => {
//   console.log(e);
//   yourChoice.innerHTML = `<img src="./assets/makas.png">`;
// });

const yourChoice = document.getElementById("your-choice");

const pcChoice = document.getElementById("pc-choice");

const select = document.querySelector(".select");

let userSelect;
let pcRandom;

const scoreYou = document.getElementById("you"); //? benim score'um
const scorePc = document.getElementById("pc"); //? pc score
const domTopScore = document.querySelector(".top-score"); //? top score

// Modal Selectors
const resultDiv = document.querySelector(".result-msg"); //? sonuç mesajı veren
const containerEl = document.querySelector(".container"); //? en dıştaki container shadow
const modalEl = document.querySelector(".modal-container"); //? en son çıkan modal
const modalBtn = document.querySelector("#modal-ok"); //? en son çıkan modalın butonu

//? Sonuç mesajı için
const final = document.getElementById("final");

select.addEventListener("click", (e) => {
  userSelect = e.target.getAttribute("alt");
  yourChoice.innerHTML = `<img src="./assets/${userSelect}.png">`;
  pc();
});

const pcArr = ["tas", "kagit", "makas"];

function pc() {
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png">`;
  result();
}

function result() {
  switch (userSelect) {
    case "tas":
      if (pcRandom == "kagit") {
        lost();
      } else if (pcRandom == "makas") {
        win();
      }

      break;

    case "kagit":
      if (pcRandom == "makas") {
        lost();
      } else if (pcRandom == "tas") {
        win();
      }

      break;

    case "makas":
      if (pcRandom == "tas") {
        lost();
      } else if (pcRandom == "kagit") {
        win();
      }
      break;

    default:
      break;
  }
  if (userSelect == pcRandom) {
    resultDiv.classList.add("active");
    resultDiv.innerHTML = "It's a draw";
    resultDiv.style.backgroundColor = "#ffc538";
    containerEl.style.boxShadow = "3px 3px 10px 1px #ffc538";
  }
  if (scoreYou.innerText == "10") {
    final.innerText = `💃 You Win🕺`;
    document.querySelector(".modal").style.backgroundColor = "#5ab7ac";
    modalBtn.style.color = "#5ab7ac";
    topScoreCheck();
  }

  if (scorePc.innerText == "10" || scoreYou.innerText == "10") {
    modal();
  }
}

function lost() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Lost";
  resultDiv.style.backgroundColor = "#fb778b";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  scorePc.innerText++;
}
function win() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Win";
  resultDiv.style.backgroundColor = "#5ab7ac";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5ab7ac";
  scoreYou.innerText++;
}

function modal() {
  modalEl.classList.add("show");
}

modalBtn.addEventListener("click", () => {
  //   modalEl.style.display = "none";
  modalEl.classList.remove("show");
  window.location.reload();
});

let storagedScore = localStorage.getItem("highScore");

console.log(storagedScore);

let topScore;

if (storagedScore) {
  topScore = `10 - ${storagedScore}`;
} else {
  topScore = "0 - 0";
}

domTopScore.innerText = topScore;

function topScoreCheck() {
  storagedScore || localStorage.setItem("highScore", +scorePc.innerText);

  if (storagedScore >= scorePc.innerText) {
    localStorage.setItem("highScore", +scorePc.innerText);
  }
}
