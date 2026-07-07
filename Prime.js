/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
// const n=parseInt();
const n=parseInt(process.args[2]);
function isPrime(n) {

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

// Example
let number = 17;

if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is Not a Prime Number");
}

module.exports = isPrime;
