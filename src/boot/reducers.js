import {combineReducers} from 'redux';

import SettingReducer from '../containers/App/SettingReducer';
import SearchReducer from '../containers/Search/SearchReducer';

export default combineReducers({
  SettingReducer,
  SearchReducer
});
