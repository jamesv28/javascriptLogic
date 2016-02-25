var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running",
        "television"]
}; console.log(day1.squirrel); // → false console.log(day1.wolf);
// → undefined
day1.wolf = false; console.log(day1.wolf);
// → false
var descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};
var anObject = {left: 1, right: 2};

console.log(anObject.left);
delete anObject.left;

console.log(anObject.left);
console.log('right' in anObject);

var journal = [
    {events: ["work", "touched tree", "pizza",
        "running", "television"], squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break",
        "peanuts", "beer"], squirrel: true},
    /* and so on ... */ ];

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
