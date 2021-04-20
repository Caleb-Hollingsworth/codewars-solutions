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

//11/10/20 kyu = 6

//Prompt: "Take a Ten Minute Walk" -- You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//solution:
//function isValidWalk(walk) {
//   let snCounter = 0;
//   let ewCounter = 0;
// if(walk.length !== 10) {
//   return false
// } else if(walk.length == 10) {
//   for(let i = 0; i < walk.length; i++) {
//     if(walk[i] === 'n') {
//       snCounter = snCounter + 1;
//     }if(walk[i] === 's') {
//       snCounter = snCounter - 1;
//     }if(walk[i] === 'e') {
//       ewCounter = ewCounter + 1;
//     }if(walk[i] === 'w') {
//       ewCounter = ewCounter - 1;
//     }
//   }
//   if(ewCounter === 0 && snCounter === 0) {
//     return true
//   }else {return false}
// }

// 11/10/20 kyu=6

//Prompt: "Dashatize" -- Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

//Solution:
// function dashatize(num) {
// 	if (Number.isInteger(num) !== true) {
// 		return 'NaN';
// 	}
// 	let absNum = Math.abs(num);
// 	let numStr = absNum.toString();
// 	let result = [numStr[0]];
// 	if (numStr.length === 1) {
// 		return numStr;
// 	}

// 	for (let i = 1; i < numStr.length; i++) {
// 		if (numStr[i - 1] % 2 === 0 && numStr[i] % 2 === 0) {
// 			result.push(numStr[i]);
// 		} else {
// 			result.push('-', numStr[i]);
// 		}
// 	}
// 	return result.join('');
// }

//11/12/20 kyu=5

//Prompt: "Directions Reduction" -- Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

//Solution:
// function dirReduc(arr) {
// 	let oppositeDirections = {
// 		NORTH: 'SOUTH',
// 		SOUTH: 'NORTH',
// 		EAST: 'WEST',
// 		WEST: 'EAST',
// 	};
// 	return arr.reduce((directions, oppDirection) => {
// 		console.log(arr);
// 		console.log(directions);
// 		directions[directions.length - 1] !== oppositeDirections[oppDirection]
// 			? directions.push(oppDirection)
// 			: directions.pop();
// 		return directions;
// 	}, []);
// }

// 11/13/20 kyu=6

//Prompt: "Split Strings" -- Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//Solution:
// function solution(str) {
// 	let splitStr = str.split('');
// 	let pairingArr = [];
// 	let result = [];
// 	if (splitStr.length < 1) {
// 		return splitStr;
// 	}
// 	for (let i = 0; i < splitStr.length; i = i + 2) {
// 		let pair = [];
// 		pair.push(splitStr[i], splitStr[i + 1]);
// 		pairingArr.push(pair);
// 	}
// 	for (let i = 0; i < pairingArr.length; i++) {
// 		let joinedStr = '';
// 		joinedStr = pairingArr[i].join('');
// 		result.push(joinedStr);
// 	}
// 	result[result.length - 1].length % 2 !== 0
// 		? (result[result.length - 1] += '_')
// 		: result;
// 	return result;
// }

// 11/13/20 kyu=7

//Prompt: "Square Every Digit" -- Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Solution
// function squareDigits(num) {
// 	let splitNum = num.toString().split('');
// 	let final = [];
// 	for (let i = 0; i < splitNum.length; i++) {
// 		final.push(Math.pow(splitNum[i], 2));
// 	}
// 	return parseInt(final.join(''));
// }

// 11/19/20 kyu=5

//Prompt: "Moving Zeros To The End" --Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//Solution
// var moveZeros = function (arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] !== 0) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 0) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// };

//11/20/20 kyu=6

//Prompt: "Count The Number of Duplicates" --Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Solution:
// function duplicateCount(text) {
// 	return text
// 		.toLowerCase()
// 		.split('')
// 		.filter(
// 			(value, index, arr) =>
// 				arr.indexOf(value) !== index && arr.lastIndexOf(value) === index
// 		).length;
// }

//11/22/20 kyu=7

//Prompt: "Vowel Count" --Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Solution:
// function getCount(str) {
// 	var vowelsCount = 0;
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	let splitStr = str.split('');
// 	for (let i = 0; i < vowels.length; i++) {
// 		let checkStr = splitStr.map((string) => {
// 			if (string === vowels[i]) {
// 				vowelsCount++;
// 			}
// 		});
// 	}
// 	return vowelsCount;
// }

//11/27/20

//Prompt: "" --In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

//Solution:
// function alphanumeric(string) {
// 	return string.match('^[a-zA-Z0-9]*$') && string !== '' ? true : false;
// }

//2/16/21 kyu===5

//Prompt: Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

//Solution:
// function validParentheses(parens) {
// 	let splitParens = parens.split('');
// 	let openCount = 0;
// 	let closeCount = 0;
// 	for (let i = 0; i < splitParens.length; i++) {
// 		splitParens[i] === '(' && openCount >= closeCount
// 			? openCount++
// 			: closeCount++;
// 	}
// 	let result = (openCount + closeCount) % 2 === 0 ? true : false;
// 	return openCount === closeCount ? result : false;
// }

//2/17/21 HackerRank--Easy Difficulty
//Prompt: A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

//Solution
// function rotLeft(a, d) {
// for(let i = 0; i < d; i++) {
//     let first = a.shift();
//     a.push(first);
// }
// return a;
// }

//2/18/21 hackerRank === easy

//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Solution:
// function birthdayCakeCandles(candles) {
// 	return candles.sort((a, b) => {return b - a;}).filter((candle) => {return candle === candles[0];}).length;
// }

//2/18/21 kyu===6

//Prompt: Design a data structure that supports the following two operations:

// addWord (or add_word) which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter
// You may assume that all given words contain only lowercase letters.

// Solution:
// var WordDictionary = function () {
// 	this.words = [];
// };

// WordDictionary.prototype.addWord = function (word) {
// 	this.words.push(word);
// };

// WordDictionary.prototype.search = function (word) {
// 	let regEx = new RegExp(`^${word}$`);
// 	if (this.words.find((x) => regEx.test(x))) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// 2/23/21 kyu===5
// Prompt:This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Solution:
// function equation(number, operation) {
// 	if (operation) {
// 		return operation(number);
// 	} else {
// 		return number;
// 	}
// }

// function zero(operation) {
// 	return equation(0, operation);
// }
// function one(operation) {
// 	return equation(1, operation);
// }
// function two(operation) {
// 	return equation(2, operation);
// }
// function three(operation) {
// 	return equation(3, operation);
// }
// function four(operation) {
// 	return equation(4, operation);
// }
// function five(operation) {
// 	return equation(5, operation);
// }
// function six(operation) {
// 	return equation(6, operation);
// }
// function seven(operation) {
// 	return equation(7, operation);
// }
// function eight(operation) {
// 	return equation(8, operation);
// }
// function nine(operation) {
// 	return equation(9, operation);
// }

// function plus(num) {
// 	return function (y) {
// 		return Math.floor(y + num);
// 	};
// }
// function minus(num) {
// 	return function (y) {
// 		return Math.floor(y - num);
// 	};
// }
// function times(num) {
// 	return function (y) {
// 		return Math.floor(y * num);
// 	};
// }
// function dividedBy(num) {
// 	return function (y) {
// 		return Math.floor(y / num);
// 	};
// }

// 2/26/21 kyu===6

//Prompt Complete Fibonacci Sequence

//Solution:
// function fibonacci(n) {
// 	let fib = [0];
// 	for (let i = 0; i < n - 1; i++) {
// 		if (fib[i] !== 0) {
// 			fib.push(fib[i] + fib[i - 1]);
// 		} else {
// 			fib.push(i + 1);
// 		}
// 	}
// 	return n <= 0 ? [] : fib;
// }

//Same solution in Python:
// def fibonacci(n):
//     if n > 0:
//         fib = [0]
//         for i in range(n - 1):
//             if fib[i] != 0:
//                 fib.append(fib[i] + fib[i - 1])
//             else:
//                 fib.append(i + 1)
//         return fib
//     else:
//         return []

// 3/2/21 kyu===6

//Prompt: Multiples of 3 or 5

//Solution:

// function solution(number) {
// 	let sum = 0;
// 	const findNumbers = () => {
// 		for (let i = 0; i < number; i++) {
// 			if (i % 3 === 0 || i % 5 === 0) {
// 				sum = sum + i;
// 			}
// 		}
// 		return sum;
// 	};
// 	return number < 0 ? 0 : findNumbers();
// }

// 3/3/21 kyu === 4 (timed out so not actual solution)

//Prompt How Many Numbers III

//Solution:
// function findAll(n, k) {
// 	let y = Math.pow(10, k);
// 	let x = Math.pow(10, k - 1);
// 	let array = [];

// 	const checkForN = (nums) => {
// 		let sum = nums.reduce((a, b) => a + b, 0);
// 		if (sum === n) {
// 			array.push(nums.join(''));
// 		}
// 	};

// 	const checkForX = (number) => {
// 		let statement = true;
// 		for (let i = 0; i < number.length - 1; i++) {
// 			if (number[i] > number[i + 1]) {
// 				statement = false;
// 			}
// 		}
// 		return statement === true ? checkForN(number) : false;
// 	};
// 	for (let i = x; i < y; i++) {
// 		let index = 0;
// 		let number = i.toString().split('').map(Number);
// 		checkForX(number);
// 	}
// 	let sortedArray = array.sort();
// 	let result = [];
// 	sortedArray.length > 0
// 		? result.push.apply(result, [
// 				array.length,
// 				sortedArray[0],
// 				sortedArray[sortedArray.length - 1],
// 		  ])
// 		: result;
// 	return result;
// }

// 3/4/21 kyu===6

//Prompt: Covert String to camel case

//Solution:
// function toCamelCase(str) {
// 	let splitStr = str.split('');
// 	let camelCase = [];
// 	for (let i = 0; i < splitStr.length; i++) {
// 		if (splitStr[i] === '_' || splitStr[i] === '-') {
// 			splitStr[i + 1] = splitStr[i + 1].toUpperCase();
// 			splitStr.splice(i, 1);
// 		}
// 	}
// 	return str.length > 0 ? splitStr.join('') : '';
// }

// 3/8/21 kyu===5

//Prompt: String Incrementor

//Solution:
// function incrementString(strng) {
// 	let text = strng.replace(/[0-9]/g, '');
// 	let numLength = strng.length - text.length;
// 	let numString = strng.slice(text.length) || '0';
// 	numString = (parseInt(numString) + 1).toString();

// 	while (numString.length < numLength) {
// 		numString = '0' + numString;
// 	}

// 	return text.concat(numString);
// }

//in progress

// function orderWeight(strng) {
// 	let splitStr = strng.split(' ');
// 	let newArr = [];
// 	let finalArr = [];
// 	let sum;
// 	let numObj = {};
// 	for (let i = 0; i < splitStr.length; i++) {
// 		let numArr = splitStr[i].split('');
// 		for (let j = 0; j < numArr.length; j++) {
// 			numArr[j] = Number(numArr[j]);
// 		}
// 		sum = numArr.reduce((a, b) => a + b, 0);
// 		newArr.push(sum);
// 		finalArr.push(sum);
// 	}
// 	finalArr.sort((a, b) => a - b);
// 	newArr.forEach((num, index) => {
// 		numObj[index] = { index: finalArr.indexOf(num), value: splitStr[index] };
// 	});
// 	let array = [];
// 	for (i in numObj) {
// 		if (splitStr.indexOf(splitStr[i]) === numObj[i].index) {
// 			array.push(numObj[i].value);
// 		}
// 	}

// 	console.log(array);
// 	console.log(numObj);
// }

// 3/10/21 kyu===6

//Prompt: Roman Numerals Encoder

//Solution:
// function solution(number) {
// 	let numerals = {
// M: 1000,
// CM: 900,
// D: 500,
// CD: 400,
// C: 100,
// XC: 90,
// L: 50,
// XL: 40,
// X: 10,
// IX: 9,
// V: 5,
// IV: 4,
// I: 1,
// 	};
// 	let romanNumerals = '';
// 	for (i in numerals) {
// 		while (number >= numerals[i]) {
// 			romanNumerals += i;
// 			number -= numerals[i];
// 		}
// 	}
// 	return romanNumerals;
// }

// 3/10/21

//Prompt: Roman Numerals Decoder

//Solution:
// function solution(roman) {
// 	let splitRo = roman.split('');
// 	let sum = 0;
// 	let numerals = {
// 		M: 1000,
// 		D: 500,
// 		C: 100,
// 		L: 50,
// 		X: 10,
// 		V: 5,
// 		I: 1,
// 	};
// 	let number = [];
// 	for (let i = 0; i < splitRo.length; i++) {
// 		for (j in Object.keys(numerals)) {
// 			if (splitRo[i] === Object.keys(numerals)[j]) {
// 				number.push(numerals[splitRo[i]]);
// 			}
// 		}
// 	}
// 	for (let i = 0; i < number.length; i++) {
// 		if (number[i] < number[i + 1]) {
// 			sum -= number[i];
// 		} else {
// 			sum += number[i];
// 		}
// 	}
// 	return sum;
// }

// 3/17/21 kyu===6

//Prompt: IQ Test

//Solution:
// function iqTest(numbers) {
// 	let newNumbers = numbers.split(' ');
// 	let even = [];
// 	let odd = [];

// 	for (let i = 0; i < newNumbers.length; i++) {
// 		newNumbers[i] % 2 === 0
// 			? even.push(newNumbers[i])
// 			: odd.push(newNumbers[i]);
// 	}
// 	return even.length > odd.length
// 		? newNumbers.indexOf(odd[0]) + 1
// 		: newNumbers.indexOf(even[0]) + 1;
// }

// 3/18/21

//Prompt: Sums of Parts

//Solution:
// function partsSums(ls) {
// 	ls.unshift(0);
// 	let sum = ls.reduce((a, b) => a + b, 0);
// 	return ls.map((num) => (sum = sum - num));
// }
// * Write a program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and print "Buzz" for the multiples of five. When number is divided by both three and five, print "fizz buzz"

// * Write a program to find the index of a value in a sorted array. If the value does not find return the index where it would be if it were inserted in order.
// Example:
// [1, 2, 4, 5, 6] 5(target) -> 3(index)
// [1, 2, 4, 5, 6] 0(target) -> 0(index)
// [1, 2, 4, 5, 6] 7(target) -> 5(index)

// * Write a program to find longest Palindromic Substring within a string.Also find the start index and the end index of that Palindromic Substring within the string. Print the palindromic substring, the start index, the end index and also the original string removing the palindromic substring.
// i.e thequickbrownfoxxofnworbquickthe ->  brownfoxxofnworb
// The start index : 8, end index :23
// The string without palindromic substring :thequickquickthe

// const iterating = () => {
// 	for (let i = 0; i <= 100; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			console.log('fizz buzz');
// 		} else if (i % 3 === 0) {
// 			console.log('Fizz');
// 		} else if (i % 5 === 0) {
// 			console.log('Buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// };

// const findIndex = (array, target) => {
// 	if (array.includes(target)) {
// 		console.log(array.indexOf(target));
// 	} else {
// 		array.push(target);
// 		array.sort((a, b) => a - b);
// 		console.log(array.indexOf(target));
// 	}
// };
// function reverse(s) {
// 	var o = [];
// 	for (var i = 0, len = s.length; i <= len; i++) o.push(s.charAt(len - i));
// 	return o.join('');
// }

// function isPalindrome(word, words) {
// 	return word === reverse(word) && !words.includes(word);
// }

// function countPalindromesInString(s) {
// 	let subStrings = [];
// 	for (let i = 0; i < s.length; i++) {
// 		for (let j = 0; j < s.length - i; j++) {
// 			let subString = s.substring(j, j + i + 1);
// 			if (isPalindrome(subString, subStrings)) {
// 				subStrings.push(subString);
// 			}
// 		}
// 	}
// 	return subStrings.length;
// }

// //reverse the end word
// const reverse = (word) => {
// 	let reversedWord = [];
// 	for (let a = 0; a < word.length; a++) {
// 		reversedWord.push(charAt(word.length - i));
// 	}
// 	return reversedWord.join('');
// };

// //compare the strings to find if it is a palindrome
// const palindrome = (word) => {
// 	return word === reverse(word);
// };

// const findPalindrome = (string) => {
// 	//compare each end of string
// 	//moving in one index at a time
// 	//if you find a spot where the two characters equal,
// 	//get the substring from the lower index to the higher index.
// 	//run it through findPalindrome()
// 	//if true, return string
// 	let counter = 1;
// 	for (let a = 0; a < string.length; a++) {
// 		if (string[a] === string[string.length - counter]) {
// 			let substring = string.substr(a, string.length - counter);
// 			if (palindrome(substring)) {
// 				return substring;
// 			}
// 		}
// 	}
// };

// 3/23/21 kyu === 5

//Prompt Human Readable Time

//solution:
// function humanReadable(seconds) {
// 	let hours = Math.floor(seconds / 3600);
// 	console.log((seconds %= 3600));
// 	let minutes = seconds > 59 ? Math.floor(seconds / 60) : 0;
// 	let newSeconds = seconds > 59 ? seconds % 60 : seconds;

// 	const addZeros = (number) => {
// 		return (number < 10 ? '0' : '') + number;
// 	};

// 	hours = addZeros(hours);
// 	minutes = addZeros(minutes);
// 	newSeconds = addZeros(newSeconds);

// 	return `${hours}:${minutes}:${newSeconds}`;
// }

// 3/24/21 kyu===8

//Prompt: Find the smallest integer in the array

//Solution:
// class SmallestIntegerFinder {
// 	findSmallestInt(args) {
// 		return args.sort((a, b) => a - b)[0];
// 	}
// }

// 3/26/21 kyu===5

//Prompt Rot13

//Solution
// function rot13(message) {
// 	const splitMsg = message.split('');
// 	const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
// 	const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// 	let letterIndex = '';
// 	let length = letters.length;
// 	for (let i = 0; i < splitMsg.length; i++) {
// 		if (splitMsg[i].match(/[a-z]/)) {
// 			letterIndex = letters.indexOf(splitMsg[i]);
// 			splitMsg[i] = letters[(letterIndex + 13) % length];
// 		} else if (splitMsg[i].match(/[A-Z]/)) {
// 			letterIndex = upperLetters.indexOf(splitMsg[i]);
// 			splitMsg[i] = upperLetters[(letterIndex + 13) % length];
// 		}
// 	}
// 	return splitMsg.join('');
// }

// 3/20/21 kyu===6

//Prompt Twisted Sum

//Solution (Python)

// def complete_sum(n):
// 	return sum(sum(map(int, str(num))) for num in range(1, n + 1))

// 4/2/21 kyu===5

//Prompt: The Hashtag Generator

//Solution:
// function generateHashtag(str) {
// 	let stringArr = str.split(' ');
// 	let newArr = [];
// 	const returnAnswer = (arr) => {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i].length >= 140) {
// 				return false;
// 			}
// 			arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// 		}
// 		arr.splice(0, 0, '#');
// 		return arr.join('');
// 	};

// 	for (let i = 0; i < stringArr.length; i++) {
// 		if (stringArr[i].match(/[a-zA-Z]/)) {
// 			newArr.push(stringArr[i]);
// 		}
// 	}
// 	return newArr.length < 1 ? false : returnAnswer(newArr);
// }

// console.log('hello');

// function beggars(values, n) {
// 	let final = [];
// 	for (let i = 0; i < values.length; i++) {
// 		if (n > 1) {
// 			let sum = values[i] + values[i + n];
// 			final.push(sum);
// 		} else {
// 			final = values.reduce((a, b) => a + b);
// 		}
// 	}
// 	console.log(final);
// }
// beggars([1, 2, 3, 4, 5], 2);

// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

// 4/20/21 (HackerRank)

//Prompt: There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

//Solution:
// function sockMerchant(n, ar) {
// 	const sortedAr = ar.sort((a, b) => a - b);
// 	console.log(sortedAr);
// 	let count = 0;
// 	for (let i = 0; i < sortedAr.length; i++) {
// 		if (sortedAr[i + 1] === sortedAr[i]) {
// 			i = i + 1;
// 			count++;
// 		}
// 	}
// 	return count;
// }

// 4/20/21

//Prompt: There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

//Solution:
// function jumpingOnClouds(c) {
// 	let steps = 0;
// 	for (let i = 0; i < c.length; i++) {
// 		if (c[i - 1] === c[i] && c[i + 1] === c[i]) {
// 			c.splice(i, 1);
// 		}
// 		if (c[i] === 0 && i > 0) {
// 			console.log(i);
// 			steps++;
// 		}
// 	}
// 	return steps;
// }
