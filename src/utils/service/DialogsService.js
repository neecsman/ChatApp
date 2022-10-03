import $api from "../api/httpAPI";

export default class DialogsService {
  static async getDialogs(userId) {
    return $api.get("dialogs", { userId });
  }

  static async deleteDialogs(id) {
    return $api.post(`dialogs/${id}`);
  }

  static async createDialogs() {
    return $api.post("dialogs");
  }
}
