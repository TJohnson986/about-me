'use strict';

var guestName = prompt('Hey welcome! What is your name?');
alert('Glad you\'re here ' + guestName + '!');

var gameStart = prompt('Would you like to know a little more about me? A simple yes or no will do').toLowerCase();
if(gameStart === 'yes' || gameStart === 'y') {
  alert('Cool! Let\'s play a guessing game. Guess using either yes or no to the following questions.');
} else {
  alert('OK, feel free to come back later.');
}

function questionOne () {
  var firstAnswer = prompt('Let\'s start with an easy one. Do I live in Washington?').toLowerCase();
  if(firstAnswer === 'yes' || firstAnswer === 'y') {
    alert('Yep, born and raised!');
  } else {
    alert('False, so much for an easy one!');
  }
}

function questionTwo() {
  var secondAnswer = prompt('Do I love ice cream? 🍦').toLowerCase();
  if(secondAnswer === 'yes' || secondAnswer === 'y') {
    alert('Yes, I very much do!');
  } else {
    alert('You\'re crazy, who doesn\'t love ice cream?!');
  }
}

function questionThree() {
  var thirdAnswer = prompt('Do I love camping?').toLowerCase();
  if(thirdAnswer === 'yes' || thirdAnswer === 'y') {
    alert('Yes! It\'s my favorite.');
  } else {
    alert('You don\'t know me very well..');
  }
}


function questionFour() {
  var fourthAnswer = prompt('Do I like mountains more than beaches?').toLowerCase();
  if(fourthAnswer === 'yes' || fourthAnswer === 'y') {
    alert('Yes, mountains are where it\'s at ⛰️');
  } else {
    alert('Beaches are nice, but mountains are where it\'s at ⛰️');
  }
}

function questionFive() {
  var fifthAnswer = prompt('Have I been to Alaska?').toLowerCase();
    alert('Actually, no I haven\'t, but would really like to go!');
  } else {
    alert('You\'re right, I haven\'t been but really want to go!');
  }
}

var correctNumber = 6;
var guessAttempts = 3;
var guessedNumber = prompt (`OK ${guestName}, let's try something new. Guess a number between 1 & 10`);

function questionSix() {
  while (guessAttempts && guessedNumber !== correctNumber) {
    console.log(guessedNumber);
    if (parseInt(guessedNumber) === correctNumber) {
      alert ('You are correct! The number is 6');
      break;
    } else if (parseInt(guessedNumber) < correctNumber) {
      guessedNumber = prompt(`Nope, that's not it, try a higher number! You have ${guessAttempts} attempts left`);
    } else if (parseInt(guessedNumber) > correctNumber) {
      guessedNumber = prompt(`Nope, that's not it, try a lower number! You have ${guessAttempts} attempts left`);
    } else {
      guessedNumber = prompt('Please use only a number between 1 & 10');
    }
    guessAttempts--;
    if (guessAttempts === 0) {
      alert(`Bummer ${guestName}, you ran out of attempts. The correct answer was 6.`);
    }
  }
}

var carGuessAttempts = 6;
var carColors = ['dark green','maroon','black','factory','silver'];

function questionSeven() {
  for (var i = 0; i < carGuessAttempts; i++) {
    var seventhAnswer = prompt(`I have 6 colors in mind to paint my project truck. Could you guess one? You have ${carGuessAttempts} guesses!`).toLowerCase();
    // for (var j = 0; j < carColors; j++) {
    if (seventhAnswer === carColors[i]) {
      alert('Yeah! That would look awesome!');
      break;
      // console.log(seventhAnswer);
    }
    if (!seventhAnswer) {
      alert('give me something');
    }
  }
}




questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();






// var score = 0;
// if (firstAnswer === 'yes' || firstAnswer === 'y') {
//   score = (score + 1);
//   console.log(score);
// }
// if (secondAnswer === 'yes' || secondAnswer === 'y') {
//   score = (score + 1);
//   console.log(score);
// }
// if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
//   score = (score + 1);
//   console.log(score);
// }
// if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
//   score = (score + 1);
//   console.log(score);
// }
// if (fifthAnswer === 'no' || fifthAnswer === 'n') {
//   score = (score + 1);
//   console.log(score);
// }
// if (parseInt(guessedNumber) === correctNumber) {
//   score = (score + 1);
//   console.log(score);
// }
// if (seventhAnswer === myCarColor) {
//   score = (score + 1);
//   console.log(score);
// }

// alert(`That's it! Thanks for playing, ${guestName}! You got ${score} out of 7 questions correct. Feel free to look around the rest of my page.`);
