export const FoodRemaining = React.createClass({
    propTypes: {
        remaining: React.PropTypes.number
    },

    remaining: function() {
        var remaining = this.props.calorieGoal - parseInt(this.props.total);
        return remaining > 0 ? remaining : 0;
    },

    getStatus: function() {
        var remaining = this.remaining();
        if (remaining > 200) {
            return 'good';
        } else if (remaining <= 0) {
            return 'bad';
        }
        return '';
    },

    render: function() {
        return (
            <h5 className='six columns'>
                <strong className = {this.getStatus()}>{ this.remaining() }</strong>
                <span> remaining</span>
            </h5>
        );
    }
});
