import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

const fetchEpisodesStart = () => {
  return {
    type: actionTypes.FETCH_EPISODES_START,
  };
};

const fetchEpisodesSuccess = (episodes) => {
  return {
    type: actionTypes.FETCH_EPISODES_SUCCESS,
    episodes: episodes,
  };
};

const fetchEpisodesFail = (error) => {
  return {
    type: actionTypes.FETCH_EPISODES_FAIL,
    error: error,
  };
};

export const fetchEpisodes = () => {
  return (dispatch) => {
    dispatch(fetchEpisodesStart);
    axios
      .get('/episodes?series=Breaking+Bad')
      .then((response) => {
        dispatch(fetchEpisodesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchEpisodesFail(error));
      });
  };
};
