const React = require('react');
const { Component } = require('react');

class Game extends Component {
  handleClick(e) {
    window.alert(this.props.link);
  }
	render () {
		return (
			<div className="game">
        <span className="game-name">{this.props.name}</span>
        <img src={'http:' + this.props.image} />
        <button className="play-button" onClick={this.handleClick.bind(this)}>Play</button>
			</div>
		);
	}
}

module.exports = Game;