const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';    
    }else if(a < 0 || b < 0){
        return 'ERROR';
    }else{    
        let sum = 0;
        if(a === b){
            sum = a;
        }else if(a !== b){
            if(a < b){
                for(let i = a; i <= b; i++){
                    sum += i;
                }
            }else if(b < a){
                for(let j = b; j <= a; j++){
                    sum += j;
                }
            }
        }
        return sum;
     }
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
