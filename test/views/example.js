import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		var preview = marked(this.state.code);
		return (
			<div className="example">
				<div className="hint">React Swipe Cards</div>
			</div>
		);
	}
}

export default Example;
