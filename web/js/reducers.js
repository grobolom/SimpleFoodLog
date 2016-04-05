// very cool but fairly simple. Just walk across the 'array' of passed reducers
// and call the current reducer with the current state and action

var combineReducers = function(reducers) {
    return function (state, action) {
        return Object.keys(reducers).reduce(
            function (nextState, key) {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
}

var sflReducer = function(state, action) {
    // looks like our todo action reducer is getting a bit too long. what
    // should we do next to refactor this and extract some of this into
    // code that is more clear? what objects should have these methods?
    if (action.type === 'ADD_FOOD') {
        var foodDate = state.selectedDate; //action.entry.date;
        var newLog = state.log;
        var entry = action.entry;

        if (newLog.dates.indexOf(foodDate) < 0) {
            newLog[foodDate] = [];
        }
        newLog.dates = newLog.dates.concat(foodDate);

        var re = /(?:\d+)(?: )?(?:c|cal|kcal|calories)?$/
        var line = entry.entry;
        var match = line.match(re);

        // todo: there has to be a better way to do this!
        var matchCalories = match ? match[0] : 0;
        var matchCaloriesLength = matchCalories ? matchCalories.length : 0;
        var name = line.substring(0, line.length - matchCaloriesLength).trim();
        var nextIndex = state.initialIndex + 1;

        var e = Object.assign({}, entry, {
            name: name,
            calories: matchCalories,
            index: nextIndex,
        });


        newLog[foodDate] = newLog[foodDate].concat(e);
        return Object.assign({}, state, {
            log: newLog,
            initialIndex: nextIndex
        });
    }

    if (action.type === 'REMOVE_FOOD') {
        var date = state.selectedDate;
        var newFoods = state.log[date].filter(function (element) {
            return element.index != action.entry.index;
        });
        var newLog = state.log;
        newLog[date] = newFoods;
        return Object.assign({}, state, { log: newLog });
    }

    if (action.type === 'RESET_STATE') {
        return { log: { dates: [] } };
    }

    if (action.type === 'SELECT_DATE') {
        return Object.assign({}, state, { selectedDate: action.date });
    }

    if (action.type === 'SET_CALORIE_GOAL') {
        var amount = Number.parseInt(action.amount);
        return Object.assign({}, state, { calorieGoal: amount });
    }

    return state;
};

/*

// tests
var testInitialState = {
    log: { dates: [] }
};
var testAddFoodAction = addFood({ index : '1', entry: 'Bacon 200', date: '03/02/2016' });
var expectedNextState = {
    log: {
        'dates': ['03/02/2016'],
        '03/02/2016' : [
            { index : '1', entry: 'Bacon 200', name: 'Bacon', calories: '200', date: '03/02/2016' }
        ]
    }
};
var nextState = sflReducer(testInitialState, testAddFoodAction);

console.assert(_.isEqual(expectedNextState, nextState), 'adds food log');

var testInitialState = {
    log: { dates: ['03/01/2016'] }
};
var testResetState = resetState();
var expectedNextState = {
    log: { dates: [] }
};
var nextState = sflReducer(testInitialState, testResetState);

console.assert(_.isEqual(expectedNextState, nextState), 'resets state');

*/
export { combineReducers, sflReducer };
