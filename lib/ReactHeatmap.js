import React from 'react'
import ReactDOM from 'react-dom'

import Heatmap from 'heatmap.js'

export default class ReactHeatmap extends React.Component {
  constructor(props) {
		super(props);
    this.heatmap;
    console.log(props);
	}

  componentDidMount() {
    this.heatmap = Heatmap.create({
		  container: ReactDOM.findDOMNode(this)
		});
  }

  render() {
    if (!this.props.children) {
      return <div {...this.props.otherProps}/>
    }
    return (
      <div {...this.props.otherProps}>
      this.props.children;
      </div>
    )
	}
}

ReactHeatmap.propTypes = {
    children: React.PropTypes.node,
    backgroundColor: React.PropTypes.string,
    gradient: React.PropTypes.object,
    radius: React.PropTypes.number,
    opacity: React.PropTypes.number,
    maxOpacity: React.PropTypes.number,
    minOpacity: React.PropTypes.number,
    onExtremaChange: React.PropTypes.func,
    blur: React.PropTypes.number,
    xField: React.PropTypes.string,
    yField: React.PropTypes.string,
    valueField: React.PropTypes.string,
}
