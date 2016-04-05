export const FoodInput = React.createClass({
    render: function() {
        return (
            <form onSubmit={ this.props.handleSubmit }>
                <input
                    type='text'
                    className='u-full-width'
                    autoFocus='true'
                />
                <input
                    type='submit'
                    className='button-primary'
                    value='Add Food'
                />
            </form>
        );
    }
});
