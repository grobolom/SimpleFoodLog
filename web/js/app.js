var SimpleFoodLog = React.createClass({
    displayName: 'SimpleFoodLog',

    render: function () {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'h1',
                null,
                'SimpleFoodLog'
            ),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'u-full-width u-cf' },
                    React.createElement(
                        'div',
                        { className: 'four columns' },
                        React.createElement(FoodTotal, {
                            total: this.props.todaysTotal
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'four columns' },
                        React.createElement(FoodAverage, {
                            average: this.props.weekAverage
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'four columns' },
                        React.createElement(FoodRemaining, {
                            total: this.props.todaysTotal,
                            calorieGoal: this.props.calorieGoal
                        })
                    )
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'u-full-width u-cf' },
                    React.createElement(
                        'div',
                        { className: 'twelve columns' },
                        React.createElement(TotalSelector, {
                            calorieGoal: this.props.calorieGoal
                        })
                    )
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'six columns' },
                    React.createElement(FoodList, {
                        foods: this.props.todaysFoods
                    }),
                    React.createElement(FoodInputContainer, null)
                ),
                React.createElement(
                    'div',
                    { className: 'four columns u-pull-right' },
                    React.createElement(FoodSumList, {
                        log: this.props.lastWeeksLog,
                        selectedDate: this.props.today,
                        calorieGoal: this.props.calorieGoal
                    })
                )
            )
        );
    }
});