import $api from "../api/httpAPI";

export default class AuthService {
  static async login(email, passoword) {
    return $api.post("/login", { email, passoword });
  }

  static async registration(email, passoword, fullname) {
    return $api.post("/registration", { email, passoword, fullname });
  }

  static async logout() {
    return $api.post("/logout");
  }
}
