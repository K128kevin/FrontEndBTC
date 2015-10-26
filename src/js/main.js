var ChartLoader = React.createClass({
    /**
		Props:
		1. Symbol (String)
		2. Interval (int)
		3. StartTimestamp (int)
		4. Predictions (float[])
		5. ShowPrices (boolean) *This should be toggle-able
	*/
    render: function() {
        return (
            <div id="ChartContainer" className="chart">
                Hello, I am a ChartLoader!
            </div>
        );
    }
});

ReactDOM.render(
    <ChartLoader />,
    document.getElementById('content')
);