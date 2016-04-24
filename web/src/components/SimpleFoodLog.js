import React from 'react';

import { FoodTotal } from './FoodTotal.js';
import { FoodInputContainer, FoodList, FoodSum } from '../components.js';
import { FoodAverage } from './FoodAverage.js';
import { FoodRemaining } from './FoodRemaining.js';
import { TotalSelector } from './TotalSelector.js';
import { FoodSumList } from './FoodSumList.js';

export const SimpleFoodLog = React.createClass({
    render: function() {
        return (
            <div className='container'>
                <h1>SimpleFoodLog</h1>
                <div className='row'>
                    <div className='six columns'>
                        <FoodTotal
                            total={ this.props.todaysTotal }
                        />
                        <FoodInputContainer
                            store = { this.props.store }
                        />
                        <FoodList
                            foods={ this.props.todaysFoods }
                            store = { this.props.store }
                        />
                        <hr />
                    </div>
                    <div className='six columns'>
                        <FoodAverage
                            average={ this.props.weekAverage }
                        />
                        <FoodRemaining
                            total={ this.props.todaysTotal }
                            calorieGoal= { this.props.calorieGoal }
                        />
                        <form>
                            <TotalSelector
                                calorieGoal={ this.props.calorieGoal }
                                store = { this.props.store }
                            />
                            <input
                                type='submit'
                                className='button-primary'
                                value='Daily Calorie Goal' />
                        </form>
                        <FoodSumList
                            log={ this.props.lastWeeksLog }
                            selectedDate={ this.props.today }
                            calorieGoal={ this.props.calorieGoal }
                            store = { this.props.store }
                        />
                    </div>
                </div>
            </div>
        );
    }
});
