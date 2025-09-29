const reverseString = function(string) {
    console.log(string);
    let splitWord = string.split('');
    console.log(splitWord);
    let reverseWord = splitWord.reverse();
    console.log(reverseWord);
    let newString = reverseWord.join('');
    console.log(newString);
    return newString;
};

let word = 'hello there';
reverseString(word);

// Do not edit below this line
module.exports = reverseString;
