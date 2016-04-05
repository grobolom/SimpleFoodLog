import FoodSum from '../../components.js';

export const FoodSumList = React.createClass({
    displayName: 'FoodSumList',

    render: function () {
        var sums = this.props.log.map(function (element, index) {
            return React.createElement(FoodSum, {
                total: element.total,
                date: element.date,
                selected: this.props.selectedDate === element.date,
                calorieGoal: this.props.calorieGoal,
                key: index
            });
        }, this);
        return React.createElement(
            'ul',
            null,
            sums
        );
    }
});