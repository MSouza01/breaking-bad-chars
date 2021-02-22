import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

/**
 * Characters redux state
 *
 * characters: Array of fetched characters from The Breaking Bad API
 * appearances: Array of appearances for each character
 * fetched: True if characters array was successfully fetched
 * error: Not null if an error occurs during characters fetching
 * ready: True if all data is successfully fetched and appearances array is created
 */
const initialState = {
  characters: null,
  fetched: false,
  error: null,
  appearances: null,
  ready: false,
};

const fetchCharactersStart = (state, action) => {
  return updateObject(state, { characters: null, fetched: false, error: null, ready: false });
};

const fetchCharactersSuccess = (state, action) => {
  return updateObject(state, { characters: action.characters, fetched: true, error: null });
};

const fetchCharactersFail = (state, action) => {
  return updateObject(state, { fetched: false, error: action.error });
};

const createAppearancesArray = (state, action) => {
  return updateObject(state, { appearances: action.appearances, ready: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_START:
      return fetchCharactersStart(state, action);
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return fetchCharactersSuccess(state, action);
    case actionTypes.FETCH_CHARACTERS_FAIL:
      return fetchCharactersFail(state, action);
    case actionTypes.CREATE_APPEARENCES_ARRAY:
      return createAppearancesArray(state, action);
    default:
      return state;
  }
};

export default reducer;
