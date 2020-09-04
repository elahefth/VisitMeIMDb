import {SettingApi} from '../../api/SettingApi';

export const SET_SETTINGS = 'SET_SETTINGS';
export const setSetting = settings => ({
  type: SET_SETTINGS,
  settings,
});

export const SET_LANGUAGE = 'SET_LANGUAGE';
export const setLanguage = language => ({
  type: SET_LANGUAGE,
  language,
});

export const settingsFetch = () => {
  return dispatch => {
    SettingApi.list().then(response => {
      dispatch(setSetting(response.data));
    });
  };
};
