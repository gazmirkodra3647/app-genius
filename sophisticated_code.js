/* 
filename: sophisticated_code.js
description: This code calculates the Fibonacci series up to n terms and checks if a number is prime or not.
*/

// Function to calculate Fibonacci series up to n terms
function fibonacci(n) {
    var fibonacci_series = [0, 1];
    
    for (var i = 2; i < n; i++) {
        fibonacci_series.push(fibonacci_series[i-1] + fibonacci_series[i-2]);
    }
    
    return fibonacci_series;
}

// Function to check if a number is prime or not
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Main program
var n = 10;

console.log("Calculating Fibonacci series up to " + n + " terms:");

var fibonacci_series = fibonacci(n);
console.log(fibonacci_series);

console.log("\nChecking if the numbers in the Fibonacci series are prime:");

for (var i = 0; i < n; i++) {
    var num = fibonacci_series[i];
    
    if (isPrime(num)) {
        console.log(num + " is prime");
    } else {
        console.log(num + " is not prime");
    }
}

/* Output:
Calculating Fibonacci series up to 10 terms:
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

Checking if the numbers in the Fibonacci series are prime:
0 is not prime
1 is not prime
1 is not prime
2 is prime
3 is prime
5 is prime
8 is not prime
13 is prime
21 is not prime
34 is not prime
*/