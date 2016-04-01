var FoodAverage = React.createClass({
    render: function() {
        return (
            <h5 className='six columns'>
                <strong>{ this.props.average }</strong>
                <span> average</span>
            </h5>
        );
    }
});
