import {Api} from './../boot/request';

export class IMDbApi {
  static search(search, page = 1) {
    return Api.get('', {s: search, page});
  }
  static show(id) {
    return Api.get('', {i: id});
  }
}
