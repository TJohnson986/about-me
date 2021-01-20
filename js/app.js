'use strict';

//write 5 questions. They MUST accept yes or no OR y or n IN ANY CASE.
//examples: YES, yes, YEs, yeS, Y, y

var guestName = prompt('Hey welcome! What is your name?');
//console.log(guestName);
alert('Glad you\'re here ' + guestName + '!');

var gameStart = prompt('Would you like to know a little more about me? A simple yes or no will do').toLowerCase();
if(gameStart === 'yes' || gameStart === 'y') {
  //console.log('Guest answer if they\'d like to start: ' + gameStart);
  alert('Cool! Let\'s play a guessing game. Guess using either yes or no to the following questions.');
} else {
  alert('OK, feel free to come back later.');
}

var firstAnswer = prompt('Let\'s start with an easy one. Do I live in Washington?').toLowerCase();
if(firstAnswer === 'yes' || firstAnswer === 'y') {
  //console.log('Answer if I live in Washington: ' + firstAnswer);
  alert('Yep, born and raised!');
} else {
  //console.log('Answer if I live in Washington: ' + firstAnswer);
  alert('False, so much for an easy one!');
}

var secondAnswer = prompt('Do I love ice cream? 🍦').toLowerCase();
if(secondAnswer === 'yes' || secondAnswer === 'y') {
  //console.log('Answer if I love ice cream: ' + secondAnswer);
  alert('Yes, I very much do!');
} else {
  //console.log('Answer if I love ice cream: ' + secondAnswer);
  alert('You\'re crazy, who doesn\'t love ice cream?!');
}

var thirdAnswer = prompt('Do I love camping?').toLowerCase();
if(thirdAnswer === 'yes' || thirdAnswer === 'y') {
  //console.log('Answer if I love camping: ' + thirdAnswer);
  alert('Yes! It\'s my favorite.');
} else {
  //console.log('Answer if I love camping: ' + thirdAnswer);
  alert('You don\'t know me very well..');
}

var fourthAnswer = prompt('Do I like mountains more than beaches?').toLowerCase();
if(fourthAnswer === 'yes' || fourthAnswer === 'y') {
  //console.log('Answer if I like mountains more: ' + fourthAnswer);
  alert('Yes, mountains are where it\'s at ⛰️');
} else {
  //console.log('Answer if I like mountains more: ' + fourthAnswer);
  alert('Beaches are nice, but mountains are where it\'s at ⛰️');
}

var fifthAnswer = prompt('Have I been to Alaska?').toLowerCase();
if(fifthAnswer === 'yes' || fifthAnswer === 'y') {
  //console.log('Answer if I have been to Alaska ' + fifthAnswer);
  alert('Actually, no I haven\'t, but would really like to go!');
} else {
  //console.log('Answer if I have been to Alaska ' + fifthAnswer);
  alert('You\'re right, I haven\'t been but really want to go!');
}

var correctNumber = 6;
var guessAttempts = 3;
var guessedNumber = prompt (`OK ${guestName}, let's try something new. Guess a number between 1 & 10`);
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

var carGuessAttempts = 6;
var correctAnswer = false;
var carColors = ['dark green','maroon','black','factory','silver'];
//var myCarColor = carColors[1];

for (var i = 0; i < carGuessAttempts; i++) {
  var seventhAnswer = prompt(`I have 6 colors in mind to paint my project truck. Could you guess one? You have ${carGuessAttempts} guesses!`).toLowerCase();
  for (var j = 0; j < carColors.length; j++) {
    if (seventhAnswer === carColors[j]) {
      alert('Yeah! That would look awesome!');
      correctAnswer = true;
      break;
    }
  }
  if (seventhAnswer !== carColors[j]) {
    seventhAnswer = alert(`Nope, not ${seventhAnswer}. Try a different color, you have ${carGuessAttempts} attempts left.`);
  }
  carGuessAttempts--;
  if (correctAnswer) {
    break;
  }
}
//  console.log(seventhAnswer);



// original code

// while (carGuessAttempts || seventhAnswer !== myCarColor) {
//   console.log(seventhAnswer);
//   //console.log(myCarColor);
//   if (seventhAnswer === myCarColor) {
//     console.log('You are correct!');
//     alert ('You are correct! The color of my car is maroon'); break;
//   } else if (seventhAnswer !== myCarColor) {
//     seventhAnswer = prompt(`Nope, that's not it, try a different color! You have ${carGuessAttempts} attempts left`).toLowerCase();
//   }
//   carGuessAttempts--;
//   if (carGuessAttempts === 0) {
//     alert(`Bummer ${guestName}, you ran out of attempts. The correct answer was maroon. The choices I had were ${carColors}.`); break;
//   }
// }

var score = 0;
if (firstAnswer === 'yes' || firstAnswer === 'y') {
  score = (score + 1);
  console.log(score);
}
if (secondAnswer === 'yes' || secondAnswer === 'y') {
  score = (score + 1);
  console.log(score);
}
if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
  score = (score + 1);
  console.log(score);
}
if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  score = (score + 1);
  console.log(score);
}
if (fifthAnswer === 'no' || fifthAnswer === 'n') {
  score = (score + 1);
  console.log(score);
}
if (parseInt(guessedNumber) === correctNumber) {
  score = (score + 1);
  console.log(score);
}
if (seventhAnswer === myCarColor) {
  score = (score + 1);
  console.log(score);
}

alert(`That's it! Thanks for playing, ${guestName}! You got ${score} out of 7 questions correct. Feel free to look around the rest of my page.`);
