// stuff the components in here until we really want to extract them

RCE = React.createComponent;

var FoodInputContainer = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();
        input = event.target.children[0];
        store.dispatch(addFood({ entry: input.value }));
        input.value = '';
        input.focus();
    },
    render: function() {
        return RCE(FoodInput, { handleSubmit: this.handleSubmit });
    },
});


var RemovableFoodEntry = React.createClass({
    handleClick: function() {
        store.dispatch(removeFood(this.props));
    },
    render: function() {
        return RCE(FoodEntry, {
            name: this.props.name,
            calories: this.props.calories,
            handleClick: this.handleClick
        });
    }
});


var FoodList = React.createClass({
    render: function() {
        return (
            RCE('ul', {}, this.props.foods.map(function(food) {
                var foo = Object.assign({}, food, { key: food.index });
                return RCE(RemovableFoodEntry, foo);
            }))
        );
    }
});

var FoodSum = React.createClass({
    handleClick : function() {
        store.dispatch(selectDate(this.props.date));
    },

    goodOrBad: function() {
        var remaining = this.props.calorieGoal - parseInt(this.props.total);
        if (remaining > 200) {
            return 'good';
        } else if (remaining <= 0) {
            return 'bad';
        }
        return '';
    },

    render: function() {
        return (
            RCE(DayFoodSum, {
                goodOrBad: this.goodOrBad,
                handleClick: this.handleClick,
                total: this.props.total,
                selected: this.props.selected,
                date: this.props.date,
            })
        );
    }
});
