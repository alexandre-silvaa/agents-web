export type IGetRoomsResponse = Array<{
  id: string;
  name: string;
  createdAt: string;
  questionsCount: number;
}>;

export interface ICreateRoomResponse {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}
