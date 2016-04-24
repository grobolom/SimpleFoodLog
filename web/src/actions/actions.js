export const addFood = function (entry) {
    return {
        type: 'ADD_FOOD',
        entry: entry
    }
};

export const removeFood = function (entry) {
    return {
        type: 'REMOVE_FOOD',
        entry: entry
    }
};

export const resetState = function () {
    return {
        type: 'RESET_STATE'
    }
};

export const selectDate = function (date) {
    return {
        type: 'SELECT_DATE',
        date: date
    }
};

export const setCalorieGoal = function (amount) {
    return {
        type: 'SET_CALORIE_GOAL',
        amount: amount
    }
};
