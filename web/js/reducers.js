// I'm going to start with a single, all-encompassing reducer. Once I
// understand more, I will convert to multiple reducers, and combine
// them using Dan Abramov's method
//
// Also probably reducers don't need to function on the ENTIRE state
// can compose reducers so each one touches only a certain part of
// the code, such as the log or whatever

var sflReducer = function(state, action) {
    if (action.type === 'ADD_FOOD') {
        var foodDate = action.entry.date;
        var newLog = state.log;

        if (newLog.dates.indexOf(foodDate) < 0) {
            newLog[foodDate] = [];
            newLog.dates = newLog.dates.concat(foodDate);
        }

        newLog[foodDate] = newLog[foodDate].concat(action.entry);
        return Object.assign({}, state, { log: newLog });
    }

    if (action.type === 'REMOVE_FOOD') {
        var date = action.entry.date;
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

    return state;
};

// tests
/*
var testInitialState = { foods: [] };
var testAddFoodAction = addFood({ index : '1', entry: 'Bacon 200'});
var expectedNextState = { foods: [{ index : '1', entry: 'Bacon 200'}] };
var nextState = sflReducer(testInitialState, testAddFoodAction);

console.assert(_.isEqual(expectedNextState, nextState), 'adds food');
*/
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

/*
var testInitialState = { foods: [{ index: '2'}] };
var testRemoveFoodAction = removeFood('2');
var expectedNextState = { foods: [] };
var nextState = sflReducer(testInitialState, testRemoveFoodAction);

console.assert(_.isEqual(expectedNextState, nextState), 'removes food');
*/

var testInitialState = {
    log: { dates: ['03/01/2016'] }
};
var testResetState = resetState();
var expectedNextState = {
    log: { dates: [] }
};
var nextState = sflReducer(testInitialState, testResetState);

console.assert(_.isEqual(expectedNextState, nextState), 'resets state');
