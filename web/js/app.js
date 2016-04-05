import FoodTotal from './components/presentational/FoodTotal.js';
import FoodAverage from './components/presentational/FoodAverage.js';
import FoodRemaining from './components/presentational/FoodRemaining.js';
import TotalSelector from './components/presentational/TotalSelector.js';
import FoodSumList from './components/presentational/FoodSumList.js';

import { FoodInputContainer, FoodList } from './components.js';

export const SimpleFoodLog = React.createClass({
    displayName: 'SimpleFoodLog',

    render: function () {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'h1',
                null,
                'SimpleFoodLog'
            ),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'six columns' },
                    React.createElement(FoodTotal, {
                        total: this.props.todaysTotal
                    }),
                    React.createElement(FoodInputContainer, null),
                    React.createElement(FoodList, {
                        foods: this.props.todaysFoods
                    }),
                    React.createElement('hr', null)
                ),
                React.createElement(
                    'div',
                    { className: 'six columns' },
                    React.createElement(FoodAverage, {
                        average: this.props.weekAverage
                    }),
                    React.createElement(FoodRemaining, {
                        total: this.props.todaysTotal,
                        calorieGoal: this.props.calorieGoal
                    }),
                    React.createElement(
                        'form',
                        null,
                        React.createElement(TotalSelector, {
                            calorieGoal: this.props.calorieGoal
                        }),
                        React.createElement('input', {
                            type: 'submit',
                            className: 'button-primary',
                            value: 'Daily Calorie Goal' })
                    ),
                    React.createElement(FoodSumList, {
                        log: this.props.lastWeeksLog,
                        selectedDate: this.props.today,
                        calorieGoal: this.props.calorieGoal
                    })
                )
            )
        );
    }
});