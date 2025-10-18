import RoomsList from "@/components/rooms-list/rooms-list";
import type { ICreateRoom } from "./types";

export function CreateRoomPresentation(_state: Readonly<ICreateRoom>) {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <div />
          <RoomsList />
        </div>
      </div>
    </div>
  );
}
