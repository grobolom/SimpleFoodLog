var FoodSumList = React.createClass({
    displayName: 'FoodSumList',

    render: function () {
        var sums = this.props.log.map(function (element, index) {
            return React.createElement(DayFoodSum, {
                total: element.total,
                date: element.date,
                selected: this.props.selectedDate === element.date,
                calorieGoal: this.props.calorieGoal,
                key: index
            });
        }, this);
        return React.createElement(
            'ul',
            null,
            sums
        );
    }
});

var FoodRemaining = React.createClass({
    displayName: 'FoodRemaining',

    propTypes: {
        remaining: React.PropTypes.number
    },

    remaining: function () {
        var remaining = this.props.calorieGoal - parseInt(this.props.total);
        return remaining > 0 ? remaining : 0;
    },

    getStatus: function () {
        var remaining = this.remaining();
        if (remaining > 200) {
            return 'good';
        } else if (remaining <= 0) {
            return 'bad';
        }
        return '';
    },

    render: function () {
        return React.createElement(
            'h5',
            null,
            React.createElement(
                'strong',
                { className: this.getStatus() },
                this.remaining()
            ),
            React.createElement(
                'span',
                null,
                ' remaining'
            )
        );
    }
});

var FoodTotal = React.createClass({
    displayName: 'FoodTotal',

    render: function () {
        return React.createElement(
            'h5',
            null,
            React.createElement(
                'strong',
                null,
                this.props.total
            ),
            React.createElement(
                'span',
                null,
                ' total calories'
            )
        );
    }
});

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

var FoodInput = React.createClass({
    displayName: 'FoodInput',

    render: function () {
        return React.createElement(
            'form',
            { onSubmit: this.props.handleSubmit },
            React.createElement('input', {
                type: 'text',
                className: 'u-full-width',
                autoFocus: 'true'
            }),
            React.createElement('input', {
                type: 'submit',
                className: 'button-primary',
                value: 'Add Food'
            })
        );
    }
});

var TotalSelector = React.createClass({
    displayName: 'TotalSelector',

    handleChange: function (event) {
        store.dispatch(setCalorieGoal(event.target.value));
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h6',
                null,
                'Daily Calorie Goal:'
            ),
            React.createElement('input', {
                type: 'text',
                defaultValue: this.props.calorieGoal,
                onChange: this.handleChange
            })
        );
    }
});

var FoodAverage = React.createClass({
    displayName: 'FoodAverage',

    render: function () {
        return React.createElement(
            'h5',
            null,
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