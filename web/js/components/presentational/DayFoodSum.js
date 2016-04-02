var DayFoodSum = React.createClass({
    displayName: 'DayFoodSum',

    render: function () {
        var strongClasses = this.props.goodOrBad + ' u-pull-right';
        var selected = this.props.selected ? 'selected' : '';
        return React.createElement(
            'li',
            { className: selected },
            React.createElement(
                'span',
                { onClick: this.props.handleClick },
                this.props.date
            ),
            React.createElement(
                'strong',
                { className: strongClasses },
                this.props.total
            )
        );
    }
});