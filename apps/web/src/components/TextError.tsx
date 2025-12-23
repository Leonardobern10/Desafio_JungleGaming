import { Label } from "@radix-ui/react-label";

export default function TextError({ error }: { error: any }) {
  return <Label className="text-sm text-red-500">{error.message}</Label>;
}
