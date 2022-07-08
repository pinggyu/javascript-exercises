const sumAll = function(num1,num2) {

    // better solution with better runtime than Odin project solution (run time is constant)
    
    let sum = 0;
    let start = 0;
    let end = 0;

    if (typeof(num1) === 'number' && typeof(num2) === 'number' && num1 >= 0 && num2 >= 0){
        
        if (num1 > num2){
            start = num2;
            end = num1;
        }else {
            start = num1;
            end = num2;           
        }

        if ((end - start) % 2 === 0){
            sum = ( (start + end - Math.pow(start,2) + Math.pow(end,2) ) / 2 ) ;
        } else if ((end - start) % 2 === 1) {
            sum = (Math.ceil((end - start) / 2) * (start + end));
        }
    }else {
        return 'ERROR';
    }
    return sum;

    // SOLUTION
    // let sum = 0;
    // for (let i = num1; i < num2 + 1; i++) {
    //     sum += i;
    // }
    // return sum
};

// Do not edit below this line
module.exports = sumAll;
