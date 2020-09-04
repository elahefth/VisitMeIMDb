import {Api} from './../boot/request';

export class UserApiService {
  static profile() {
    return Api.get('/user/profile', null);
  }

  static updateProfile(form) {
    return Api.put('/user/profile', form);
  }

  static generateMobileCode(form) {
    return Api.post('/user/auth/generate_mobile_code', form);
  }

  static validateMobileCode(form) {
    return Api.post('/user/auth/verify_mobile_code', form);
  }

  static logout(form) {
    return Api.post('/user/auth/logout', form);
  }
}
