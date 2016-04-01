var TotalSelector = React.createClass({
    handleChange: function(event) {
        store.dispatch(setCalorieGoal(event.target.value));
    },
    render: function() {
        return (
            <div>
                <input
                    type='text'
                    className='u-full-width'
                    defaultValue={this.props.calorieGoal}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});
