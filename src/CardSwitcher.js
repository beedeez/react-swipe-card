import React, { createElement, Component } from 'react'

import SimpleCard from './SimpleCard'
import DraggableCard from './DraggableCard'


class Card extends Component {
	forceUp() {
		this.refs.card.forceUp();
	}

	forceBottom() {
		this.refs.card.forceBottom();
	}

	forceLeft() {
		this.refs.card.forceLeft();
	}

	forceRight() {
		this.refs.card.forceRight();
	}

	render() {
		const Card = this.props.active ? DraggableCard : SimpleCard;
		return <Card {...this.props} ref="card"/>;
	}
}

export default Card;
