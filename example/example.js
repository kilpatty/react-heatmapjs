var React = require('react');
var ReactDOM = require('react-dom');
import ReactUserFocus from '../lib/ReactHeatmap.js';

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactHeatmap />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
