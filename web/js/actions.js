var addFood = function (entry) {
    return {
        type: 'ADD_FOOD',
        entry
    }
};

var removeFood = function (entry) {
    return {
        type: 'REMOVE_FOOD',
        entry
    }
};
