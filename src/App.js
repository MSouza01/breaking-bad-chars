// import logo from './logo.svg';
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';

import CharList from './components/CharList/CharList';
import CharDetails from './components/CharDetails/CharDetails';
import * as actions from './store/actions';
import './App.css';

const app = (props) => {
  useEffect(() => {
    props.onFetchCharacters();
    props.onFetchEpisodes();
  }, []);

  useEffect(() => {
    if (props.fetched) {
      props.onCreateAppearencesArray(props.characters, props.episodes);
    }
  }, [props.fetched, props.characters, props.episodes]);

  const list = (props) => <CharList />;
  const details = (props) => <CharDetails />;

  let routes = (
    <Switch>
      <Route path='/' exact component={list} />
      <Route path='/:idx' component={details} />
      <Redirect to='/' />
    </Switch>
  );

  return routes;
};

const mapStateToProps = (state) => {
  return {
    characters: state.char.characters,
    appearences: state.char.appearences,
    episodes: state.ep.episodes,
    fetched: state.ep.fetched && state.char.fetched ? true : false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharacters: () => dispatch(actions.fetchCharacters()),
    onFetchEpisodes: () => dispatch(actions.fetchEpisodes()),
    onCreateAppearencesArray: (characters, episodes) => dispatch(actions.createAppearencesArray(characters, episodes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(app);
