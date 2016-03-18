var addFood = function (entry) {
    // todo: this should probably be in the reducers, not here
    // I shouldn't be messing with stuff before the state handlers get it,
    // should just be passing raw data
    var re = /(?:\d+)(?: )?(?:c|cal|kcal|calories)?$/
    var line = entry.entry;
    var match = line.match(re);

    // todo: there has to be a better way to do this!
    var matchCalories = match ? match[0] : 0;
    var matchCaloriesLength = matchCalories ? matchCalories.length : 0;
    var name = line.substring(0, line.length - matchCaloriesLength).trim();

    var e = Object.assign({}, entry, {
        name: name,
        calories: matchCalories
    });

    return {
        type: 'ADD_FOOD',
        entry: e
    }
};

var removeFood = function (entry) {
    return {
        type: 'REMOVE_FOOD',
        entry: entry
    }
};

var resetState = function () {
    return {
        type: 'RESET_STATE'
    }
};
