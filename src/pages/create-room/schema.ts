import { z } from "zod";

export const create_room_schema = z.object({
  name: z
    .string({ message: "Campo Obrigatório" })
    .min(3, "O nome da sala deve ter pelo menos 3 caracteres"),
  description: z
    .string({ message: "Campo Obrigatório" })
    .max(500, "A descrição não pode exceder 500 caracteres"),
});
