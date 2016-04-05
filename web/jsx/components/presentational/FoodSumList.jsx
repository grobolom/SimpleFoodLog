import FoodSum from '../../components.js';

export const FoodSumList = React.createClass({
    render: function() {
        var sums = this.props.log.map(function(element, index) {
            return <FoodSum
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
