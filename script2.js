let sentence1 = "Hogy a macska rúgja meg, hát ez hogyan csináltam"

function cleanse(sentence, words) {
    
    let result = ""

    let wordsFromSentence = sentence.split(" ")

    for (const wordFromSentence of wordsFromSentence) {
        let isCleanword = true;

        for (const word of words) {
            if (word === wordFromSentence) {
                isCleanword = false;
            }
            
        }
        if (isCleanword === true) {
            result += `${wordFromSentence}`
        } else {
            let uglyWord = ""
            for (let i = 0; i < wordFromSentence.length; i++)
            uglyWord += "*****"
            
        }
        result += `${uglyWord}`
    }

    return result




}
console.log(cleanse(sentence1, ['macska', 'hát']))