import React from 'react';
import PropTypes from 'prop-types';

import './Desktop.css';

import CharList from '../../components/CharList/CharList';
import CharDetails from '../../components/CharDetails/CharDetails';

/**
 * A component for rendering the desktop version of the application with the Characters List on the left and the Character Details on the right
 *
 * @param {*} props
 */
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
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
  appearances: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default desktop;
