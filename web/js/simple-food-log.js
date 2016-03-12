var app = {};
firstFood = { index: 0, food: 'Bacon 120 cal', calories: '120' };

var FoodEntry = React.createElement('li', {}, firstFood.food);
var root = React.createElement('ul', {}, FoodEntry)
ReactDOM.render(root, document.getElementById('food-list'));

/* tests below */
// console.assert(2 < 2, 'failed asserting 1 less than 2');
