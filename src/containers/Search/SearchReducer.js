import {SEARCH_ERROR, SEARCH_RECEIVE, SEARCH_REQUEST} from './SearchAction';

const initialState = {
	search:''
};

const SearchReducer = (state = initialState, action = {}) => {
  const {type, shows, error} = action;

  switch (type) {
    // ------------------------------------ search fetch ------------------------------------
    case SEARCH_REQUEST:
      return {
        ...state,
        isSearchFetching: true,
      };
    case SEARCH_RECEIVE:
      return {
        ...state,
        isSearchFetching: false,
        shows,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isSearchFetching: false,
        error,
      };

    default:
      return state;
  }
};

export default SearchReducer;
