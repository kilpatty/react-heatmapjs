import React from 'react'
import ReactDOM from 'react-dom'

import Heatmap from 'heatmap.js'

export default class ReactHeatmap extends React.Component {
  constructor(props) {
		super(props);
    this.heatmap;
    this.element;
    this.collectMouseData = this.collectMouseData.bind(this);
    this.collectClickData = this.collectClickData.bind(this);
	}

  componentDidMount() {
    //Grab the DomNode of this current element.
    this.element = ReactDOM.findDOMNode(this);
    this.heatmap = Heatmap.create({
		  container: this.element,
		});

    //Set the listeners for the node.
    this.element.addEventListener('mousemove', this.collectMouseData);
    this.element.addEventListener('click', this.collectClickData);

    var data = {
      max: 10,
      min: 0,
    }
    this.heatmap.setData(data)
  }

  componentWillUnmount() {
    this.element.removeEventListener('mousemove', this.collectMouseData);
    this.element.removeEventListener('click', this.collectClickData);
  }

  collectMouseData(event) {
    event.preventDefault();
          var x = event.layerX;
          var y = event.layerY;
          if (event.touches) {
            x = event.touches[0].pageX;
            y = event.touches[0].pageY;
          }

          this.heatmap.addData({ x: x, y: y, value: 1 });
  }

  collectClickData(event) {
    event.preventDefault();
          var x = event.layerX;
          var y = event.layerY;
          this.heatmap.addData({ x: x, y: y, value: 2 });
  }

  computeData(data) {
		if(this.props.unit === 'percent') {
			let container = {};
			container.width = ReactDOM.findDOMNode(this).offsetWidth;
			container.height = ReactDOM.findDOMNode(this).offsetHeight;
			return data.map(function(values, index) {
				return {
					x : values.x/100 * container.width,
					y : values.y/100 * container.height
				}
			})
		} else {
			return data;
		}
	}

  render() {
    if (!this.props.children) {
      return <div className={this.props.className}></div>
    }
    return (
      <div className={this.props.className}>
      this.props.children;
      </div>
    )
	}
}

//Should add click value, and idle value

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
