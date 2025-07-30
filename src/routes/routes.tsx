import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CreateRoomContainer } from "@/pages/create-room/container";
import { RoomDetailsContainer } from "@/pages/room-details/container";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoomContainer />} index />
        <Route element={<RoomDetailsContainer />} path="/room" />
      </Routes>
    </BrowserRouter>
  );
}
