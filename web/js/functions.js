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

var getFoodsByDate = function(foods, date) {
    return foods.filter(function(element) {
        return date == element.date;
    });
};

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

fakeFoods = [
    { date: (new Date(2015, 1, 1)).getTime(), index: 0 },
    { date: (new Date(2015, 1, 2)).getTime(), index: 1 }
];
expectedFoods = [{ date: (new Date(2015, 1, 2)).getTime(), index: 1 }];
testFoods = getFoodsByDate(fakeFoods, (new Date(2015, 1, 2)).getTime());
console.assert(_.isEqual(testFoods, expectedFoods),
    'failed fetching foods by date');
