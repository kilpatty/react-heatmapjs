import React from 'react'
import ReactDOM from 'react-dom'

import Heatmap from 'heatmap.js'

export default class ReactHeatmap extends React.Component {
  constructor(props) {
		super(props);
    this.heatmap;
	}

  componentDidMount() {
    this.heatmap = Heatmap.create({
		  container: ReactDOM.findDOMNode(this)
		});
  }

  render() {
    return <div {...props}></div>
  }

}
