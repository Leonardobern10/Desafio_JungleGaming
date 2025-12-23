import { useHeader } from "@/hooks/useHeader";
import HeaderLogged from "./HeaderLogged";
import HeaderUnLogged from "./HeaderUnLogged";

export default function HeaderNav() {
  const { handleLogout, isLogged } = useHeader();
  return (
    <nav className="w-fit flex flex-row justify-center ">
      <ul className="flex flex-row justify-between gap-x-4 md:gap-x-8 items-center h-fit w-fit">
        {isLogged ? (
          <HeaderLogged handleLogout={handleLogout} />
        ) : (
          <HeaderUnLogged />
        )}
      </ul>
    </nav>
  );
}
