// Is palindrome?

// Check if a word is palindrome or not

// Way A :

const isPalindrome = word => {
	let wordToArr = word.split('');
	let wordToArrReverse = word.split('').reverse();
	let result = [];

	for (let i = 0; i <= wordToArr.length; i++) {
		if (wordToArr[i] === wordToArrReverse[i]) {
			result.push(true);
		} else {
			result.push(false);
		}
	}

	if (result.includes(false)) {
		return false;
	} else {
		return true;
	}
};

// Way B :

const isPalindrome = word => {
	let wordToArr = word.split('');
	let wordToArrReverse = word.split('').reverse();

	for (let i = 0; i <= wordToArr.length; i++) {
		if (!(wordToArr[i] === wordToArrReverse[i])) {
			return false;
		}
	}

	return true;
};
