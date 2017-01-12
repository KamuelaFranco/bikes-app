const React = require('react');
const { Component } = require('react');

class Jackpot extends Component {
  handleClick(e) {
    window.alert(this.props.link);
  }

	render () {
		return (
			<div className="jackpot-game">
        <h3>Jackpot</h3>
        {this.props.name}
        <img src={'http:' + this.props.image} />
        Jackpot: {this.props.amount}
        <button className="play-button" onClick={this.handleClick.bind(this)}>Play</button>
			</div>
		);
	}
}

module.exports = Jackpot;