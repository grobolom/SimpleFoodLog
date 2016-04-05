export const FoodTotal = React.createClass({
    displayName: "FoodTotal",

    render: function () {
        return React.createElement(
            "h5",
            null,
            React.createElement(
                "strong",
                null,
                this.props.total
            ),
            React.createElement(
                "span",
                null,
                " total"
            )
        );
    }
});