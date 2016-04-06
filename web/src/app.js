import { createStore } from './store.js';
import { RootReducer } from './reducers/rootReducer.js';

var rootElement = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    render: function() {
        return (<p>bacon</p>);
    }
});

var ren = function() {
    ReactDOM.render(
        React.createElement(rootElement, {}),
        document.getElementById('react-app')
    );
};

var store = createStore(function() {}, []);
store.subscribe(ren);
ren();
