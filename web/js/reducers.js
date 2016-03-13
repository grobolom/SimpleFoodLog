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
            return element.key != action.index;
        });
        return Object.assign({}, state, { foods: newFoods });
    }

    return state;
};

// tests
var testInitialState = { foods: [] };
var testAddTodoAction = {
    type: 'ADD_FOOD',
    entry: { index: '1', entry: 'Bacon Bits 200' }
};
var expectedNextState = { foods: [testAddTodoAction.entry] };
var nextState = sflReducer(testInitialState, testAddTodoAction);

console.assert(_.isEqual(expectedNextState, nextState), 'adds food');

var testInitialState = { foods: [{ key: '2'}] };
var testRemoveTodoAction = {
    type: 'REMOVE_FOOD',
    index: '2'
};
var expectedNextState = { foods: [] };
var nextState = sflReducer(testInitialState, testRemoveTodoAction);

console.assert(_.isEqual(expectedNextState, nextState), 'removes food');
