// import logo from './logo.svg';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
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
