const repeatString = function(str,num) {
    
    let word = "";

    if (num < 0){
        return 'ERROR';
    }else {
        for (let i = 0; i < num; i++){
        word = word + str;
    }
    return word;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
