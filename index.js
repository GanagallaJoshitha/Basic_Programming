function isPrime(num) {
    if (!Number.isInteger(num) || num <= 1) return false;

    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
