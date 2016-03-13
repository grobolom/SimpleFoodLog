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

/* tests below */

fakeFoods = [{ calories: 100 }, { calories: 250 }, { calories: 150 }];
console.assert(foodTotal(fakeFoods) == 500 , 'failed calculating total calories');

fakeFoodEntry = 'bacon 250kcal';
console.assert(calculateCalories(fakeFoodEntry) == 250);
