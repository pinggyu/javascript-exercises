const palindromes = function (word) {
    let rawWord = word.replace(/[/\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let string = rawWord.split("");
    console.log(rawWord);
    let reverse = string.reverse(); 
    console.log(reverse);
    let reverseString = reverse.join("");
    console.log(reverseString);
    if (reverseString.toLowerCase() === rawWord.toLowerCase()){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
