import type { NavBarListItemProps } from "@/types/props/NavBarListItemProps";
import { Link } from "@tanstack/react-router";

export default function NavBarListItem({ name, path }: NavBarListItemProps) {
  return (
    <li>
      <Link className="text-md font-light text-secondary" to={path}>
        {name}
      </Link>
    </li>
  );
}
