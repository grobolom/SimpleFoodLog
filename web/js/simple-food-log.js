var app = {};
var firstFood = { index: 0, entry: 'Bacon 120 cal', calories: '120' };
var secondFood = { index: 1, entry: 'Eggs 170 cal', calories: '170' };
var thirdFood = { index: 2, entry: 'Orange Juice 100 cal', calories: '100' };
var foods = [firstFood, secondFood, thirdFood];

// var FoodEntry = React.createElement('li', {}, this.props.food);
var FoodEntry = React.createClass({
    propTypes: {
        entry: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', { key: this.props.index }, this.props.entry)
        );
    }
});

var listFoods = foods.map(function(food) {
    return React.createElement(FoodEntry, food);
});

var FoodList = React.createClass({
    render: function() {
        return (
            React.createElement('ul', {}, this.props.foods)
        );
    }
});

var root = React.createElement(FoodList, { foods: listFoods });
ReactDOM.render(root, document.getElementById('food-list'));

/* tests below */
// console.assert(2 < 2, 'failed asserting 1 less than 2');
