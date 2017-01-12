const React = require('react');
const { Component } = require('react');
const Game = require('./Game');

class GamesList extends Component {
	getCurrentFilteredGames() {
    if (!this.props.category) {
      return false;
    } else if (this.props.category.toLowerCase() === 'all') {
      return this.props.games.map(game => {
        return (
          <Game
            name={game.name}
            image={game.image}
            link={game.link}
            jackpotId={game.jackpotId}
            key={Math.random()*100}
          />
        );
      });
    }

    return this.props.games
      .filter(game => game.category.toLowerCase() === this.props.category.toLowerCase())
      .map(game => {
      return (
        <Game
          name={game.name}
          image={game.image}
          link={game.link}
          jackpotId={game.jackpotId}
          key={Math.random()*100}
        />
      );
    });
  }

	render () {
    let formattedCategory = this.props.category
      && this.props.category.slice(0,1).toUpperCase() + this.props.category.slice(1).toLowerCase();
		return (
			<div className="games-list">
        <h1>{formattedCategory}</h1>
        {this.getCurrentFilteredGames()}
			</div>
		);
	}
}

module.exports = GamesList;