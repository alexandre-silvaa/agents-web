import { useRooms } from "@/http/user-rooms/user-rooms";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function RoomsList() {
  const { data } = useRooms();

  return (
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
  );
}
