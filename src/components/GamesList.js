const React = require('react');
const { Component } = require('react');
const Game = require('./Game');
const Jackpot = require('./Jackpot');

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

  getJackpots() {
    if (!this.props.jackpotAmounts) {
      return false;
    }
    let jackpotNames = this.props.jackpotAmounts.map(jackpot => jackpot.driver);
    let filteredGames = [];
    jackpotNames.forEach(name => {
      filteredGames.push(this.props.games.filter(game => game.jackpotId === name));
    });
    return filteredGames.map(game => {
      return (
        <Jackpot
          name={game[0].name}
          image={game[0].image}
          amount={this.props.jackpotAmounts.filter(jackpot => jackpot.driver === game[0].jackpotId)}
          key={Math.random*100}
        />
      );
    })
  }

	render () {
    let formattedCategory = this.props.category
      && this.props.category.slice(0,1).toUpperCase() + this.props.category.slice(1).toLowerCase();
		return (
			<div className="games-list">
        <h1>{formattedCategory}</h1>
        {this.getJackpots()}
        {this.getCurrentFilteredGames()}
			</div>
		);
	}
}

module.exports = GamesList;