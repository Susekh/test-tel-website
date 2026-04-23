import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";

function ScrollColumn({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const y = useMotionValue(0);

  const [contentHeight, setContentHeight] =
    useState(0);

  const paused = useRef(false);

  /*
    Measure exact height of ONE instance
  */
  useLayoutEffect(() => {
    const measure = () => {
      if (!ref.current) return;

      const height =
        ref.current.scrollHeight / 2;

      setContentHeight(height);
    };

    measure();

    const resizeObserver =
      new ResizeObserver(measure);

    if (ref.current)
      resizeObserver.observe(ref.current);

    return () =>
      resizeObserver.disconnect();
  }, []);

  /*
    Continuous circular motion
    speed derived from duration
  */
  useAnimationFrame((_, delta) => {
    if (!contentHeight) return;
    if (paused.current) return;

    // pixels per ms
    const speed =
      contentHeight / (duration * 1000);

    y.set(
      y.get() - speed * delta
    );

    /*
      Perfect circular reset
    */
    if (y.get() <= -contentHeight) {
      y.set(0);
    }
  });

  /*
    Pause / Resume logic
  */
  const handlePause = useCallback(() => {
    paused.current = true;
  }, []);

  const handleResume = useCallback(() => {
    paused.current = false;
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col will-change-transform"
      style={{ y }}
      onHoverStart={handlePause}
      onHoverEnd={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
      onTouchCancel={handleResume}
    >
      {/* Instance 1 */}
      <div className="flex flex-col gap-6 pb-6">
        {children}
      </div>

      {/* Instance 2 (perfect loop) */}
      <div className="flex flex-col gap-6 pb-6">
        {children}
      </div>
    </motion.div>
  );
}

export default ScrollColumn;