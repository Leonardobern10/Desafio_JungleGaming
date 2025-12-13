import { Link, useRouter } from "@tanstack/react-router";
import NavBarListItem from "./NavBarListItem";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "../ui/button";

export default function Header() {
  const { navigate } = useRouter();
  const { isLogged, logout } = useAuthStore();

  const handleLogout = async () => {
    logout();
    navigate({ from: "/auth/login" });
  };
  return (
    <header className="w-full flex justify-between items-center px-6 md:px-20 py-4 bg-foreground/80">
      <h1 className="text-secondary w-fit">
        <Link to="/">JungleTasks</Link>
      </h1>
      <nav className="w-fit flex flex-row justify-center ">
        <ul className="flex flex-row justify-between gap-x-4  md:gap-x-8 items-center h-fit w-fit">
          {isLogged ? (
            <>
              <NavBarListItem name="Tasks" path="/tasks/dashboard" />
              <Button onClick={handleLogout}>Sair</Button>
            </>
          ) : (
            <>
              <NavBarListItem name="Login" path="/auth/login" />
              <NavBarListItem name="Cadastro" path="/auth/register" />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
