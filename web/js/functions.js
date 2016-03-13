var foodTotal = function(foods) {
    return foods.reduce(function(previous, current) {
        return previous + parseInt(current.calories);
    }, 0);
};

var calculateCalories = function(entry) {
    re = /(\d+)(?: )?(?:c|cal|kcal|calories)?$/;
    var stuff = entry.match(re);
    return stuff ? parseInt(stuff) : 0;
}

var maxKey = function(foods) {
    return foods.reduce(function(previous, current) {
        currentKey = current.key;
        return previous > currentKey ? previous : currentKey;
    }, 0);
}

/* tests below */

fakeFoods = [{ calories: 100 }, { calories: 250 }, { calories: 150 }];
console.assert(foodTotal(fakeFoods) == 500 ,
    'failed calculating total calories');

fakeFoodEntry = 'bacon 250kcal';
console.assert(calculateCalories(fakeFoodEntry) == 250,
    'failed calculating calories from food name');

fakeEntries = [{ key: 1 }, { key: 3 }];
console.assert(maxKey(fakeEntries) == 3,
    'failed calculating max key');
