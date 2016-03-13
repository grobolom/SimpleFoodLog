// I'm going to start with a single, all-encompassing reducer. Once I
// understand more, I will convert to multiple reducers, and combine
// them using Dan Abramov's method

var sflReducer = function(state = {}, action) {
    if (action.type === 'ADD_FOOD') {
        return Object.assign({}, state, {
            foods: state.foods.concat(action.entry)
        });
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
