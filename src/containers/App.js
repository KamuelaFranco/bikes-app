const React = require('react');
const CategoryMenu = require('../components/CategoryMenu');
const GamesList = require('../components/GamesList');

const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { changeCategoryFilter } = require('../actions');

class App extends React.Component {
    render() {
        const { changeCategoryFilter } = this.props;
        const appState = this.props.state;
        return (
            <div>
              <div>
                <img src="http://stage.whitehatgaming.com/progtest/images/logo.png" />
              </div>
              <div>
                <CategoryMenu category={this.props.categoryFilter}
                              changeCategory={changeCategoryFilter} />
                <GamesList category={appState.categoryFilter}
                           games={appState.games}
                           jackpotAmounts={appState.jackpotAmounts}
                />
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
      changeCategoryFilter: bindActionCreators(changeCategoryFilter, dispatch)
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
