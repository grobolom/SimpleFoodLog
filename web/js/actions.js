var addFood = function (entry) {
    return {
        type: 'ADD_FOOD',
        entry: entry
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

var selectDate = function (date) {
    return {
        type: 'SELECT_DATE',
        date: date
    }
};
