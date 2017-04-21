import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Cards, Card } from '../../lib/index';

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				'Carte 1',
				'Carte 2',
				'Carte 3'
			]
		};
	}
	handleEnd() {

	}
	handleTop() {

	}
	handleBottom() {

	}
	forceUp() {
		this.refs.cards.forceUp();
	}
	forceBottom() {
		this.refs.cards.forceBottom();
	}
	render () {
		return (
			<div>
				<button onClick={this.forceUp.bind(this)}>forceUp</button>
				<Cards onEnd={this.handleEnd} className="master-root" ref="cards">
					{this.state.data.map((item, index) =>
						<Card
							key={index}
							onSwipeTop={this.handleTop}
							onSwipeBottom={this.handleBottom}>
							<h2>{item}</h2>
						</Card>
					)}
				</Cards>
				<button onClick={this.forceBottom.bind(this)}>forceBottom</button>
			</div>
		);
	}
}

export default Example;
