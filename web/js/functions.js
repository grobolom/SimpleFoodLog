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

var maxIndex = function(foods) {
    return foods.reduce(function(previous, current) {
        currentIndex = current.index;
        return previous > currentIndex ? previous : currentIndex;
    }, 0);
}

/* tests below */

fakeFoods = [{ calories: 100 }, { calories: 250 }, { calories: 150 }];
console.assert(foodTotal(fakeFoods) == 500 ,
    'failed calculating total calories');

fakeFoodEntry = 'bacon 250kcal';
console.assert(calculateCalories(fakeFoodEntry) == 250,
    'failed calculating calories from food name');

fakeEntries = [{ index: 1 }, { index: 3 }];
console.assert(maxIndex(fakeEntries) == 3,
    'failed calculating max index');
