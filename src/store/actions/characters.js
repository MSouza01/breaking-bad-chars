import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';
import { characterAppearances } from '../../shared/utility';

const fetchCharactersStart = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_START,
  };
};

const fetchCharactersSuccess = (characters) => {
  return {
    type: actionTypes.FETCH_CHARACTERS_SUCCESS,
    characters: characters,
  };
};

const fetchCharactersFail = (error) => {
  return {
    type: actionTypes.FETCH_CHARACTERS_FAIL,
    error: error,
  };
};

const appearancesArrayDispatch = (appearances) => {
  return {
    type: actionTypes.CREATE_APPEARENCES_ARRAY,
    appearances: appearances,
  };
};

/**
 * Fetches Breaking Bad characters from https://www.breakingbadapi.com/api/
 */
export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersStart);
    axios
      .get('/characters?category=Breaking+Bad')
      .then((response) => {
        dispatch(fetchCharactersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCharactersFail(error));
      });
  };
};

/**
 * Creates an array of arrays of appearances. Each row corresponds to a character with the same index in the characters array.
 *
 * @param {Array} characters List of characters fetched from The Breaking Bad API
 * @param {Array} episodes List of episodes fetched from The Breking Bad API
 */
export const createAppearancesArray = (characters, episodes) => {
  return (dispatch) => {
    const appearances = [];

    characters.forEach((char) => {
      appearances.push([...characterAppearances(char, episodes)]);
    });

    dispatch(appearancesArrayDispatch(appearances));
  };
};
