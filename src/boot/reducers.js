import {combineReducers} from 'redux';

import SearchReducer from '../containers/Search/SearchReducer';
import ShowReducer from '../containers/Show/ShowReducer';

export default combineReducers({
  SearchReducer,
  ShowReducer,
});
