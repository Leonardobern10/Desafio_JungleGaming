import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useWebSocketStore } from "@/store/websocket";
import { toast } from "sonner"; // shadcn

export function useNotifications() {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const lastEvent = useWebSocketStore((s) => s.lastEvent);
  const connect = useWebSocketStore((s) => s.connect);
  const disconnect = useWebSocketStore((s) => s.disconnect);

  // conecta no websocket quando logado
  useEffect(() => {
    if (token && user?.email) {
      connect();
    } else {
      disconnect();
    }

    return () => disconnect();
  }, [token, user?.email]);

  // recebe eventos do WebSocket
  useEffect(() => {
    if (!lastEvent) return;

    switch (lastEvent.type) {
      case "tasks.created":
        toast.success("Nova tarefa criada!", {
          description: lastEvent.payload.title,
        });
        break;
      case "tasks.updated":
        toast.info("Tarefa atualizada!", {
          description: lastEvent.payload.title,
        });
        break;
      case "comment.new":
        toast.info("Novo comentário recebido!", {
          description: lastEvent.payload.content,
        });
        break;
    }
  }, [lastEvent]);
}
