import type { JSX } from "react";
import { CreateRoomPresentation } from "./presentation";
import { useQuery } from "@tanstack/react-query";
import { RoomsService } from "@/services/rooms/rooms.service";

const roomsService = new RoomsService();

export function CreateRoomContainer(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      return await roomsService.getRooms();
    },
  });

  return <CreateRoomPresentation data={data} isLoading={isLoading} />;
}
