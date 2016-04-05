var rootElement = React.createClass({
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

ren();
