/*
 Hints for the first problem:
 1. Find the button with the ID of `sum-all`
 2. Add an event listener that:
 - finds the select element by name (use getElementsByName)
 - passes all of its options to the `sum` function defined in `logic.js`
 - takes the value returned by the `sum` function and displays it on the page
 */

var allPrices = document.getElementsByTagName("option");
var nums = [];
for (var i = 0; i < allPrices.length; i++) {
 nums.push(parseInt(allPrices[i].value));
}

var answer = document.getElementById("answer");
console.log(answer);

var sumAll = document.getElementById("sum-all");
sumAll.onclick = function (){
 sum(nums);
 answer.innerHTML = sum(nums);
};