// shortcuts and stuff

// sample data
var firstFood = { key: 0, entry: 'Bacon 120 cal', calories: '120' };
var secondFood = { key: 1, entry: 'Eggs 170 cal', calories: '170' };
var thirdFood = { key: 2, entry: 'Orange Juice 100 cal', calories: '100' };
var fourthFood = { key: 3, entry: 'Bacon Grease 500 cal', calories: '500' };
var foods = [firstFood, secondFood, thirdFood, fourthFood];

var initialState = {
    foods: foods
};
var store = createStore(sflReducer, initialState);

// functions TODO: extract theses?

var foodTotal = function(foods) {
    return foods.reduce(function(previous, current) {
        return previous + parseInt(current.calories);
    }, 0);
};

var calculateCalories = function(entry) {
    re = /(\d+)(?: )?(?:c|cal|kcal|calories)?$/;
    var stuff = entry.match(re);
    return stuff ? parseInt(stuff) : 0;
}

// render and start app

RCE = React.createElement;

var root = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        return RCE('div', {},
            RCE(FoodTotal, { total: foodTotal(store.getState().foods) }),
            RCE(FoodList, store.getState()),
            RCE(FoodInput, {})
        );
    }
});

var render = function() {
    ReactDOM.render(
        RCE(root),
        document.getElementById('react-app')
    );
};
   
store.subscribe(render);
render();

// TODO: make an actual root element, don't draw multiples

/* tests below */
fakeFoods = [{ calories: 100 }, { calories: 250 }, { calories: 150 }];
console.assert(foodTotal(fakeFoods) == 500 , 'failed calculating total calories');

fakeFoodEntry = 'bacon 250kcal';
console.assert(calculateCalories(fakeFoodEntry) == 250);
