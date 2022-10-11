import { io } from "socket.io-client";
import { API_URL } from "./httpAPI";

export const socket = io(API_URL);
