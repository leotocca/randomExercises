// Anagram

function anagram(str1, str2) {
	function normalize(str) {
		return str
			.toLowerCase()
			.split('')
			.filter(x => x !== ' ' || x !== '-');
	}

	let firstWord = normalize(str1);
	let secondWord = normalize(str2);

	if (firstWord.length !== strTosecondWordArr2.length) {
		return false;
	}

	for (const e of firstWord) {
		if (!secondWord.includes(e)) {
			return false;
		}
	}

	for (const e of secondWord) {
		if (!firstWord.includes(e)) {
			return false;
		}
	}

	return true;
}
