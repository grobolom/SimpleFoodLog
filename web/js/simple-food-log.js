// render and start app

RCE = React.createElement;

var root = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        var todaysFoods = store.getState().foods.filter(function(element) {
            return element.date == moment().format('MM/DD/YYYY');
        });
        var todaysTotal = foodTotal(todaysFoods);
        return RCE('div', { className: 'container'},
            RCE('h1', {}, 'SimpleFoodLog (working)'),
            RCE('div', { className: 'row' },
                RCE('div', { className: 'u-full-width u-cf' },
                    RCE('div', { className: 'four columns' },
                        RCE(FoodTotal, { total: todaysTotal })
                    ),
                    RCE('div', { className: 'four columns' },
                        RCE(FoodRemaining, { total: todaysTotal })
                    )
                ),
                RCE('div', { className: 'six columns' },
                    RCE(FoodList, { foods: todaysFoods }),
                    RCE(FoodInput, {})
                ),
                RCE('div', { className: 'four columns u-pull-right' },
                    RCE(FoodSumList, {
                        dates: makeDateWindow(moment().format('YYYYMMDD'), 7)
                    })
                )
            )
        );
    }
});

var render = function() {
    ReactDOM.render(
        RCE(root),
        document.getElementById('react-app')
    );
};

// store setup

var oldState = localStorage.getItem('state');
var initialState = oldState != "undefined" ? JSON.parse(oldState) : { foods: [] };

var store = createStore(sflReducer, initialState);
var initialIndex = maxIndex(store.getState().foods);

var saveState = function(state) {
    localStorage.setItem('state', JSON.stringify(store.getState()));
};

   
store.subscribe(render);
store.subscribe(saveState);
render();
