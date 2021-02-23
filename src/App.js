import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import * as actions from './store/actions';

import './App.css';

import Desktop from './containers/Desktop/Desktop';
import CharList from './components/CharList/CharList';
import CharDetails from './components/CharDetails/CharDetails';
import Spinner from './components/Spinner/Spinner';

const app = (props) => {
  // Runs right when the app starts and fetches characters and episodes
  useEffect(() => {
    props.onFetchCharacters();
    props.onFetchEpisodes();
  }, []);

  // Runs when the fetched, characters or episodes props are updated
  // If fetched is true (both characters and episodes were successfully fetched), than the appearances array is created
  useEffect(() => {
    if (props.fetched) {
      props.onCreateAppearancesArray(props.characters, props.episodes);
    }
  }, [props.fetched, props.characters, props.episodes]);

  const { characters, episodes, appearances } = props;

  let content = <Spinner />;

  if (props.ready) {
    if (isMobile) {
      const list = (props) => <CharList characters={characters} />;
      const details = (props) => <CharDetails characters={characters} appearances={appearances} episodes={episodes} isMobile />;
      content = (
        <Switch>
          <Route path='/' exact component={list} />
          <Route path='/:idx' component={details} />
          <Redirect to='/' />
        </Switch>
      );
    } else {
      const desktop = (props) => <Desktop characters={characters} appearances={appearances} episodes={episodes} />;
      content = (
        <Switch>
          <Route path='/' exact component={desktop} />
          <Route path='/:idx' component={desktop} />
          <Redirect to='/' />
        </Switch>
      );
    }
  }

  return (
    <div className='app'>
      <div className='header' />
      {content}
    </div>
  );
};

/**
 * Maps redux states to component props. State information can be found in the src/store/reducers files.
 *
 * @param {object} state
 */
const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    appearances: state.characters.appearances,
    episodes: state.episodes.episodes,
    fetched: state.episodes.fetched && state.characters.fetched ? true : false,
    ready: state.characters.ready,
  };
};

/**
 * Maps redux action creators to component props
 *
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharacters: () => dispatch(actions.fetchCharacters()),
    onFetchEpisodes: () => dispatch(actions.fetchEpisodes()),
    onCreateAppearancesArray: (characters, episodes) => dispatch(actions.createAppearancesArray(characters, episodes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(app);
