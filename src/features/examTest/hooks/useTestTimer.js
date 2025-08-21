import { useState, useEffect } from "react";
import { test } from "../../../shared/constants/examTestConfig";
export const useTestTimer = (onTimeUp) => {
  const [timeLeft, setTimeLeft] = useState(test.TOTAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  return timeLeft;
};
