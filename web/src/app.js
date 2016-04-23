import React from 'react';
import { render } from 'react-dom';

import { createStore } from './store.js';
import { RootReducer } from './reducers/rootReducer.js';
import { SimpleFoodLog } from './components/SimpleFoodLog.js';

var oldState = localStorage.getItem('state');
var initialState = (oldState && oldState != "undefined") ?
    JSON.parse(oldState) :
    {
        initialIndex: 0,
        selectedDate: moment().format('MM/DD/YYYY'),
        log: { dates: [] }
    };

var rootElement = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        return (
            <SimpleFoodLog />
        );
    }
});

var ren = function() {
    render(
        React.createElement(rootElement, {}),
        document.getElementById('react-app')
    );
};

var saveState = function(state) {
    localStorage.setItem('state', JSON.stringify(store.getState()));
};


var store = createStore(RootReducer, initialState);
store.subscribe(ren);
store.subscribe(saveState);

console.log(initialState);
ren();
