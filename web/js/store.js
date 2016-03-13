var createStore = function (reducer, initialState) {
    var state;
    var observers = [];

    if (initialState != undefined) {
        state = initialState;
    }

    var getState = function() {
        return state;
    };

    var dispatch = function(action) {
        state = reducer(state, action);
        // don't need to pass in state because the observers will call getState
        var listeners = observers;
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    };

    var subscribe = function(observer) {
        observers.push(observer);
    };

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
};
