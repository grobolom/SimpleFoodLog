var FoodEntry = React.createClass({
    render: function() {
        return (
            <li>
                <span>{ this.props.name }</span>
                <span
                    className = 'u-pull-right remove-food'
                    onClick = { this.props.handleClick }
                >
                    -
                </span>
                <span className = 'u-pull-right calories'>
                    { this.props.calories }
                </span>
            </li>
        );
    }
});
