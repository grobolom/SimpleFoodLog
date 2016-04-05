export const TotalSelector = React.createClass({
    displayName: 'TotalSelector',

    handleChange: function (event) {
        store.dispatch(setCalorieGoal(event.target.value));
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement('input', {
                type: 'text',
                className: 'u-full-width',
                defaultValue: this.props.calorieGoal,
                onChange: this.handleChange
            })
        );
    }
});