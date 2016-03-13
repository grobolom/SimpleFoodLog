// shortcuts and stuff
var RCE = React.createElement;

// sample data
var firstFood = { key: 0, entry: 'Bacon 120 cal', calories: '120' };
var secondFood = { key: 1, entry: 'Eggs 170 cal', calories: '170' };
var thirdFood = { key: 2, entry: 'Orange Juice 100 cal', calories: '100' };
var fourthFood = { key: 3, entry: 'Bacon Grease 500 cal', calories: '500' };
var foods = [firstFood, secondFood, thirdFood, fourthFood];

var app = {};
var createStore = function (reducer) {
    var state;
    var observers = [];

    var getState = function() {
        return state;
    };

    var dispatch = function(action) {
        state = reducer(state, action);
        // don't need to pass in state because the observers will call getState
        var listeners = observers;
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    };

    var subscribe = function(observer) {
        observers.push(observer);
    };

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
};

var reducer = function(state, action) {
    return app.foods;
};
var store = createStore(reducer);

var listener = function() {
    console.log('something');
}
store.subscribe(listener);
store.dispatch({ type: 'bogus_action' });

// functions TODO: extract theses?

var foodTotal = function(foods) {
    return foods.reduce(function(previous, current) {
        return previous + parseInt(current.calories);
    }, 0);
};


// components 
var FoodInput = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();
        var newEntryName = event.target.children[0].value;
        console.log(newEntryName);
        event.target.children[0].value = '';
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

var root = RCE('div', {},
    RCE(FoodTotal, { total: foodTotal(foods) }),
    RCE(FoodList, { foods: foods }),
    RCE(FoodInput, {})
);
   
ReactDOM.render(root, document.getElementById('react-app'));

// TODO: make an actual root element, don't draw multiples

/* tests below */
fakeFoods = [{ calories: 100 }, { calories: 250 }, { calories: 150 }];
console.assert(foodTotal(fakeFoods) == 500 , 'failed calculating total calories');
