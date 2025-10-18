import { roomsService } from "@/services/rooms/rooms.service";
import { useQuery } from "@tanstack/react-query";

export const useRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      return await roomsService.getRooms();
    },
  });
};
