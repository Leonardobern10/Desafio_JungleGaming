import moment from "moment";
import { useEffect, useState } from "react";

export const useClock = () => {
  const [hour, setHour] = useState(moment().format("LTS"));

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(interval);
  }, [hour]);

  return hour;
};
