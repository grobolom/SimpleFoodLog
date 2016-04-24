// stuff the components in here until we really want to extract them
import React from 'react';
import { addFood, removeFood, selectDate } from './actions/actions.js';

import { FoodInput } from './components/FoodInput.js';
import { FoodEntry } from './components/FoodEntry.js';
import { DayFoodSum } from './components/DayFoodSum.js';

export const FoodInputContainer = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();
        var input = event.target.children[0];
        this.props.store.dispatch(addFood({ entry: input.value }));
        input.value = '';
        input.focus();
    },
    render: function() {
        return (
            <FoodInput
                handleSubmit = { this.handleSubmit }
            />
        );
    },
});


export const RemovableFoodEntry = React.createClass({
    handleClick: function() {
        this.props.store.dispatch(removeFood(this.props));
    },
    render: function() {
        return (
            <FoodEntry
                name = { this.props.name }
                calories = { this.props.calories }
                handleClick = { this.handleClick }
            />
        );
    }
});


export const FoodList = React.createClass({
    render: function() {
        var f = this.props.foods ? this.props.foods : [];
        var foods = f.map(function(food) {
            return (
                <RemovableFoodEntry
                    name = { food.name }
                    calories = { food.calories }
                    handleClick = { food.handleClick }
                    key = { food.index }
                    index = { food.index }
                    store = { this.props.store }
                />
            );
        }, this);
        return (
            <ul>
                { foods }
            </ul>
        );
    }
});

export const FoodSum = React.createClass({
    handleClick : function() {
        this.props.store.dispatch(selectDate(this.props.date));
    },

    goodOrBad: function() {
        var remaining = this.props.calorieGoal - parseInt(this.props.total);
        if (remaining > 200) {
            return 'good';
        } else if (remaining <= 0) {
            return 'bad';
        }
        return '';
    },

    render: function() {
        return (
            <DayFoodSum
                goodOrBad = { this.goodOrBad() }
                handleClick = { this.handleClick }
                total = { this.props.total }
                selected = { this.props.selected }
                date = { this.props.date }
            />
        );
    }
});
