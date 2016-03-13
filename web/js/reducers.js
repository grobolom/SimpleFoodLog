// I'm going to start with a single, all-encompassing reducer. Once I
// understand more, I will convert to multiple reducers, and combine
// them using Dan Abramov's method

var sflReducer = function(state = {}, action) {
    if (action.type === 'ADD_FOOD') {
        var newFoods = state.foods.concat(action.entry);
        return Object.assign({}, state, { foods: newFoods });
    }

    if (action.type === 'REMOVE_FOOD') {
        var newFoods = state.foods.filter(function (element) {
            return element.index != action.index;
        });
        return Object.assign({}, state, { foods: newFoods });
    }

    return state;
};

// tests
var testInitialState = { foods: [] };
var testAddFoodAction = addFood({ index : '1', entry: 'Bacon 200'});
var expectedNextState = { foods: [{ index : '1', entry: 'Bacon 200'}] };
var nextState = sflReducer(testInitialState, testAddFoodAction);

console.assert(_.isEqual(expectedNextState, nextState), 'adds food');

var testInitialState = { foods: [{ index: '2'}] };
var testRemoveFoodAction = removeFood('2');
var expectedNextState = { foods: [] };
var nextState = sflReducer(testInitialState, testRemoveFoodAction);

console.assert(_.isEqual(expectedNextState, nextState), 'removes food');
