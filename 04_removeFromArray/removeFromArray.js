const removeFromArray = function(someArray, ...args) {
    for (let i = 0; i < someArray.length; i++){ 
        for (let y = 0; y < args.length; y++){
            if (someArray[i] === args[y]){
                someArray.splice(i,1);
                i--;
            }
        }

    }

    // alternative method
    // function removeFromArray(array, ...args) {
    //     return array.filter(x => !args.includes(x))
    // };
    
    console.log(someArray);
    return someArray;
};

// Do not edit below this line
module.exports = removeFromArray;
