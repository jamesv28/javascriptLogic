var count = 1, total = 0;

while(count < 10) {
    total += count;
    //console.log('hello', total);
    // 1 3 6 10 15 21 28
    count++;
}
console.log(total);

//console.log(sum(range(1, 10)));

var array1 = [1,2,3];

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    var current = array[i];
    console.log(current); }

function logEach(array) {
    for(var i = 0; i < 3; i++) {
        console.log(array[i]);
    }
}

logEach([12, 23,45]);

function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}
//multiplier(4);
var twice = multiplier(5);
console.log(twice(2));
//console.log(multiplier(4));

var thrice = multiplier(8);
console.log(thrice(11));

function power(base, exponent) {
    if (exponent == 0)
    return 1;
    else
    return base * power(base, exponent - 1);
}

console.log(power(2,5));

console.log(power(4,5));
