import React from 'react';
import { setCalorieGoal } from '../actions/actions.js'

export const TotalSelector = React.createClass({
    handleChange: function(event) {
        this.props.store.dispatch(setCalorieGoal(event.target.value));
    },
    render: function() {
        return (
            <div>
                <input
                    type='text'
                    className='u-full-width'
                    defaultValue={this.props.calorieGoal}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});
