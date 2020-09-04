import {Api} from './../boot/request';

export class IMDbApi {
  static search() {
    return Api.get('/', null);
  }
  static show() {
    return Api.get('/', null);
  }
}
