import { Outlet } from "@tanstack/react-router";
import { useAuthStore } from "./store/useAuthStore";
import { useWebSocketStore } from "./store/websocket";
import { useEffect } from "react";
import { useNotifications } from "./hooks/useNotifications";
import Header from "./components/header/Header";

function App() {
  const { user, token } = useAuthStore();
  const connect = useWebSocketStore((s) => s.connect);

  // conectar websocket
  useEffect(() => {
    console.log(token);
    if (token && user?.email) connect();
  }, [user]);

  // ativar toast hook
  useNotifications();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      <div className="h-full w-full py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
