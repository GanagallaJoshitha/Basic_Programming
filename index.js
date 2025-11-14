function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(7)); 
function evenOdd(num) {
    return num % 2 === 0;
}

console.log(evenOdd(10));
