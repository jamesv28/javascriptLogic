var rsvp = require('rsvp');
var express = require('express');

/**
 Promises can be in three states: pending, fulfilled or rejected
 **/

function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(dieToss());

var promise = new rsvp.Promise(function(fulfill, reject) {
    var n = dieToss();
    if (n === 6) {
        fulfill(n);
    } else {
        reject(n);
    }
    console.log('2');
});

promise.then(function(toss) {
    console.log('yay, threw a ' + toss + '.')
}, function(toss){
   console.log('nay, threw a ' + toss + '.');
});

function tossASix() {
    return new rsvp.Promise(function(fulfill, reject) {
        var n = Math.floor(Math.random() * 6) + 1;
        if (n === 6) {
            fulfill(n);
        } else {
            reject(n);
        }
    });
}

function logAndTossAgain(toss) {
    console.log("Tossed a " + toss + ", need to try again.");
    return tossASix();
}

function logSuccess(toss) {
    console.log("Yay, managed to toss a " + toss + ".");
}

function logFailure(toss) {
    console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
}

tossASix()
    .then(null, logAndTossAgain)
    .then(null, logAndTossAgain)
    .then(logSuccess, logFailure);