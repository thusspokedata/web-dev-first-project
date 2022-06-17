import { word, hint } from "./dictionary.js";

// const wordEl = document.getElementById("word");

const selScore = document.querySelector(".score span");
const selHighScore = document.querySelector(".highscore span");
const wrongGuesses = document.querySelector(".wrong-guesses span");
const number = document.querySelector("#select-numbers");
const hintClue = document.querySelector(".hint span");
const btnInfo = document.querySelectorAll(".btn-info");
const wordContainer = document.querySelector("#word-container");
const elh2 = document.querySelectorAll("h2");
const elh1 = document.querySelector("h1");
const elbody = document.querySelector("body");
const figureParts = document.querySelectorAll(".figure-part");

let secretWord = "";
let score = 6;
let highscore = 0;
let clue = "";
let guessedLetters = "";

// --------------- score and highscore ---------------
selScore.textContent = score;
selHighScore.textContent = highscore;

const newWordAndHint = () => {
  let guess = Number(number.value);
  secretWord = word(guess);
  clue = hint(secretWord);
  hintClue.textContent = "";
  console.log(secretWord);
  showWordState();
};

// ------------- changing keyboard color ------------
const keyboardColorChanger = () => {
  btnInfo.forEach((element) => {
    element.style.backgroundColor = "#2FD2F2";
  });
};

// ------------ display none ------------

const displayNone = () => {
  figureParts.forEach((part) => {
    part.style.display = "none";
  });
};

// ---------------- black --------------------------
const blackText = () => {
  elbody.style.color = "black";
  elbody.style.backgroundColor = "#60b347";
  elh1.textContent = "You won...💃🏻🕺🏼💃🏻🕺🏼!!!";
  selHighScore.textContent = 0;
};

const blueLightText = () => {
  elbody.style.color = "#32afb2";
  elbody.style.backgroundColor = "#222";
  elh1.textContent = "Hang Man";
};
// --------- scoring -------------
function scoring() {
  selScore.textContent -= 1;
}

// ------- function deleting buttons ----------
const delButtons = () => {
  const buttons = document.querySelectorAll(".btn-outline-light");
  buttons.forEach((button) => {
    button.remove();
  });
};

//----------  showing word places -------------
const showWordState = () => {
  delButtons(); // deleting former buttons
  for (let letter of secretWord) {
    let button = document.createElement("button");
    if (letter === " " || letter === "-") {
      newWordAndHint();
    } else {
      button.setAttribute("class", "btn btn-outline-light m-1 mt-4");
      button.textContent = "_";
      wordContainer.append(button);
    }
  }
};

// ------------ checking words -------------------
function checkingWord(e) {
  for (let i in secretWord) {
    if (secretWord[i] == e) {
      let buttons = document.querySelectorAll(".btn-outline-light");
      buttons[i].style.backgroundColor = "green";
      buttons[i].textContent = e;
      guessedLetters += e;
      if (guessedLetters.length === secretWord.length) {
        selHighScore.textContent = Number(selHighScore.textContent) + score;
        guessedLetters = "";
        blackText();
      }
    }
  }
}

// ------ HINT ------------
document
  .querySelector(".btn-outline-warning")
  .addEventListener("click", function () {
    if (secretWord.length > 0) {
      hintClue.textContent = clue;
      document.querySelector(".score span").textContent = 1;
    }
  });

// ---------------- reset ------------------------

function reload() {
  delButtons();
  selScore.textContent = 6;
  wrongGuesses.textContent = 0;
  guessedLetters = "";
  keyboardColorChanger();
  blueLightText();
  displayNone();
  newWordAndHint();
}

document.querySelector("#reset").addEventListener("click", function () {
  reload();
  selHighScore.textContent = 0;
});

// ---------------- new-game ------------------------
document.querySelector("#new-game").addEventListener("click", function () {
  reload();
});

// --------------------- word on display ---------

// #########################################################
// #########################################################
// #########################################################

let counter = 0;
const fails = (el) => {
  ++counter;
  wrongGuesses.textContent = counter;
  el.style.backgroundColor = "red";
  scoring();
  hangman();
  if (counter === 6) {
    elh1.textContent = "You lost...🤌🏼🤌🏼👎🏼👎🏼🤦🏻‍♂️🤦🏻‍♀️!!!";
  }
};

const correct = (el, letter) => {
  el.style.backgroundColor = "green";
  checkingWord(letter);
};

// ------------------ Display hang-man parts -----------------
const hangman = () => {
  console.log("new line");
  figureParts.forEach((part, index) => {
    const errors = counter;
    if (counter === 6) {
      part.style.stroke = "red";
    }
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
};

// ------------ clicked buttom --------
document.querySelector(".q").addEventListener("click", function () {
  !secretWord.includes("Q") ? fails(this) : correct(this, "Q");
});
document.querySelector(".w").addEventListener("click", function () {
  !secretWord.includes("W") ? fails(this) : correct(this, "W");
});
document.querySelector(".e").addEventListener("click", function () {
  !secretWord.includes("E") ? fails(this) : correct(this, "E");
});
document.querySelector(".r").addEventListener("click", function () {
  !secretWord.includes("R") ? fails(this) : correct(this, "R");
});
document.querySelector(".t").addEventListener("click", function () {
  !secretWord.includes("T") ? fails(this) : correct(this, "T");
});
document.querySelector(".y").addEventListener("click", function () {
  !secretWord.includes("Y") ? fails(this) : correct(this, "Y");
});
document.querySelector(".u").addEventListener("click", function () {
  !secretWord.includes("U") ? fails(this) : correct(this, "U");
});
document.querySelector(".i").addEventListener("click", function () {
  !secretWord.includes("I") ? fails(this) : correct(this, "I");
});
document.querySelector(".o").addEventListener("click", function () {
  !secretWord.includes("O") ? fails(this) : correct(this, "O");
});
document.querySelector(".p").addEventListener("click", function () {
  !secretWord.includes("P") ? fails(this) : correct(this, "P");
});
document.querySelector(".a").addEventListener("click", function () {
  !secretWord.includes("A") ? fails(this) : correct(this, "A");
});
document.querySelector(".s").addEventListener("click", function () {
  !secretWord.includes("S") ? fails(this) : correct(this, "S");
});
document.querySelector(".d").addEventListener("click", function () {
  !secretWord.includes("D") ? fails(this) : correct(this, "D");
});
document.querySelector(".f").addEventListener("click", function () {
  !secretWord.includes("F") ? fails(this) : correct(this, "F");
});
document.querySelector(".g").addEventListener("click", function () {
  !secretWord.includes("G") ? fails(this) : correct(this, "G");
});
document.querySelector(".h").addEventListener("click", function () {
  !secretWord.includes("H") ? fails(this) : correct(this, "H");
});
document.querySelector(".j").addEventListener("click", function () {
  !secretWord.includes("J") ? fails(this) : correct(this, "J");
});
document.querySelector(".k").addEventListener("click", function () {
  !secretWord.includes("K") ? fails(this) : correct(this, "K");
});
document.querySelector(".l").addEventListener("click", function () {
  !secretWord.includes("L") ? fails(this) : correct(this, "L");
});
document.querySelector(".z").addEventListener("click", function () {
  !secretWord.includes("Z") ? fails(this) : correct(this, "Z");
});
document.querySelector(".x").addEventListener("click", function () {
  !secretWord.includes("X") ? fails(this) : correct(this, "X");
});
document.querySelector(".c").addEventListener("click", function () {
  !secretWord.includes("C") ? fails(this) : correct(this, "C");
});
document.querySelector(".v").addEventListener("click", function () {
  !secretWord.includes("V") ? fails(this) : correct(this, "V");
});
document.querySelector(".b").addEventListener("click", function () {
  !secretWord.includes("B") ? fails(this) : correct(this, "B");
});
document.querySelector(".n").addEventListener("click", function () {
  !secretWord.includes("N") ? fails(this) : correct(this, "N");
});
document.querySelector(".m").addEventListener("click", function () {
  !secretWord.includes("M") ? fails(this) : correct(this, "M");
});
