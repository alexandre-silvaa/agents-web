import { api } from "../instance";
import type { IGetRoomsRequest } from "./request/request";

export class RoomsService {
  async getRooms(): Promise<IGetRoomsRequest> {
    const { data } = await api.get<IGetRoomsRequest>("/rooms");
    return data;
  }
}
