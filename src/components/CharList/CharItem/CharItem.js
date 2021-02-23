import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './CharItem.css';

/**
 * Characters List's item component for rendering the basic information of a character
 *
 * @param {*} props
 */
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
        <div className='char-name'>
          <p>{props.character.name}</p>
        </div>
        <div className='char-actor'>
          <p>{props.character.portrayed}</p>
        </div>
      </div>
    </div>
  );
};

charItem.propTypes = {
  character: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default withRouter(charItem);
