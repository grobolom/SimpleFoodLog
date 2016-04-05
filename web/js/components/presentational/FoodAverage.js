export const FoodAverage = React.createClass({
    displayName: 'FoodAverage',

    render: function () {
        return React.createElement(
            'h5',
            { className: 'six columns' },
            React.createElement(
                'strong',
                null,
                this.props.average
            ),
            React.createElement(
                'span',
                null,
                ' average'
            )
        );
    }
});