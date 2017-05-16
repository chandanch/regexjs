'use strict';
/**
*@desc Regular expression in Javascript
* A regular expression is defined as the sequence of characters that constitute a pattern
* that can be used to match inside a string
*/

// Create a string
var baseString = "Hello this script is all about regular expressions in javascript";

/**
* A regular expression can be created using two methods
* 1. Constructor method
* 2. Literal method
*/

// 1. Constructor method
var regex1 = new RegExp('is');
// check if the pattern is present in the baseString
console.log(regex1.test(baseString)); // returns true

// 2. Literal method
var regex2 = /ll/;
console.log(regex2.test(baseString));
