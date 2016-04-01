var FoodSumList = React.createClass({
    render: function() {
        var sums = this.props.log.map(function(element, index) {
            return <DayFoodSum
                total = {element.total}
                date = {element.date}
                selected = {this.props.selectedDate === element.date}
                calorieGoal = {this.props.calorieGoal}
                key = {index}
            />
        }, this);
        return <ul>{ sums }</ul>;
    }
});
