'use strict';

console.log('hello world');

//write 5 questions. They MUST accept yes or no OR y or n IN ANY CASE.
//examples: YES, yes, YEs, yeS, Y, y

var questionOne = prompt('Do I live in WA?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'); {
  console.log('You are correct!');
}

