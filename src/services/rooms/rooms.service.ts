import { api } from "../instance";
import type { ICreateRoomRequest } from "./request/request";
import type {
  ICreateRoomResponse,
  IGetRoomsResponse,
} from "./response/response";

export class RoomsService {
  async getRooms(): Promise<IGetRoomsResponse> {
    const { data } = await api.get<IGetRoomsResponse>("/rooms");
    return data;
  }

  async createRoom(reqBody: ICreateRoomRequest): Promise<ICreateRoomResponse> {
    const { data } = await api.post<ICreateRoomResponse>("/rooms", reqBody);
    return data;
  }
}

export const roomsService = new RoomsService();
