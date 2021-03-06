import React from 'react';
import { withRouter } from 'react-router-dom';

import './BackButton.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A left arrow button with absolute position on the top left of the screen. Redirects the user to '/' then clicked.
 *
 * @param {*} props
 */
const backButton = (props) => {
  const onClick = (event) => {
    event.preventDefault();
    props.history.replace('/');
  };

  return (
    <div className='back-button' onClick={onClick}>
      <FontAwesomeIcon className='icon' icon={faArrowLeft} />
    </div>
  );
};

export default withRouter(backButton);
