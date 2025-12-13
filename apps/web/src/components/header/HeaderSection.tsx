import type { HeaderSectionProps } from "@/types/props/HeaderSectionProps";
import { Link } from "@tanstack/react-router";

export default function HeaderSection({
  title,
  text,
  linkTo,
}: HeaderSectionProps) {
  return (
    <div className="header-section text-primary">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-xs ">
        {text}{" "}
        <em className="text-blue-500">
          <Link to={linkTo}>aqui</Link>
        </em>
        .
      </p>
    </div>
  );
}
