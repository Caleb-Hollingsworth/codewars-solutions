//CodeWars challenges solutions

//10/29/20 kyu = 6

//Prompt: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(str) {
// 	let splitStr = str.split(' ');
// 	for (let i = 0; i < splitStr.length; i++) {
// 		if (splitStr[i].length >= 5) {
// 			let index = i;
// 			let reversedStr = splitStr[i].split('').reverse().join('');
// 			splitStr.splice(index, 1, reversedStr);
// 		}
// 	}
// 	return splitStr.join(' ');
// }

//10/30/20 kyu = 6

//Prompt: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//solution:
// function digital_root(n) {
// 	let str = n.toString().split('');
// 	let solution;
// 	let added;
// 	function final() {
// 		solution = str.map(Number).reduce(function (a, b) {
// 			return (added = a + b);
// 		}, 0);
// 	}
// 	final();
// 	if (added.toString().length > 1) {
// 		return digital_root(added);
// 	}

// 	return solution;
// }

//11/6/20 kyu = 5

//Prompt: "PigLatin" -- Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//solution:
// function pigIt(str) {
// 	let splitString = str.split(' ');
// 	let array = [];
// 	var letters = /^[A-Za-z]+$/;
// 	for (let i = 0; i < splitString.length; i++) {
// 		if (splitString[i].match(letters)) {
// 			let firstLetter = splitString[i].charAt(0);
// 			let restOfWord = splitString[i].slice(1, splitString[i].length);
// 			array.push(`${restOfWord}${firstLetter}ay`);
// 		} else {
// 			array.push(splitString[i]);
// 		}
// 	}
// 	return array.join(' ');
// }
