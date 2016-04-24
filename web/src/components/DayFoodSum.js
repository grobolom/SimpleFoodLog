import React from 'react';

export const DayFoodSum = React.createClass({
    render: function() {
        var strongClasses = this.props.goodOrBad + ' u-pull-right';
        var selected = this.props.selected ? 'selected' : '';
        return (
            <li className={ selected }>
                <span onClick={ this.props.handleClick }>
                    { this.props.date }
                </span>
                <strong className={ strongClasses }>
                    { this.props.total }
                </strong>
            </li>
        )
    }
});
