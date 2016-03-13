var addFood = function (entry) {
    return {
        type: 'ADD_FOOD',
        entry
    }
};

var removeFood = function (index) {
    return {
        type: 'REMOVE_FOOD',
        index
    }
};
