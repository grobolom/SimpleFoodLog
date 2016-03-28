var SimpleFoodLog = React.createClass({
    render: function() {
        return (
            <div className='container'>
                <h1>SimpleFoodLog</h1>
                <div className='row'>
                    <div className='u-full-width u-cf'>
                        <div className='four columns'>
                            <FoodTotal
                                total={ this.props.todaysTotal }
                            />
                        </div>
                        <div className='four columns'>
                            <FoodAverage
                                average={ this.props.weekAverage }
                            />
                        </div>
                        <div className='four columns'>
                            <FoodRemaining
                                total={ this.props.todaysTotal }
                                calorieGoal= { this.props.calorieGoal }
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='u-full-width u-cf'>
                        <div className='twelve columns'>
                            <TotalSelector
                                calorieGoal={ this.props.calorieGoal }
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='six columns'>
                        <FoodList
                            foods={ this.props.todaysFoods }
                        />
                        <FoodInputContainer />
                    </div>
                    <div className='four columns u-pull-right'>
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
