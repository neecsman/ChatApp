import $api from "../api/httpAPI";

export default class MessagesService {
  static async getMessagesByDialogId(id) {
    return $api.get(`messages?dialog=${id}`);
  }
}
