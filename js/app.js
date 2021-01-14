'use strict';

//write 5 questions. They MUST accept yes or no OR y or n IN ANY CASE.
//examples: YES, yes, YEs, yeS, Y, y

//var questionOne = prompt('Do I live in WA?').toLowerCase();

// var guestName = prompt('Hey welcome! What is your name?');
// console.log(guestName);
// alert('Glad you\'re here ' + guestName + '!');

var gameStart = prompt('Would you like to know a little more about me? A simple yes or no will do').toLowerCase();
//console.log gameStart);
if(gameStart === 'yes' || gameStart === 'y') {
  console.log('Guest answer if they\'d like to start: ' + gameStart);
  alert('Cool! Let\'s play a guessing game. Guess either yes or no to the following questions.');
} else {
  alert('OK, feel free to come back later.');
}

var firstAnswer = prompt('Let\'s start with an easy one. Do I live in Washington?').toLowerCase();
if(firstAnswer === 'yes' || firstAnswer === 'y') {
  console.log('Answer if I live in Washington: ' + firstAnswer);
  alert('Yep, born and raised!');
} else {
  alert('False, so much for an easy one!');
}

var secondAnswer = prompt('Do I love ice cream? 🍦').toLowerCase();
if(secondAnswer === 'yes' || secondAnswer === 'y') {
  console.log('Answer if I love ice cream: ' + secondAnswer);
  alert('Yes, I very much do!');
} else {
  alert('You\'re crazy, who doesn\'t love ice cream?!');
}

// if(questionOne === 'yes' || questionOne === 'y'); {
//   console.log('You are correct!');
// }

