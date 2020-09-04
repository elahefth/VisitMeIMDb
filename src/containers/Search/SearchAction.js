// ------------------------------------ search fetch ------------------------------------
import {IMDbApi} from '../../api/IMDbApi';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const SEARCH_RECEIVE = 'SEARCH_RECEIVE';
export const searchReceive = (search) => ({
  type: SEARCH_RECEIVE,
  search,
});

export const SEARCH_ERROR = 'SEARCH_ERROR';
export const searchError = (error) => ({
  type: SEARCH_ERROR,
  error,
});

export const searchFetch = () => {
  return (dispatch) => {
    dispatch(searchRequest());

    IMDbApi.search()
      .then((response) => {
        dispatch(searchReceive(response.data.data));
      })
      .catch((error) => {
        dispatch(searchError(error.response.data));
      });
  };
};
