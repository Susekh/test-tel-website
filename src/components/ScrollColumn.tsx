import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { useRef, useLayoutEffect, useState, useCallback } from "react";

function ScrollColumn({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [contentHeight, setContentHeight] = useState(0);
  const paused = useRef(false);

  /* Measure the height of one instance (half of the doubled track) */
  useLayoutEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      setContentHeight(ref.current.scrollHeight / 2);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!contentHeight || paused.current) return;

    /*
     * Clamp delta to 100ms max so a tab-switch or stutter that produces
     * a huge delta value (300ms, 500ms, etc.) cannot cause a visible jump.
     * 100ms is safely above 60fps (~16ms) but kills any macro spike.
     */
    const safeDelta = Math.min(delta, 100);

    const speed = contentHeight / (duration * 1000);
    const next = y.get() - speed * safeDelta;

    /*
     * Wrap BEFORE setting so the motion value never sees a value outside
     * [0, -contentHeight]. Using modulo keeps it perfectly circular with
     * no overshoot frame in between.
     */
    y.set(next <= -contentHeight ? next + contentHeight : next);
  });

  const handlePause = useCallback(() => { paused.current = true; }, []);
  const handleResume = useCallback(() => { paused.current = false; }, []);

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
      {/* First copy */}
      <div className="flex flex-col gap-6 pb-6">
        {children}
      </div>

      {/* Second copy - seamless loop */}
      <div className="flex flex-col gap-6 pb-6">
        {children}
      </div>
    </motion.div>
  );
}

export default ScrollColumn;