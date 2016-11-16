var React = require('react');
var ReactDOM = require('react-dom');
var HeatmapjsReact = require('react-heatmapjs');

var App = React.createClass({
	render () {
		return (
			<div>
				<HeatmapjsReact />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
