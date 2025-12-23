import InfoDetailsContainer from "./InfoContainerDetails";
import AssignedContainer from "./AssignedContainer";

type TaskDetailsInfoProps = {
  createdAt: Date;
  updatedAt: Date;
  authorEmail: string;
  assignedEmails: string[];
};

const styles = {
  h3: "text-lg font-semibold mb-3",
  content: "space-y-1 text-sm",
};

export default function TaskDetailsInfo({
  createdAt,
  updatedAt,
  authorEmail,
  assignedEmails,
}: TaskDetailsInfoProps) {
  return (
    <section>
      <h3 className={styles.h3}>Informações</h3>
      <div className={styles.content}>
        <InfoDetailsContainer title="Criado em" value={new Date(createdAt)} />
        <InfoDetailsContainer
          title="Última atualização"
          value={new Date(updatedAt)}
        />
        <InfoDetailsContainer title="Autor" value={authorEmail} />
        <AssignedContainer assignedEmails={assignedEmails} />
      </div>
    </section>
  );
}
