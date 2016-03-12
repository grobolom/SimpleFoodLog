var app = {};
var firstFood = { key: 0, entry: 'Bacon 120 cal', calories: '120' };
var secondFood = { key: 1, entry: 'Eggs 170 cal', calories: '170' };
var thirdFood = { key: 2, entry: 'Orange Juice 100 cal', calories: '100' };
var foods = [firstFood, secondFood, thirdFood];

var FoodEntry = React.createClass({
    propTypes: {
        entry: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', { key: this.props.key }, this.props.entry)
        );
    }
});

var FoodList = React.createClass({
    render: function() {
        return (
            React.createElement('ul', {}, this.props.foods.map(function(food) {
                // this should pass down an actual 'key' prop
                return React.createElement(FoodEntry, food); 
            }))
        );
    }
});

var root = React.createElement(FoodList, { foods: foods });
ReactDOM.render(root, document.getElementById('food-list'));

/* tests below */
// console.assert(2 < 2, 'failed asserting 1 less than 2');
