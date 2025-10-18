import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UseFormReturn } from "react-hook-form";
import type { CreateRoomSchemaType } from "../types";

type CreateRoomFormProps = {
  readonly form: UseFormReturn<CreateRoomSchemaType>;
  readonly onSubmit: (data: CreateRoomSchemaType) => Promise<void>;
  readonly isPending: boolean;
};

export default function CreateRoomForm({
  form,
  onSubmit,
  isPending,
}: CreateRoomFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma sala para começar a fazer perguntas e receber respostas da IA
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Sala</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome da sala..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição da Sala</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite a descrição da sala..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Criando..." : "Criar Sala"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
