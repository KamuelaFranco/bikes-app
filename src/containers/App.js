import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeClassFilter } from '../actions';

const App = ({ changeClassFilter, state }) => {
  if (state.isLoading) {
    return <div className="container"><Loading /></div>;
  }
  return (
    <div className="container">
      <CategoryMenu
        categories={['all',...new Set([].concat(...state.bikes.map(bike => bike.class)))]} category={state.classFilter} changeCategory={changeClassFilter}
      />
      <ItemList category={state.classFilter} items={state.bikes} />
    </div>
  );
};

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ changeClassFilter: bindActionCreators(changeClassFilter, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
