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