import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  characters: null,
  appearences: null,
  loading: false,
  fetched: false,
  error: null,
};

const fetchCharactersStart = (state, action) => {
  return updateObject(state, { characters: null, loading: true, fetched: false, error: null });
};

const fetchCharactersSuccess = (state, action) => {
  return updateObject(state, { characters: action.characters, loading: false, fetched: true, error: null });
};

const fetchCharactersFail = (state, action) => {
  return updateObject(state, { loading: false, fetched: false, error: action.error });
};

const createAppearencesArray = (state, action) => {
  return updateObject(state, { appearences: action.appearences });
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
      return createAppearencesArray(state, action);
    default:
      return state;
  }
};

export default reducer;
