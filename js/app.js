'use strict';

//write 5 questions. They MUST accept yes or no OR y or n IN ANY CASE.
//examples: YES, yes, YEs, yeS, Y, y

var guestName = prompt('Hey welcome! What is your name?');
//console.log(guestName);
alert('Glad you\'re here ' + guestName + '!');

// var gameStart = prompt('Would you like to know a little more about me? A simple yes or no will do').toLowerCase();
// if(gameStart === 'yes' || gameStart === 'y') {
//   //console.log('Guest answer if they\'d like to start: ' + gameStart);
//   alert('Cool! Let\'s play a guessing game. Guess using either yes or no to the following questions.');
// } else {
//   alert('OK, feel free to come back later.');
// }

// var firstAnswer = prompt('Let\'s start with an easy one. Do I live in Washington?').toLowerCase();
// if(firstAnswer === 'yes' || firstAnswer === 'y') {
//   //console.log('Answer if I live in Washington: ' + firstAnswer);
//   alert('Yep, born and raised!');
// } else {
//   //console.log('Answer if I live in Washington: ' + firstAnswer);
//   alert('False, so much for an easy one!');
// }

// var secondAnswer = prompt('Do I love ice cream? 🍦').toLowerCase();
// if(secondAnswer === 'yes' || secondAnswer === 'y') {
//   //console.log('Answer if I love ice cream: ' + secondAnswer);
//   alert('Yes, I very much do!');
// } else {
//   //console.log('Answer if I love ice cream: ' + secondAnswer);
//   alert('You\'re crazy, who doesn\'t love ice cream?!');
// }

// var thirdAnswer = prompt('Do I love camping?').toLowerCase();
// if(thirdAnswer === 'yes' || thirdAnswer === 'y') {
//   //console.log('Answer if I love camping: ' + thirdAnswer);
//   alert('Yes! It\'s my favorite.');
// } else {
//   //console.log('Answer if I love camping: ' + thirdAnswer);
//   alert('You don\'t know me very well..');
// }

// var fourthAnswer = prompt('Do I like mountains more than beaches?').toLowerCase();
// if(fourthAnswer === 'yes' || fourthAnswer === 'y') {
//   //console.log('Answer if I like mountains more: ' + fourthAnswer);
//   alert('Yes, mountains are where it\'s at ⛰️');
// } else {
//   //console.log('Answer if I like mountains more: ' + fourthAnswer);
//   alert('Beaches are nice, but mountains are where it\'s at ⛰️');
// }

// var fifthAnswer = prompt('Have I been to Alaska?').toLowerCase();
// if(fifthAnswer === 'yes' || fifthAnswer === 'y') {
//   //console.log('Answer if I have been to Alaska ' + fifthAnswer);
//   alert('Actually, no I haven\'t, but would really like to go!');
// } else {
//   //console.log('Answer if I have been to Alaska ' + fifthAnswer);
//   alert('You\'re right, I haven\'t been but really want to go!');
// }

var correctNumber = 6;
var guessAttempts = 3;
var guessedNumber = prompt (`OK ${guestName}, let's try something new. Guess a number between 1 & 10`);
while (guessAttempts && guessedNumber !== correctNumber) {
  console.log(guessedNumber);
  if (parseInt(guessedNumber) === correctNumber) {
    //console.log('You are correct!');
    alert ('You are correct! The number is 6'); break;
  } else if (parseInt(guessedNumber) < correctNumber) {
    guessedNumber = prompt('Nope, that\'s not it, try a higher number!');
    //console.log('Nope, that\'s not it! Try again ' + guessAttempts + ' ' + guessedNumber);
  } else if (parseInt(guessedNumber) > correctNumber) {
    guessedNumber = prompt('Nope, that\'s not it, try a lower number!');
  // } else if (guessAttempts < 0); {
  //   prompt('Bummer, you ran out of attempts. The correct answer is 6.');
  }
  guessAttempts--;
  prompt ('bummer');
}


alert('That\'s it! Thanks for playing, ' + guestName + ' and feel free to look around');
