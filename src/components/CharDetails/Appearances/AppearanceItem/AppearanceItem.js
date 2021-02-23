import React from 'react';
import PropTypes from 'prop-types';
import { fixDateString } from '../../../../shared/utility';

import './AppearanceItem.css';

import { formatEpisodeString } from '../../../../shared/utility';

const appearanceItem = (props) => {
  return (
    <div className='ep-wrapper'>
      <div className='ep-code'>
        <p>{formatEpisodeString(props.episode.season, props.episode.episode)}</p>
      </div>
      <div className='ep-basic-info'>
        <span className='ep-title'>{props.episode.title}</span>
        <span className='ep-air-date'>{'Air date: ' + fixDateString(props.episode.air_date)}</span>
      </div>
    </div>
  );
};

appearanceItem.propTypes = {
  episode: PropTypes.object,
};

export default appearanceItem;
