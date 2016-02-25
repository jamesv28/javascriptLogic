function addEntry(events ,didItTurnIntoaSquirrel) {
    journal.push({
        events: events,
        squirrel: didItTurnIntoaSquirrel
    });

}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);