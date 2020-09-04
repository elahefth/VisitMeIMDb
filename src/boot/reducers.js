import {combineReducers} from 'redux';

import SettingReducer from '../containers/App/SettingReducer';
import SearchReducer from '../containers/Search/SearchReducer';
import ShowReducer from '../containers/Show/ShowReducer';

export default combineReducers({
  SettingReducer,
  SearchReducer,
  ShowReducer
});
