// stuff the components in here until we really want to extract them

RCE = React.createComponent;

initialIndex = 4;
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
            RCE('input', { type: 'text', className: 'u-full-width' })
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

