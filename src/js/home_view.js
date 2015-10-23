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
		var chartObject = '<div class="chart-container">';
		var title = '<div class="chartTitle">Prediction Chart: ' + this.props.Symbol + '</div>';
		// render chart in here, using whatever library we end up using
		chartObject = chartObject + '</div>';
		return (chartObject);
	},
	/**
		@Param symbol : String of stock/commodity symbol
		@Param interval : int of interval for API request
		@Param startTS : start param
		@Param endTS : end param
	*/
	getData: function(symbol, interval, startTS, endTS) {
		
	}
});

var ChartMetaData = React.createClass({
	render: function() {
		var metadata = '
			<div class="chart-meta">
				<div class="metadata">

				</div>
				<div class="metadata">

				</div>
				<div class="metadata">

				</div>
				<div class="metadata">

				</div>
			</div>
		'
	}
});