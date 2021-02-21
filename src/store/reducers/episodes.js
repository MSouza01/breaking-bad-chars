import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  episodes: null,
  loading: false,
  fetched: false,
  error: null,
};

const fetchEpisodesStart = (state, action) => {
  return updateObject(state, { loading: true, fetched: false, error: null });
};

const fetchEpisodesSuccess = (state, action) => {
  return updateObject(state, { episodes: action.episodes, loading: false, fetched: true, error: null });
};

const fetchEpisodesFail = (state, action) => {
  return updateObject(state, { loading: false, fetched: false, error: action.error });
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
