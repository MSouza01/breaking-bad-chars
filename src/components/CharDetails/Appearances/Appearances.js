import React from 'react';
import PropTypes from 'prop-types';

import './Appearances.css';

import AppearanceItem from './AppearanceItem/AppearanceItem';

const appearancesList = (props) => {
  return (
    <div className='char-appearances-wrapper'>
      <h1>Appearances</h1>
      {props.appearances.map((appearance) => (
        <AppearanceItem key={appearance} episode={props.episodes[appearance]} />
      ))}
    </div>
  );
};

appearancesList.propTypes = {
  appearances: PropTypes.arrayOf(PropTypes.number),
  episodes: PropTypes.arrayOf(PropTypes.object),
};

export default appearancesList;
