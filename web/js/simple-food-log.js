// render and start app

RCE = React.createElement;

var root = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        var log = store.getState().log;
        var today = moment().format('MM/DD/YYYY');
        // I'm sensing that log needs to be a class with this behavior extracted
        var todaysFoods = log[today] ? log[today] : [];
        var lastWeeksDates = makeDateWindow(
            moment().subtract(1, 'days').format('YYYYMMDD'),
            7
        );
        var todaysTotal = foodTotal(todaysFoods);
        var lastWeeksLog = [];
        var lastWeeksFoods = [];
        lastWeeksDates.forEach(function(element) {
            var e = log[element] ? log[element] : [];
            lastWeeksLog.push({ date: element, total: foodTotal(e) });
            lastWeeksFoods.concat(e);
        });

        var weekAverage = Math.round(lastWeeksFoods.reduce(function(previous, current) {
            return previous + current.calories;
        }, 0) / 7);

        return RCE('div', { className: 'container'},
            RCE('h1', {}, 'SimpleFoodLog'),
            RCE('div', { className: 'row' },
                RCE('div', { className: 'u-full-width u-cf' },
                    RCE('div', { className: 'four columns' },
                        RCE(FoodTotal, { total: todaysTotal })
                    ),
                    RCE('div', { className: 'four columns' },
                        RCE(FoodAverage, { average: weekAverage })
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
                        log: lastWeeksLog
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
var initialState = (oldState && oldState != "undefined") ?
    JSON.parse(oldState) :
    { log: { dates: [] } };

var store = createStore(sflReducer, initialState);
var today = moment().format('MM/DD/YYYY');
var todaysFoods = store.getState().log[today];
var initialIndex = maxIndex(todaysFoods ? todaysFoods : []);

var saveState = function(state) {
    localStorage.setItem('state', JSON.stringify(store.getState()));
};

   
store.subscribe(render);
store.subscribe(saveState);
render();
