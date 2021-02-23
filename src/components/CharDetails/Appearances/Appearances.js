import React from 'react';
import PropTypes from 'prop-types';

import './Appearances.css';

import AppearanceItem from './AppearanceItem/AppearanceItem';

/**
 * Renders the list of appearance of the selected character. This component was created so the CharDetails's code would be cleaner.
 *
 * @param {*} props
 */
const appearancesList = (props) => {
  let content = (
    <div className='no-appearances'>
      <p>Character not listed on any episode</p>
    </div>
  );

  if (props.appearances.length > 0) {
    content = props.appearances.map((appearance) => <AppearanceItem key={appearance} episode={props.episodes[appearance]} />);
  }

  return (
    <div className='char-appearances-wrapper'>
      <h1>Appearances</h1>
      {content}
    </div>
  );
};

appearancesList.propTypes = {
  appearances: PropTypes.arrayOf(PropTypes.number).isRequired,
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default appearancesList;
