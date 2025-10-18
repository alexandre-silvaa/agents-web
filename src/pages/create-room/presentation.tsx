import RoomsList from "@/components/rooms-list/rooms-list";
import CreateRoomForm from "./components/create-room-form";
import type { ICreateRoom } from "./types";

export function CreateRoomPresentation(state: Readonly<ICreateRoom>) {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm
            form={state.form}
            onSubmit={state.onSubmit}
            isPending={state.isPending}
          />
          <RoomsList />
        </div>
      </div>
    </div>
  );
}
