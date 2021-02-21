import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';
import { characterAppearences } from '../../shared/utility';

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

const createAppearencesArrayAction = (appearences) => {
  return {
    type: actionTypes.CREATE_APPEARENCES_ARRAY,
    appearences: appearences,
  };
};

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

export const createAppearencesArray = (characters, episodes) => {
  return (dispatch) => {
    const appearences = [];

    characters.forEach((char) => {
      appearences.push([...characterAppearences(char, episodes)]);
    });

    dispatch(createAppearencesArrayAction(appearences));
  };
};
