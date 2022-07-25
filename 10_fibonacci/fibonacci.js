const fibonacci = function(position) {
    let prevPrevNum = 0;
    let prevNum = 0;
    let result = 1;
    if(position < 0){
        return 'OOPS';
    }else {
        for(let i = 0; i < position; i++ ){
            if (i === 0){
                result = 1;
            } else { 
                result = result + prevNum;      
                prevNum = result - prevNum;
            }
        }
        return result;        
    }
};

// solution

// const fibonacci = function(count) {
//   if (count < 0) return "OOPS";
//   if (count === 0) return 0;
//   let a = 0;
//   let b = 1;
//   for (let i = 1; i < count; i++) {
//     const temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return b;
// };

// Do not edit below this line
module.exports = fibonacci;
