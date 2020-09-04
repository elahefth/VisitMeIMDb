import {Api} from './../boot/request';

export class SettingApi {
  static list() {
    return Api.get('/setting/setting/list', null);
  }
}
