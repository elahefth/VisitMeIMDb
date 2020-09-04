// ------------------------------------ show fetch ------------------------------------
import { IMDbApi } from '../../api/IMDbApi';

export const SHOW_REQUEST = 'SHOW_REQUEST';
export const showRequest = () => ({
  type: SHOW_REQUEST,
});

export const SHOW_RECEIVE = 'SHOW_RECEIVE';
export const showReceive = (show) => ({
  type: SHOW_RECEIVE,
  show,
});

export const SHOW_ERROR = 'SHOW_ERROR';
export const showError = (error) => ({
  type: SHOW_ERROR,
  error,
});

export const showFetch = (id) => {
  return (dispatch) => {
    dispatch(showRequest());

    IMDbApi.show(id)
      .then((response) => {
        dispatch(showReceive(response.data));
      })
      .catch((error) => {
        dispatch(showError(error.response.data));
      });
  };
};
