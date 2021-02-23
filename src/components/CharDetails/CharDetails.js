import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './CharDetails.css';

import BackButton from '../BackButton/BackButton';
import Spinner from '../Spinner/Spinner';
import CharInfo from './CharInfo/CharInfo';
import Appearances from './Appearances/Appearances';

const charDetails = (props) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (props.match.params.idx) {
      setCharacter({ ...props.characters[props.match.params.idx] });
    } else {
      setCharacter(null);
    }
    setLoading(false);
  }, [props.characters, props.match.params]);

  const charIndex = props.match.params.idx;

  let content = <Spinner />;

  if (!loading) {
    if (character) {
      content = (
        <Fragment>
          <div className='char-image-wrapper'>
            <img src={character.img} alt={character.name + ' image'} />
          </div>
          <CharInfo character={character} />
          <Appearances appearances={props.appearances[charIndex]} episodes={props.episodes} />
        </Fragment>
      );
    } else {
      content = (
        <div className='no-char'>
          <p>Select a character to see details</p>
        </div>
      );
    }
  }

  return (
    <div className='char-details-page'>
      {props.isMobile && <BackButton />}
      {content}
    </div>
  );
};

charDetails.propTypes = {
  character: PropTypes.object,
  episodes: PropTypes.arrayOf(PropTypes.object),
  appearances: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  isMobile: PropTypes.bool,
};

export default withRouter(charDetails);
