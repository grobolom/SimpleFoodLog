var FoodEntry = React.createClass({
    displayName: 'FoodEntry',

    render: function () {
        return React.createElement(
            'li',
            null,
            React.createElement(
                'span',
                null,
                this.props.name
            ),
            React.createElement(
                'span',
                {
                    className: 'u-pull-right remove-food',
                    onClick: this.props.handleClick
                },
                '-'
            ),
            React.createElement(
                'span',
                { className: 'u-pull-right calories' },
                this.props.calories
            )
        );
    }
});