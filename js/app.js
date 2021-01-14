'use strict';

//write 5 questions. They MUST accept yes or no OR y or n IN ANY CASE.
//examples: YES, yes, YEs, yeS, Y, y

//var questionOne = prompt('Do I live in WA?').toLowerCase();

var guestName = prompt('Hey welcome! What is your name?');
console.log(guestName);
alert('Glad you\'re here ' + guestName + '!');

var firstAnswer = prompt('Would you like to know a little more about me? A simple yes or no will do').toLowerCase();
console.log(firstAnswer);
alert('Cool! Let\'s play a guessing game. Guess either yes or no to the following questions.');

var secondAnswer = prompt('')

// if(questionOne === 'yes' || questionOne === 'y'); {
//   console.log('You are correct!');
// }

