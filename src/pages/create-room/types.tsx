import type { UseFormReturn } from "react-hook-form";
import type z from "zod";
import type { create_room_schema } from "./schema";

export type ICreateRoom = {
  readonly form: UseFormReturn<CreateRoomSchemaType>;
  readonly onSubmit: (data: CreateRoomSchemaType) => Promise<void>;
  readonly isPending: boolean;
};

export type CreateRoomSchemaType = z.infer<typeof create_room_schema>;
