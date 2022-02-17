let sentence1 = ["Basketball is the best sport ever"]
let sentence2 = ["I have never seen this before"]
let sentence3 = ["No problems have been detected in the workplace"]
let sentence4 = ["returns the sentence it was given"]
let sentence5 = ["write a function that uses two parameters"]

let wordChanged = ["best", "seen", "been", "was", "uses"]

function cleanse(sentence, words) {
	let result = [""];
	let mySplit = sentence.split(" ");

	for (const word of mySplit) {
		let isCleanWord = true;
		for (const myWords of words) {
			if(wordChanged === word) {
				let isCleanWord = false;
			}			
		}
	}
	if (isCleanWord = true) {
		result = result + word + ""
	} else {
		result = result + "****"
	}

}
console.log(cleanse(sentence1))