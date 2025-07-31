import { Link } from "react-router-dom";

import { Loader } from "@/components/loader/loader";
import type { ICreateRoom } from "./types";

export function CreateRoomPresentation({
  data,
  isLoading,
}: Readonly<ICreateRoom>) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-1">
      {data?.map((room) => (
        <Link
          className="no-underline"
          key={room.id}
          to={`/room-details/${room.id}`}
        >
          {room.name}
        </Link>
      ))}
    </div>
  );
}
