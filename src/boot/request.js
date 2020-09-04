import axios from 'axios';
import axiosRetry from 'axios-retry';

import {apiUrl, env, domain} from '../../app.json';
import {store} from './redux';
import {Alert} from 'react-native';

class API {
  constructor() {
    axios.defaults.headers.common.Accept = 'application/json';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.timeout = 4000;

    axiosRetry(axios, {retries: 3});
  }

  get(route, params = null, token = store.getState().UserReducer.api_token) {
    if (params) {
      let body = [];

      Object.keys(params).forEach(key => {
        body.push(`${key}=${encodeURIComponent(params[key])}`);
      });

      params = `?${body.join('&')}`;
    }

    route += params || '';

    return this.xhr(route, null, 'GET', token);
  }

  put(route, params, token = store.getState().UserReducer.api_token) {
    return this.xhr(route, params, 'PUT', token);
  }

  post(
    route,
    params,
    token = store.getState().UserReducer.api_token,
    headers = {},
  ) {
    return this.xhr(route, params, 'POST', token, headers);
  }

  delete(route, params, token = store.getState().UserReducer.api_token) {
    return this.xhr(route, params, 'DELETE', token);
  }

  request(config) {
    return axios(config);
  }

  async xhr(route, params, method, token, headers = {}) {
    let config = {
      method,
      url: `${domain[env]}${apiUrl}${route}`,
    };

    if (method !== 'GET') {
      config.data = {...params};
    }

    config.headers = {
      ...headers,
      'accept-language': store.getState().SettingReducer.language,
    };
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return new Promise((resolve, reject) => {
      this.request(config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          if (
            method === 'POST' &&
            error.response === undefined &&
            error.status === undefined
          ) {
            Alert.alert(
              I18n.t('settings.no_internet_connection_title'),
              I18n.t('settings.no_internet_connection'),
            );
          }

          reject(error);
        });
    });
  }
}

export const Api = new API();
