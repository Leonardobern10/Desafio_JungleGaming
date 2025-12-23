import { useDashboard } from "@/hooks/useDashboard";
import Clock from "./Clock";
import { motion } from "motion/react";

const styles = {
  date: "text-muted-foreground text-lg",
};

export default function TodayTime() {
  const { formattedDate, formattedDay } = useDashboard();
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
        scale: { visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <h1>{formattedDay}</h1>
      <p className={styles.date}>{formattedDate}</p>
      <Clock />
    </motion.div>
  );
}
