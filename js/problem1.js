/*jslint browser: true*/
/*global $, jQuery, alert*/

function multof3and5(max) {
    'use strict';
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

function showProblem1() {
    'use strict';
    var result = Number(multof3and5(1000)).toLocaleString('en');
    $('body').append('<p>The sum of all multiples of 3 and 5 below 1000 is ' + result + '</p>');
}

function addEven(num) {
    'use strict';
    if (num % 2 !== 0) {num = 0; }
    return num;
}

function evenFibNums(num1, num2, max) {
    'use strict';
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

function showProblem2() {
    'use strict';
    var result = Number(evenFibNums(1, 2, 4000000)).toLocaleString('en');
    $('body').append('<p>The sum of all even numbers whose values do not exceed 4,000,000 in the Fibonacci sequence (1, 2, ... is) ' + result + '</p>');
}


$(document).ready(function () {
    'use strict';
    showProblem1();
    showProblem2();
    
    
});
