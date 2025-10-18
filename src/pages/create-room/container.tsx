import { useApiMutation } from "@/lib/use-api-mutation";
import { roomsService } from "@/services/rooms/rooms.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import type { JSX } from "react";
import { useForm } from "react-hook-form";
import { CreateRoomPresentation } from "./presentation";
import { create_room_schema } from "./schema";
import type { CreateRoomSchemaType } from "./types";

export function CreateRoomContainer(): JSX.Element {
  const queryClient = useQueryClient();

  const form = useForm<CreateRoomSchemaType>({
    resolver: zodResolver(create_room_schema),
  });

  const { safeMutateAsync: createRoom, isPending } = useApiMutation({
    mutationFn: async ({ description, name }: CreateRoomSchemaType) => {
      const room = await roomsService.createRoom({
        description,
        name,
      });
      return room;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    successMessage: "Sala criada com sucesso!",
  });

  const onSubmit = async (data: CreateRoomSchemaType): Promise<void> => {
    await createRoom(data);
    form.reset();
  };

  return (
    <CreateRoomPresentation
      form={form}
      onSubmit={onSubmit}
      isPending={isPending}
    />
  );
}
