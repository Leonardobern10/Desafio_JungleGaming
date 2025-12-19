import type { Comments } from "@/types/CommentsType";
import { Separator } from "../ui/separator";
import { IoPerson } from "react-icons/io5";

export default function CommentsComponent({
  id,
  author,
  createdAt,
  text,
}: Comments) {
  return (
    <div key={id} className="flex w-full flex-col justify-between px-2">
      <div className="flex flex-col gap-y-4 w-full text-sm">
        <div className="flex items-center gap-x-1">
          <div className="p-1">
            <IoPerson />
          </div>
          <p>
            <span className="font-bold">{author}</span>
          </p>
        </div>
        <p className="text-sm">
          <em>"{text}"</em>
        </p>
      </div>
      <p className="text-primary/60 text-sm">
        Criado em:{" "}
        <span>{new Date(createdAt).toLocaleDateString("pt-BR")}</span>
      </p>
      <Separator />
    </div>
  );
}
