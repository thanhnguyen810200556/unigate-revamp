import { useState, useCallback } from "react";

function useNewsAnimation() {
  const [animationDuration, setAnimationDuration] = useState("20s");

  // Callback để tính toán animation speed
  const calculateAnimationSpeed = useCallback((element) => {
    if (element) {
      const cards = element.querySelectorAll(".announcement-card");
      if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth;
        const gap = 32;
        const totalDistance = (cardWidth + gap) * 4;

        // Tính toán thời gian animation dựa trên khoảng cách
        const duration = Math.max(10, totalDistance / 50);
        setAnimationDuration(`${duration}s`);
      }
    }
  }, []);

  // Callback ref để tự động tính toán khi element được mount
  const containerRef = useCallback(
    (element) => {
      if (element) {
        // Tính toán ngay khi element được mount
        calculateAnimationSpeed(element);

        // Sử dụng ResizeObserver thay vì window event listener
        const resizeObserver = new ResizeObserver(() => {
          calculateAnimationSpeed(element);
        });

        resizeObserver.observe(element);

        // Cleanup sẽ được tự động xử lý khi element unmount
        return () => {
          resizeObserver.disconnect();
        };
      }
    },
    [calculateAnimationSpeed],
  );

  // Trả về ref và style cho animation
  return {
    containerRef,
    animationStyle: {
      animationDuration,
      animationName: "scroll",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    },
  };
}

export default useNewsAnimation;
