type InfoDetailsContainerProps = {
  title: string;
  value: string | Date;
};

export default function InfoDetailsContainer({
  title,
  value,
}: InfoDetailsContainerProps) {
  return (
    <p className="text-muted-foreground">
      {`${title}: `}
      <span className="font-medium text-foreground">
        {typeof value === "string" ? value : value.toLocaleDateString("pt-BR")}
      </span>
    </p>
  );
}
