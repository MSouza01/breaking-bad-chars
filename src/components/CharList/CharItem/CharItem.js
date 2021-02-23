import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './CharItem.css';

const charItem = (props) => {
  const onClick = (event) => {
    event.preventDefault();
    props.history.replace('/' + props.index);
  };

  return (
    <div className='char-wrapper' onClick={onClick}>
      <div className='char-image'>
        <img src={props.character.img} alt={props.character.name + ' image'} />
      </div>
      <div className='char-basic-info'>
        <span className='char-name'>{props.character.name}</span>
        <span className='char-actor'>{props.character.portrayed}</span>
      </div>
    </div>
  );
};

charItem.propTypes = {
  character: PropTypes.object,
  index: PropTypes.number,
};

export default withRouter(charItem);
