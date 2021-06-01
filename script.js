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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //guess = 0 but made into true thru !
  // this is for no input
  if (!guess) {
    //when there is no input
    document.querySelector('.message').textContent = `no number jeff🥲`;
  } else if (guess === secretNumber) {
    // when player wins
    document.querySelector(`.message`).textContent = `correct number jeff🥳`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `Too high`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `you lost the game`;
    }

    //when guess is too low
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

document.querySelector(`.again`).addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = '?';

  score = 20;
  document.querySelector(`.score`).textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start Guessing ...';

  document.querySelector(`.guess`).value = '';
});
