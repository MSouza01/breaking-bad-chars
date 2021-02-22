import React from 'react';
import PropTypes from 'prop-types';
import CharItem from './CharItem/CharItem';

// import './CharList.css';

const charList = (props) => {
  return props.characters.map((char, index) => <CharItem key={char.name} character={char} index={index} />);
};

charList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default charList;
