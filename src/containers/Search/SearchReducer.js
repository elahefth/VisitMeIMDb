import {SEARCH_ERROR, SEARCH_RECEIVE, SEARCH_REQUEST} from './SearchAction';

const initialState = {
	search:''
};

const SearchReducer = (state = initialState, action = {}) => {
  const {type, search, error} = action;

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
        search,
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
