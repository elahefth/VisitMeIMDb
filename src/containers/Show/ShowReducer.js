import {SHOW_ERROR, SHOW_RECEIVE, SHOW_REQUEST} from './ShowAction';

const initialState = {
  show: {},
};

const ShowReducer = (state = initialState, action = {}) => {
  const {type, show, error} = action;

  switch (type) {
    // ------------------------------------ show fetch ------------------------------------
    case SHOW_REQUEST:
      return {
        ...state,
        isShowFetching: true,
      };
    case SHOW_RECEIVE:
      return {
        ...state,
        isShowFetching: false,
        show,
      };
    case SHOW_ERROR:
      return {
        ...state,
        isShowFetching: false,
        error,
      };

    default:
      return state;
  }
};

export default ShowReducer;
