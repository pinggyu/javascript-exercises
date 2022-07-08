const leapYears = function(num) {
    if (typeof(num) === 'number'){
        if ( (num % 4 === 0) && (num % 100 != 0) || num % 400 === 0){
            return true;
        }else {
            return false;
        }
    }else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = leapYears;
