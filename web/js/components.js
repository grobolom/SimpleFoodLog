// stuff the components in here until we really want to extract them

RCE = React.createComponent;

var FoodInput = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();
        input = event.target.children[0];
        
        var newEntryName = input.value;
        var date = moment().format('MM/DD/YYYY');
        var newFood = {
            index: ++initialIndex,
            entry: newEntryName,
            calories: calculateCalories(newEntryName),
            date: date
        };
        store.dispatch(addFood(newFood));
        input.value = '';
    },
    render: function() {
        return RCE('form', { onSubmit: this.handleSubmit },
            RCE('input', {
                type: 'text',
                className: 'u-full-width',
                autoFocus: true
            }),
            RCE('input', {
                type: 'submit',
                className: 'button-primary',
                value: 'Add Food'
            })
        );
    }
});

var FoodEntry = React.createClass({
    handleClick: function() {
        store.dispatch(removeFood(this.props));
    },

    render: function() {
        return (
            RCE('li', {},
                RCE('span', {}, this.props.name ),
                RCE('span', {
                    className: 'u-pull-right remove-food',
                    onClick: this.handleClick
                },'-'),
                RCE('span', {
                    className: 'u-pull-right calories'
                }, this.props.calories )
            )
        );
    }
});

var FoodList = React.createClass({
    render: function() {
        return (
            RCE('ul', {}, this.props.foods.map(function(food) {
                var foo = Object.assign({}, food, { key: food.index });
                return RCE(FoodEntry, foo);
            }))
        );
    }
});

var FoodTotal = React.createClass({
    propTypes: {
        total: React.PropTypes.number
    },

    render: function() {
        return (
            RCE('h5', {},
                RCE('strong', {}, this.props.total),
                RCE('span', {}, ' total calories')
            )
        );
    }
});

var FoodAverage = React.createClass({
    render: function() {
        return (
            RCE('h5', {},
                RCE('strong', {}, this.props.average),
                RCE('span', {}, ' average calories')
            )
        );
    }
});

var FoodRemaining = React.createClass({
    propTypes: {
        remaining: React.PropTypes.number
    },

    remaining: function() {
        var remaining = 1600 - parseInt(this.props.total);
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
            RCE('h5', {},
                RCE(
                    'strong',
                    { className: this.getStatus() },
                    this.remaining()
                ),
                RCE('span', {}, ' remaining today')
            )
        );
    }
});

var DayFoodSum = React.createClass({
    render: function() {
        var total = this.props.total;
        var date = this.props.date;
        return (
            RCE('li', {},
                RCE('span', {}, date + ' ... '),
                RCE('strong', {}, total)
           )
        );
    }
});

var FoodSumList = React.createClass({
    render: function() {
        var log = this.props.log;
        return (
            RCE('ul', {}, log.map(function(element, index) {
                return RCE(DayFoodSum, {
                    total: element.total,
                    date: element.date,
                    key: index
                });
            }))
        );
    }
});

var CurrentDate = React.createClass({
    render: function() {
        return (
            RCE('div', {},
                RCE('h6', { className: 'strong' }, this.props.date)
            )
        );
    }
});
