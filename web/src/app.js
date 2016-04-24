import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

import { createStore } from './store.js';
import { RootReducer } from './reducers/rootReducer.js';
import { SimpleFoodLog } from './components/SimpleFoodLog.js';
import {
    foodTotal,
    calculateCalories,
    maxIndex,
    getFoodsByDate,
    makeDateWindow
} from './functions.js';

var oldState = localStorage.getItem('state');
var initialState = (oldState && oldState != "undefined") ?
    JSON.parse(oldState) :
    {
        initialIndex: 0,
        selectedDate: moment().format('MM/DD/YYYY'),
        log: { dates: [] }
    };
var initialState = Object.assign({}, initialState, {
    selectedDate: moment().format('MM/DD/YYYY')
});

var store = createStore(RootReducer, initialState);

//
// ugly stuff here?
//

var today = moment().format('MM/DD/YYYY');
var todaysLog = store.getState().log;
var todaysFoods = todaysLog ? todaysLog[today] : [];

var mi = maxIndex(todaysFoods ? todaysFoods : []);
var initialIndex = store.getState().initialIndex ? store.getState().initialIndex : mi;

var rootElement = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        var store = this.props.store;
        var calorieGoal = store.getState().calorieGoal ? store.getState().calorieGoal : 1600;

        var log = store.getState().log;
        var selectedDate = store.getState().selectedDate;
        var today = selectedDate ? selectedDate : moment().format('MM/DD/YYYY');
        // I'm sensing that log needs to be a class with this behavior extracted
        var todaysFoods = log[today] ? log[today] : [];
        var lastWeeksDates = makeDateWindow(
            moment().subtract(0, 'days').format('YYYYMMDD'),
            7
        );
        var todaysTotal = foodTotal(todaysFoods);
        var lastWeeksLog = [];
        var lastWeeksFoods = [];
        lastWeeksDates.forEach(function(element) {
            var e = log[element] ? log[element] : [];
            lastWeeksLog.push({ date: element, total: foodTotal(e) });
            lastWeeksFoods = lastWeeksFoods.concat(e);
        });

        var weekAverage = Math.round(lastWeeksFoods.reduce(function(previous, current) {
            return previous + Number.parseInt(current.calories);
        }, 0) / 7);

        return (
            <SimpleFoodLog
                todaysTotal = { todaysTotal }
                weekAverage = { weekAverage }
                calorieGoal = { calorieGoal }
                todaysFoods = { todaysFoods }
                lastWeeksLog = { lastWeeksLog }
                today = { today }
                store = { store }
            />
        );
    }
});

//
// possible end of ugly stuff?
//

var ren = function() {
    render(
        React.createElement(rootElement, { store: store }),
        document.getElementById('react-app')
    );
};

var saveState = function(state) {
    localStorage.setItem('state', JSON.stringify(store.getState()));
};


store.subscribe(ren);
store.subscribe(saveState);
ren();
