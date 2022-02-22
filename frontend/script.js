let sentence1 = ["Basketball is the best sport ever"]
/*let sentence2 = ["I have never seen this before"]
let sentence3 = ["No problems have been detected in the workplace"]
let sentence4 = ["returns the sentence it was given"]
let sentence5 = ["write a function that uses two parameters"]

let wordChanged = ["best", "seen", "been", "was", "uses"]*/

function cleanse(sentence, words) {
	let result = ""
	
	let wordsFromSentence = sentence.split(" ")
	

	for (const wordFromSentence of wordsFromSentence) {
		let isCleanWord = true;
		for (const word of words) {
			if(word === wordFromSentence) {
				isCleanWord = false;
			}			
		}
		if (isCleanWord === true) {
			result += `${wordFromSentence}`
		} else {
			let uglyWord = ""
			for (let i = 0; i < wordFromSentence.length; i++) {
				uglyWord += "*"
				
			}
			result += `${uglyWord}`
		}
		return result
	}


	

}
console.log(cleanse(sentence1, ['Basketball', 'best']))