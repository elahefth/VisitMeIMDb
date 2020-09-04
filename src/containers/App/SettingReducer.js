import {SET_LANGUAGE, SET_SETTINGS} from './SettingAction';

const initialState = {
  about_us: '',
  support_phone: '09196258221',
  default_language: 'fa',
  language: 'fa',
};

const SettingReducer = (state = initialState, action = {}) => {
  const {settings, language} = action;

  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        ...settings,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language,
      };
    default:
      return state;
  }
};

export default SettingReducer;
