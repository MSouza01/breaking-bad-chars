import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

/**
 * Episodes redux state
 *
 * episodes: Array of fetched episodes from The Breaking Bad API
 * fetched: True if episodes array was successfully fetched
 * error: Not null if an error occurs during characters fetching
 */
const initialState = {
  episodes: null,
  fetched: false,
  error: null,
};

const fetchEpisodesStart = (state, action) => {
  return updateObject(state, { fetched: false, error: null });
};

const fetchEpisodesSuccess = (state, action) => {
  return updateObject(state, { episodes: action.episodes, fetched: true, error: null });
};

const fetchEpisodesFail = (state, action) => {
  return updateObject(state, { fetched: false, error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EPISODES_START:
      return fetchEpisodesStart(state, action);
    case actionTypes.FETCH_EPISODES_SUCCESS:
      return fetchEpisodesSuccess(state, action);
    case actionTypes.FETCH_EPISODES_FAIL:
      return fetchEpisodesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
