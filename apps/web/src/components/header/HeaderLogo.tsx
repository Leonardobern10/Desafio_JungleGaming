import { Link } from "@tanstack/react-router";

export default function HeaderLogo() {
  return (
    <p className="text-xl text-secondary w-fit">
      <Link to="/">TaskLy</Link>
    </p>
  );
}
