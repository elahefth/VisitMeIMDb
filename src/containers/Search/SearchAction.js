// ------------------------------------ search fetch ------------------------------------
import {IMDbApi} from '../../api/IMDbApi';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const SEARCH_RECEIVE = 'SEARCH_RECEIVE';
export const searchReceive = (shows) => ({
  type: SEARCH_RECEIVE,
  shows,
});

export const SEARCH_ERROR = 'SEARCH_ERROR';
export const searchError = (error) => ({
  type: SEARCH_ERROR,
  error,
});

export const searchFetch = (search) => {
  return (dispatch) => {
    dispatch(searchRequest());

    IMDbApi.search(search)
      .then((response) => {
        console.log('vaaaaaaaaaaaaaa')
        console.log(response.data)
        dispatch(searchReceive(response.data.Search));
      })
      .catch((error) => {
        dispatch(searchError(error.response.data));
      });
  };
};
