/*
import FoodTotal from './components/presentational/FoodTotal'
import FoodInputContainer from './components/presentational/FoodInputContainer'
import FoodList from './components/presentational/FoodList'
import FoodAverage from './components/presentational/FoodAverage'
import FoodRemaining from './components/presentational/FoodRemaining'
import TotalSelector from './components/presentational/TotalSelector'
import FoodSumList from './components/presentational/FoodSumList'
*/

var SimpleFoodLog = React.createClass({
    render: function() {
        return (
            <div className='container'>
                <h1>SimpleFoodLog</h1>
                <div className='row'>
                    <div className='six columns'>
                        <FoodTotal
                            total={ this.props.todaysTotal }
                        />
                        <FoodInputContainer />
                        <FoodList
                            foods={ this.props.todaysFoods }
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
                        />
                    </div>
                </div>
            </div>
        );
    }
});
