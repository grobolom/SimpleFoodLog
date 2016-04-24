import moment from 'moment';

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
        var currentIndex = current.index;
        return previous > currentIndex ? previous : currentIndex;
    }, 0);
}

var getFoodsByDate = function(foods, date) {
    return foods.filter(function(element) {
        return date == element.date;
    });
};

var makeDateWindow = function(startDate, daysBefore) {
    var days = [];
    for (var i = 0; i < daysBefore; i++) {
        var date = moment(startDate);
        days.push(date.subtract(i, 'days').format('MM/DD/YYYY'));
    }
    return days;
};

export { foodTotal, calculateCalories, maxIndex, getFoodsByDate, makeDateWindow };
