import $api from "../api/httpAPI";

export default class AuthService {
  static async login(email, passoword) {
    return $api.post("user/login", { email, passoword });
  }

  static async registration(email, password, fullname) {
    return $api.post("user/registration", { email, password, fullname });
  }

  static async logout() {
    return $api.post("user/logout");
  }
}
