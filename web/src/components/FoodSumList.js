import React from 'react';

import { FoodSum } from '../components.js';

export const FoodSumList = React.createClass({
    render: function() {
        var l = this.props.log ? this.props.log : [];
        var sums = l.map(function(element, index) {
            return <FoodSum
                total = {element.total}
                date = {element.date}
                selected = {this.props.selectedDate === element.date}
                calorieGoal = {this.props.calorieGoal}
                key = {index}
                store = { this.props.store }
            />
        }, this);
        return <ul>{ sums }</ul>;
    }
});
