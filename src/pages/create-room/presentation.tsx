import { Loader } from "@/components/loader/loader";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ICreateRoom } from "./types";

export function CreateRoomPresentation({
  data,
  isLoading,
}: Readonly<ICreateRoom>) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <div />
          <Card>
            <CardHeader>
              <CardTitle>Salas Recentes</CardTitle>
              <CardDescription>
                Acesso rápido para as salas criadas recentemente
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {data?.map((room) => (
                <Link
                  key={room.id}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent hover:cursor-pointer hover:scale-103 transition-all"
                  to={`/rooms/${room?.id}`}
                >
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-medium ">{room.name}</h3>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {dayjs(room.createdAt).fromNow()}{" "}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {room.questionsCount}{" "}
                        {room.questionsCount === 1 ? "pergunta" : "perguntas"}
                      </Badge>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-sm">
                    Entrar
                    <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      {/* {data?.map((room) => (
        <Link
          className="no-underline"
          key={room.id}
          to={`/room-details/${room.id}`}
        >
          {room.name}
        </Link>
      ))} */}
    </div>
  );
}
