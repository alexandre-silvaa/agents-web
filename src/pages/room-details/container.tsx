import type { JSX } from "react";
import { RoomDetailsPresentation } from "./presentation";
import { Navigate, useParams } from "react-router-dom";
import type { IRoomDetailsRouteParams } from "./types";

export function RoomDetailsContainer(): JSX.Element {
  const { id } = useParams<IRoomDetailsRouteParams>();

  if (!id) {
    return <Navigate replace to="/" />;
  }

  return <RoomDetailsPresentation />;
}
