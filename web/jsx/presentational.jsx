var FoodSumList = React.createClass({
    render: function() {
        var sums = this.props.log.map(function(element, index) {
            return <DayFoodSum
                total = {element.total}
                date = {element.date}
                selected = {this.props.selectedDate === element.date}
                calorieGoal = {this.props.calorieGoal}
                key = {index}
            />
        }, this);
        return <ul>{ sums }</ul>;
    }
});

var FoodRemaining = React.createClass({
    propTypes: {
        remaining: React.PropTypes.number
    },

    remaining: function() {
        var remaining = this.props.calorieGoal - parseInt(this.props.total);
        return remaining > 0 ? remaining : 0;
    },

    getStatus: function() {
        var remaining = this.remaining();
        if (remaining > 200) {
            return 'good';
        } else if (remaining <= 0) {
            return 'bad';
        }
        return '';
    },

    render: function() {
        return (
            <h5>
                <strong className = {this.getStatus()}>{ this.remaining() }</strong>
                <span> remaining</span>
            </h5>
        );
    }
});

var FoodTotal = React.createClass({
    render: function() {
        return (
            <h5>
                <strong>{ this.props.total }</strong>
                <span> total calories</span>
            </h5>
        );
    }
});

var FoodEntry = React.createClass({
    render: function() {
        return (
            <li>
                <span>{ this.props.name }</span>
                <span
                    className = 'u-pull-right remove-food'
                    onClick = { this.props.handleClick }
                >
                    -
                </span>
                <span className = 'u-pull-right calories'>
                    { this.props.calories }
                </span>
            </li>
        );
    }
});

var FoodInput = React.createClass({
    render: function() {
        return (
            <form onSubmit={ this.props.handleSubmit }>
                <input
                    type='text'
                    className='u-full-width'
                    autoFocus='true'
                />
                <input
                    type='submit'
                    className='button-primary'
                    value='Add Food'
                />
            </form>
        );
    }
});

var TotalSelector = React.createClass({
    handleChange: function(event) {
        store.dispatch(setCalorieGoal(event.target.value));
    },
    render: function() {
        return (
            <div>
                <div>Daily Calorie Goal:</div>
                <input
                    type='text'
                    defaultValue={this.props.calorieGoal}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});

var FoodAverage = React.createClass({
    render: function() {
        return (
            <h5>
                <strong>{ this.props.average }</strong>
                <span> average</span>
            </h5>
        );
    }
});
