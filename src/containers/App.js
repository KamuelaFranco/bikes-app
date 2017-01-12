import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import GamesList from '../components/GamesList';
import Loading from '../components/Loading';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeClassFilter } from '../actions';

const App = ({ changeClassFilter, state }) => {
  if (state.isFetching) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <CategoryMenu
          categories={['all',...new Set([].concat(...state.bikes.map(bike => bike.class)))]} category={state.classFilter} changeCategory={changeClassFilter}
        />
        <GamesList category={state.classFilter} games={state.bikes} jackpotAmounts={[]} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ changeClassFilter: bindActionCreators(changeClassFilter, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
