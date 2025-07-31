import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CreateRoomContainer } from "@/pages/create-room/container";
import { RoomDetailsContainer } from "@/pages/room-details/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoomContainer />} index />
          <Route element={<RoomDetailsContainer />} path="/room/:id" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
