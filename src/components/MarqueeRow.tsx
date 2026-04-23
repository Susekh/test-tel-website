import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface Item {
  label: string;
  bg: string;
  color: string;
}

interface MarqueeRowProps {
  items: Item[];
  speed?: number;
  reverse?: boolean;
}

function MarqueeRow({
  items,
  speed = 0.08,
  reverse = false,
}: MarqueeRowProps) {
  const x = useMotionValue(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const [contentWidth, setContentWidth] =
    useState(0);

  /*
    Measure width of ONE sequence
  */
  useLayoutEffect(() => {
    const measure = () => {
      if (!contentRef.current) return;

      const totalWidth =
        contentRef.current.scrollWidth;

      if (totalWidth === 0) return;

      setContentWidth(totalWidth / 3);
    };

    measure();

    const resizeObserver =
      new ResizeObserver(measure);

    if (contentRef.current)
      resizeObserver.observe(
        contentRef.current
      );

    return () =>
      resizeObserver.disconnect();
  }, []);

  /*
    Continuous circular loop
  */
  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;

    const direction = reverse ? -1 : 1;

    x.set(
      x.get() -
        direction *
          speed *
          delta
    );

    if (x.get() <= -contentWidth) {
      x.set(0);
    }

    if (x.get() > 0) {
      x.set(-contentWidth);
    }
  });

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={contentRef}
        className="
          flex
          flex-nowrap
          w-max
          will-change-transform
        "
        style={{
          x,
          gap: 12,
        }}
      >
        {[...items, ...items, ...items].map(
          (item, i) => (
            <span
              key={i}
              className="
                flex-shrink-0
                whitespace-nowrap
                font-black
                uppercase
                tracking-[0.06em]
                border-2
                border-black
              "
              style={{
                fontSize: 13,
                padding: "10px 18px",
                backgroundColor:
                  item.bg,
                color: item.color,
                boxShadow:
                  "3px 3px 0 #000",
                borderRadius: 6,
              }}
            >
              {item.label}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
}

export default MarqueeRow;