import { axios } from "core";

export default {
  getMessageByDialogId: (id) => axios.get(`/messages?dialog=${id}`),
};
