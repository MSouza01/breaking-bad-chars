import React from 'react';
import PropTypes from 'prop-types';

import './Desktop.css';

import CharList from '../../components/CharList/CharList';
import CharDetails from '../../components/CharDetails/CharDetails';

const desktop = (props) => {
  return (
    <div className='desktop-grid'>
      <div className='desktop-list'>
        <CharList characters={props.characters} />
      </div>
      <div className='desktop-details'>
        <CharDetails characters={props.characters} appearances={props.appearances} episodes={props.episodes} />
      </div>
    </div>
  );
};

desktop.propTypes = {
  character: PropTypes.object,
  episodes: PropTypes.arrayOf(PropTypes.object),
  appearances: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
};

export default desktop;
