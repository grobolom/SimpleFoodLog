// store setup

var initialState = {
    foods: []
};
var store = createStore(sflReducer, initialState);

// render and start app

RCE = React.createElement;

var root = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        return RCE('div', { className: 'container'},
                RCE('h1', {}, 'SimpleFoodLog (working)'),
                RCE('div', { className: 'row' },
                    RCE('div', { className: 'u-full-width u-cf' },
                        RCE('div', { className: 'four columns' },
                            RCE(FoodTotal, {
                                total: foodTotal(store.getState().foods)
                            })
                        )
                    ),
                    RCE('div', { className: 'four columns' },
                        RCE(FoodList, store.getState()),
                        RCE(FoodInput, {})
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
   
store.subscribe(render);
render();
