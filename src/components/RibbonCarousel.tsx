import {
  motion,
  useMotionValue,
  useScroll,
  useAnimationFrame,
} from "motion/react";
import {
  useEffect,
  useRef,
  useLayoutEffect,
  useState,
} from "react";

interface RibbonItem {
  tag: string;
  text: string;
}

const items: RibbonItem[] = [
  { tag: "Curiosity", text: "Every expert was once a beginner who refused to quit." },
  { tag: "Mindset", text: "The mind that opens to a new idea never returns to its original size." },
  { tag: "Effort", text: "Sweat in the classroom means confidence in the arena." },
  { tag: "Depth", text: "Go an inch wide and a mile deep - mastery lives in detail." },
  { tag: "Habit", text: "Read one hour a day. In a decade, you'll be unstoppable." },
  { tag: "Failure", text: "Every wrong answer is a data point pointing toward right." },
  { tag: "Systems", text: "You don't rise to your goals - you fall to your systems." },
  { tag: "Wisdom", text: "Knowledge tells you what; wisdom tells you whether." },
  { tag: "Focus", text: "The sharpest weapon in any field is undivided attention." },
  { tag: "Growth", text: "Uncomfortable learning is just your brain building new highways." },
  { tag: "Output", text: "Teach what you learn. It cements the knowledge into bone." },
  { tag: "Edge", text: "In a world of skimmers, the reader is royalty." },
];

function RibbonCard({ item }: { item: RibbonItem }) {
  return (
    <div className="flex items-center shrink-0 h-[56px] px-6 whitespace-nowrap">
      
      {/* TAG */}
      <span
        className="
          text-[15px]
          font-bold
          tracking-wide
          uppercase
          text-gray-900
          mr-4
          opacity-90
        "
      >
        {item.tag}
      </span>

      {/* TEXT */}
      <span
        className="
          text-[14px]
          font-medium
          text-gray-700
        "
      >
        {item.text}
      </span>

      {/* DOT */}
      <span
        className="
          w-[6px]
          h-[6px]
          bg-blue-900
          rounded-full
          mx-6
          opacity-70
        "
      />
    </div>
  );
}

export default function KnowledgeRibbon() {
  const x = useMotionValue(0);

  const direction = useRef(1);
  const lastScroll = useRef(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [contentWidth, setContentWidth] = useState(0);

  const { scrollY } = useScroll();

  /*
    Detect scroll direction
  */
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll.current) {
        direction.current = 1;
      } else if (latest < lastScroll.current) {
        direction.current = -1;
      }

      lastScroll.current = latest;
    });
  }, [scrollY]);


  useLayoutEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        const width =
          contentRef.current.scrollWidth / 3;

        setContentWidth(width);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () =>
      window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;

    const speed = 0.08;

    x.set(
      x.get() -
        direction.current *
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
    <div
      ref={containerRef}
      className="
        relative
        w-full
        mt-10
        overflow-hidden

        bg-[#8fd6e0]
        backdrop-blur-xl
      "
    >
      {/* LEFT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-24
          bg-gradient-to-r
          from-sky-300
          to-transparent
          z-10
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          w-24
          bg-gradient-to-l
          from-sky-300
          to-transparent
          z-10
        "
      />

      <div className="relative h-[56px] overflow-hidden">
        <motion.div
          ref={contentRef}
          className="
            absolute
            left-0
            top-0
            flex
            will-change-transform
          "
          style={{ x }}
        >
          {[...items, ...items, ...items].map(
            (item, i) => (
              <RibbonCard
                key={i}
                item={item}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}