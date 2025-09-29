const removeFromArray = function(arr, num1, num2) {
    for(let i = 1; i < arguments.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arguments[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
