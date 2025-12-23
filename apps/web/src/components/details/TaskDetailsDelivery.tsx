import TimeTaskComponent from "../tasks/TimeTaskComponent";

type TaskDetailsDeliveryProps = {
  dueDate: Date;
  dueDateTitle: string;
  colorText: string;
};

const styles = {
  h3: "text-lg font-semibold mb-3",
};

export default function TaskDetailsDelivery({
  dueDate,
  dueDateTitle,
  colorText,
}: TaskDetailsDeliveryProps) {
  return (
    <section>
      <h3 className={styles.h3}>{dueDateTitle}</h3>
      <TimeTaskComponent dueDate={dueDate} color={colorText} />
    </section>
  );
}
