import { useAuthStore } from "@/store/useAuthStore";
import { Outlet, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export default function Tasks() {
  const { isLogged } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const auth = () => {
      if (!isLogged) router.navigate({ from: "/auth/login" });
    };
    auth();
  }, []);

  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}
