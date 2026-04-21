import { motion, useMotionValue, useScroll, useAnimationFrame } from "motion/react";
import { useEffect, useRef } from "react";

interface RibbonItem {
  tag: string;
  tagBg: string;
  tagColor: string;
  itemBg: string;
  text: string;
}

const items: RibbonItem[] = [
  { tag: "CURIOSITY", tagBg: "#f5e642", tagColor: "#0a0a0a", itemBg: "#fdfaf0", text: "Every expert was once a beginner who refused to quit." },
  { tag: "MINDSET",   tagBg: "#3355ff", tagColor: "#ffffff", itemBg: "#dce4ff", text: "The mind that opens to a new idea never returns to its original size." },
  { tag: "EFFORT",    tagBg: "#ff3322", tagColor: "#ffffff", itemBg: "#ffe4e2", text: "Sweat in the classroom means confidence in the arena." },
  { tag: "DEPTH",     tagBg: "#1aad5e", tagColor: "#ffffff", itemBg: "#d4f5e3", text: "Go an inch wide and a mile deep — mastery lives in detail." },
  { tag: "HABIT",     tagBg: "#0a0a0a", tagColor: "#f5e642", itemBg: "#fdfaf0", text: "Read one hour a day. In a decade, you'll be unstoppable." },
  { tag: "FAILURE",   tagBg: "#ff7a00", tagColor: "#0a0a0a", itemBg: "#ffe8cc", text: "Every wrong answer is a data point pointing toward right." },
  { tag: "SYSTEMS",   tagBg: "#e91e8c", tagColor: "#ffffff", itemBg: "#f9d8ee", text: "You don't rise to your goals — you fall to your systems." },
  { tag: "WISDOM",    tagBg: "#3355ff", tagColor: "#ffffff", itemBg: "#dce4ff", text: "Knowledge tells you what; wisdom tells you whether." },
  { tag: "FOCUS",     tagBg: "#ff3322", tagColor: "#ffffff", itemBg: "#ffe4e2", text: "The sharpest weapon in any field is undivided attention." },
  { tag: "GROWTH",    tagBg: "#1aad5e", tagColor: "#ffffff", itemBg: "#d4f5e3", text: "Uncomfortable learning is just your brain building new highways." },
  { tag: "OUTPUT",    tagBg: "#f5e642", tagColor: "#0a0a0a", itemBg: "#fdfaf0", text: "Teach what you learn. It cements the knowledge into bone." },
  { tag: "EDGE",      tagBg: "#0a0a0a", tagColor: "#f5e642", itemBg: "#fdfaf0", text: "In a world of skimmers, the reader is royalty." },
];

function RibbonCard({ item }: { item: RibbonItem }) {
  return (
    <div
      className="flex items-center shrink-0 h-[52px] border-r-[3px] border-black"
      style={{ backgroundColor: item.itemBg }}
    >
      <span
        className="px-4 h-full flex items-center text-[10px] font-extrabold tracking-[0.13em] uppercase border-r-[3px] border-black whitespace-nowrap"
        style={{
          backgroundColor: item.tagBg,
          color: item.tagColor,
        }}
      >
        {item.tag}
      </span>

      <span className="px-5 h-full flex items-center text-[13px] font-bold whitespace-nowrap">
        {item.text}
      </span>

      <span className="w-[7px] h-[7px] bg-black rounded-full mx-[6px] shrink-0" />
    </div>
  );
}

export default function KnowledgeRibbon() {
  const x = useMotionValue(0);
  const direction = useRef(1);

  const { scrollY } = useScroll();
  const lastScroll = useRef(0);

  // Detect scroll direction
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll.current) {
        direction.current = 1; // scrolling down
      } else if (latest < lastScroll.current) {
        direction.current = -1; // scrolling up
      }

      lastScroll.current = latest;
    });
  }, [scrollY]);

  // Continuous movement
  useAnimationFrame((_, delta) => {
    const speed = 0.12; // px per ms
    x.set(x.get() - direction.current * speed * delta);

    // seamless loop
    if (x.get() < -2000) {
      x.set(0);
    }
    if (x.get() > 0) {
      x.set(-2000);
    }
  });

  return (
    <div className="relative w-full mt-10 overflow-hidden bg-[#fdfaf0] border-y-[3px] border-black">
      <div className="relative w-full h-[52px] overflow-hidden">

        <motion.div
          className="absolute left-0 top-0 flex w-max"
          style={{ x }}
        >
          {items.map((item, i) => (
            <RibbonCard key={`a-${i}`} item={item} />
          ))}

          {items.map((item, i) => (
            <RibbonCard key={`b-${i}`} item={item} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}