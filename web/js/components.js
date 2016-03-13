// stuff the components in here until we really want to extract them

RCE = React.createComponent;

var FoodInput = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();
        input = event.target.children[0];
        
        var newEntryName = input.value;
        var newFood = {
            key: ++initialIndex,
            entry: newEntryName,
            calories: calculateCalories(newEntryName)
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
    propTypes: {
        entry: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            RCE('li', { key: this.props.key }, this.props.entry)
        );
    }
});

var FoodList = React.createClass({
    render: function() {
        return (
            RCE('ul', {}, this.props.foods.map(function(food) {
                // this should pass down an actual 'key' prop
                return RCE(FoodEntry, food); 
            }))
        );
    }
});

var FoodTotal = React.createClass({
    propTypes: {
        total: React.PropTypes.number
    },

    render: function() {
        // var value = '<strong>' + this.props.total + '</strong> total calories';
        return (
            RCE('h5', {},
                RCE('strong', {}, this.props.total),
                RCE('span', {}, ' total calories')
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
