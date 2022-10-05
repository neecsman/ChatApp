import $api from "../api/httpAPI";

export default class UserService {
  static async getAll() {
    return $api.get("user/all");
  }
}
