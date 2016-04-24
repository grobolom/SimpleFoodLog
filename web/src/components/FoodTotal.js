import React from 'react';

export const FoodTotal = React.createClass({
    render: function() {
        return (
            <h5>
                <strong>{ this.props.total }</strong>
                <span> total</span>
            </h5>
        );
    }
});
