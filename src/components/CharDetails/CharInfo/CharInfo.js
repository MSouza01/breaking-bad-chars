import React from 'react';
import PropTypes from 'prop-types';
import { fixDateString } from '../../../shared/utility';

import './CharInfo.css';

import CharInfoItem from './CharInfoItem/CharInfoItem';

const charInfo = (props) => {
  return (
    <div className='char-info-wrapper'>
      <h1>Basic Info</h1>
      <CharInfoItem label='Name' values={[props.character.name]} first />
      <CharInfoItem label='Portrayed' values={[props.character.portrayed]} />
      <CharInfoItem label='Birthday' values={[fixDateString(props.character.birthday)]} />
      <CharInfoItem label='Status' values={[props.character.status]} />
      <CharInfoItem label='Occupation' values={props.character.occupation} />
    </div>
  );
};

charInfo.propTypes = {
  character: PropTypes.object,
};

export default charInfo;
