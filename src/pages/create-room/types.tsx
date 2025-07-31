import type { IGetRoomsRequest } from "@/services/rooms/request/request";

export type ICreateRoom = {
  readonly isLoading: boolean;
  readonly data?: IGetRoomsRequest;
};
