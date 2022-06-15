import { word, hint } from "./dictionary.js";

// const wordEl = document.getElementById("word");

const selScore = document.querySelector(".score span");
const selHighScore = document.querySelector(".highscore span");
const wrongGuesses = document.querySelector(".wrong-guesses span");
const number = document.querySelector("#select-numbers");
const hintClue = document.querySelector(".hint span");
const btnInfo = document.querySelectorAll(".btn-info");
const palabra = document.querySelector("#word span");

let secretWord = "";
let score = 5;
let highscore = 0;
let clue = "";
let guessedLetters = "";

// ------------- changing keyboard color ------------
function changingColor(element) {
  element.style.backgroundColor = "#2FD2F2";
}
// --------- scoring -------------
function scoring() {
  selScore.textContent -= 1;
}

//----------  showing word places -------------
const showWordState = () => {
  for (let letter of secretWord) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-outline-light m-1 mt-4");
    button.textContent = "_";
    document.querySelector("#word-container").append(button);
  }
};

function checkingWord(e) {
  for (let i in secretWord) {
    if (secretWord[i] == e) {
      let buttons = document.querySelectorAll(".btn-outline-light");
      buttons[i].style.backgroundColor = "green";
      buttons[i].textContent = e;
      guessedLetters += e;
      if (guessedLetters.length === secretWord.length) {
        const alertList = document.querySelectorAll(".alert");
        const alerts = [...alertList].map(
          (element) => new bootstrap.Alert(element)
        );
      }
    }
  }
}

// ----- checking letters and adding in button----
const guessLetter = (e) => {
  // console.log($(e.target).text());
  // e.target.setAttribute("class", "btn-secondary"); // change the button background color to gray
  // let guessLetter = $(e.target).text(); // get the text of button selected
  // // loop through each letter in answer
  // for (let i = 0; i < answer.length; i++) {
  //   // if the selected letter is correct
  //   if (guessLetter === answer[i]) {
  //     let correctEle = $("#word-container .btn-warning")[i]; // get the correct letter button element with index
  //     $(correctEle).text(guessLetter); // replace the '_' with correct letter
  //     wordState[i] = guessLetter;
  //   }
  // }
};

// --------------- score and highscore ---------------
selScore.textContent = score;
selHighScore.textContent = highscore;

// creating secret word and hint
document.querySelector(".send-number").addEventListener("click", function () {
  let guess = Number(number.value);
  secretWord = word(guess);
  clue = hint(secretWord);
  hintClue.textContent = "";
  console.log(secretWord);
  showWordState();
});

// ------ HINT ------------
document
  .querySelector(".btn-outline-warning")
  .addEventListener("click", function () {
    hintClue.textContent = clue;
    document.querySelector(".score span").textContent = 1;
  });

// ---------------- reset ------------------------

document.querySelector("#reset").addEventListener("click", function () {
  selScore.textContent = 5;
  selHighScore.textContent = 0;
  wrongGuesses.textContent = 0;
  btnInfo.forEach((element) => changingColor(element));
});

// ---------------- new-game ------------------------
document.querySelector("#new-game").addEventListener("click", function () {
  selScore.textContent = 5;
  wrongGuesses.textContent = 0;
  btnInfo.forEach((element) => changingColor(element));
});

// --------------------- word on display ---------

// #########################################################
// #########################################################
// #########################################################

// ------------ clicked buttom --------
let counter = 0;
document.querySelector(".q").addEventListener("click", function () {
  if (!secretWord.includes("Q")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("Q");
  }
});
document.querySelector(".w").addEventListener("click", function () {
  if (!secretWord.includes("W")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("W");
  }
});
document.querySelector(".e").addEventListener("click", function () {
  if (!secretWord.includes("E")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    console.log("working");
    checkingWord("E");
  }
});
document.querySelector(".r").addEventListener("click", function () {
  if (!secretWord.includes("R")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("R");
  }
});
document.querySelector(".t").addEventListener("click", function () {
  if (!secretWord.includes("T")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("T");
  }
});
document.querySelector(".y").addEventListener("click", function () {
  if (!secretWord.includes("Y")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("Y");
  }
});
document.querySelector(".u").addEventListener("click", function () {
  if (!secretWord.includes("U")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("U");
  }
});
document.querySelector(".i").addEventListener("click", function () {
  if (!secretWord.includes("I")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("I");
  }
});
document.querySelector(".o").addEventListener("click", function () {
  if (!secretWord.includes("O")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("O");
  }
});
document.querySelector(".p").addEventListener("click", function () {
  if (!secretWord.includes("P")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("P");
  }
});
document.querySelector(".a").addEventListener("click", function () {
  if (!secretWord.includes("A")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("A");
  }
});
document.querySelector(".s").addEventListener("click", function () {
  if (!secretWord.includes("S")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("S");
  }
});
document.querySelector(".d").addEventListener("click", function () {
  if (!secretWord.includes("D")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("D");
  }
});
document.querySelector(".f").addEventListener("click", function () {
  if (!secretWord.includes("F")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("D");
  }
});
document.querySelector(".g").addEventListener("click", function () {
  if (!secretWord.includes("G")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("G");
  }
});
document.querySelector(".h").addEventListener("click", function () {
  if (!secretWord.includes("H")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("H");
  }
});
document.querySelector(".j").addEventListener("click", function () {
  if (!secretWord.includes("J")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("J");
  }
});
document.querySelector(".k").addEventListener("click", function () {
  if (!secretWord.includes("K")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("K");
  }
});
document.querySelector(".l").addEventListener("click", function () {
  if (!secretWord.includes("L")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("L");
  }
});
document.querySelector(".z").addEventListener("click", function () {
  if (!secretWord.includes("Z")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("Z");
  }
});
document.querySelector(".x").addEventListener("click", function () {
  if (!secretWord.includes("X")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("X");
  }
});
document.querySelector(".c").addEventListener("click", function () {
  if (!secretWord.includes("C")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("C");
  }
});
document.querySelector(".v").addEventListener("click", function () {
  if (!secretWord.includes("V")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("V");
  }
});
document.querySelector(".b").addEventListener("click", function () {
  if (!secretWord.includes("B")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("B");
  }
});
document.querySelector(".n").addEventListener("click", function () {
  if (!secretWord.includes("N")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("N");
  }
});
document.querySelector(".m").addEventListener("click", function () {
  if (!secretWord.includes("M")) {
    ++counter;
    wrongGuesses.textContent = counter;
    this.style.backgroundColor = "red";
    scoring();
  } else {
    this.style.backgroundColor = "green";
    checkingWord("M");
  }
});

// #########################################################
// #########################################################
// #########################################################
