//Problem 1
function multof3and5(max) {
    var sum = 0,
        i;

    // Use mod to determine if each number is multiple, if so add it the sum
    for (i = 1; i < max; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

//Problem 2
function addEven(num) {
    if (num % 2 !== 0) {num = 0; }
    return num;
}

function evenFibNums(num1, num2, max) {
    var sum = addEven(num1) + addEven(num2),
        i = num1 + num2;

    while (i < max) {
        i = num1 + num2;
        num1 = num2;
        num2 = i;
        sum += addEven(num2);
    }

    return sum;
}


function isPrime(num) {
	var i = 2;
	while (i < num){
		if (num % i === 0) {
			return false;
		}
		
		i += 1;
	}
	
	return true;
}

/* Recursively returns the largest prime number */
function largestPrimeFactor(num) {
	var i = 2,
		primes = [];
	
	//if num is prime, return num
	if (isPrime(num)) {
		return num;
	}
	
	//recursivly return next prime until at lowest point.
	while (i < num) {
		if (num % i === 0) {
			return largestPrimeFactor(num / i);
		}
		i += 1;
	}
}

function showProblem1() {
    var result = Number(multof3and5(1000)).toLocaleString('en');
    $('body').append('<p>The sum of all multiples of 3 and 5 below 1000 is ' + result + '</p>');
}

function showProblem2() {
    var result = Number(evenFibNums(1, 2, 4000000)).toLocaleString('en');
    $('body').append('<p>The sum of all even numbers whose values do not exceed 4,000,000 in the Fibonacci sequence (1, 2, ... is) ' + result + '</p>');
}

function showProblem3() {
	var result = Number(largestPrimeFactor(600851475143)).toLocaleString('en');
    $('body').append('<p>The largest prime factor of 600,851,475,143 is ' + result + '</p>');
}

$(document).ready(function (){
    showProblem1();
    showProblem2();
    /* The prime factors of 13195 are 5, 7, 13, and 29.
     * What is the largest prime factor of the number 600851475143?
     */
    showProblem3();
});
