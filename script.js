'use strict';
/*
document.querySelector(`.message`).textContent = `correct number 🥳`;

console.log(document.querySelector(`.message`).textContent);

//DOM manulplation using javascipt to interact withthe ui
//Document object model
//allows javaiscrit access to hteml elements and sthle to manipulateh them

//change text html attribute and even css styling
// head and body first
//within the heady and body u have child elements
// and deep and deep link links within paragpahrs

//dom != javascript
//javascript is just ecma

//part of web api (libraries) that can interactive with JS

document.querySelector(`.message`).textContent = `correct number 🥳`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);

document.querySelector(`.guess`).value = 23;
*/

//HANDING CLICKS
//need to make an event listner

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //guess = 0 but made into true thru !
  // this is for no input
  if (!guess) {
    document.querySelector('.message').textContent = `no number🥲`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `correct number 🥳`;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `Too high`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `you lost the game`;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `too low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `you lost the game`;
    }
  }
});
