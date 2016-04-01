var FoodInput = React.createClass({
    displayName: 'FoodInput',

    render: function () {
        return React.createElement(
            'form',
            { onSubmit: this.props.handleSubmit },
            React.createElement('input', {
                type: 'text',
                className: 'u-full-width',
                autoFocus: 'true'
            }),
            React.createElement('input', {
                type: 'submit',
                className: 'button-primary',
                value: 'Add Food'
            })
        );
    }
});