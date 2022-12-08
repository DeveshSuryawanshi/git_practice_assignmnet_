function checkPrime(num){
    let count = 0;
    for(let i=2; i <= num / 2; i++){
        if(num % i == 0)
        {
            count++;
        }
    }
    return count == 0;    
}

let num1 = checkPrime(num);
console.log(num1)