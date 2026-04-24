import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
  AnimatePresence,
  type MotionValue,
} from "motion/react";
import { useRef, useState, type FC } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface DocItem {
  img: string;
  tag: string;
  title: string;
  description: string;
  url: string;
  accentHex: string;
  tagColor: string;
}

const docs: DocItem[] = [
  {
    img: "documentation/blog1.svg",
    tag: "Java",
    title: "Mastering Java for Modern Applications",
    description:
      "Learn the fundamentals and advanced concepts of Java programming to build robust applications. Explore multi-threading and stream API.",
    url: "https://docs.telusko.com/docs/java/getting-started",
    accentHex: "#CDFADB",
    tagColor: "bg-emerald-700 text-white",
  },
  {
    img: "documentation/blog2.svg",
    tag: "Python",
    title: "Python for Fast Backend Development",
    description:
      "Explore Python's versatility for data analysis, AI, and automation projects. Master Django and FastAPI for high-performance services.",
    url: "https://docs.telusko.com/docs/python/getting-started",
    accentHex: "#F6CF96",
    tagColor: "bg-amber-700 text-white",
  },
  {
    img: "documentation/blog3.svg",
    tag: "Spring Boot",
    title: "Building Scalable Backend with Spring Boot",
    description:
      "Hands-on guide to creating efficient backend services using Spring Boot framework. Learn dependency injection and security.",
    url: "https://docs.telusko.com/docs",
    accentHex: "#A2C7E5",
    tagColor: "bg-sky-800 text-white",
  },
];

const Documentation: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full font-serif">
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 border-b border-neutral-300">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-5 font-DM-Sans font-medium">
            Developer Resources
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1
              style={{ fontFamily: "'Bebas Neue', Georgia, serif" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.05] max-w-2xl"
            >
              How Telusko helps you{" "}
              <em className="not-italic text-neutral-400">work smarter</em>
            </h1>
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <p className="text-sm text-neutral-500 font-DM-Sans max-w-xs md:text-right leading-relaxed">
                Clean, practical guides for modern developers. No fluff, just
                the code that builds careers.
              </p>
              <a
                href="https://docs.telusko.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-xs tracking-[0.15em] uppercase font-DM-Sans font-semibold hover:bg-neutral-700 transition-colors duration-200 group"
              >
                <BookOpen size={14} />
                Explore All Docs
                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Section ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-20">
          {/* LEFT: Scroll Items */}
          <div className="w-full lg:w-1/2 lg:py-24 space-y-0">
            {docs.map((doc, i) => (
              <ScrollCard
                key={i}
                doc={doc}
                index={i}
                onActive={setActiveIndex}
              />
            ))}
          </div>

          {/* RIGHT: Sticky Preview Panel */}
          <div className="hidden lg:flex w-1/2 self-start sticky top-0 h-screen items-center justify-center py-24">
            <StickyPanel activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

const StickyPanel: FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const doc = docs[activeIndex];

  return (
    <div className="w-full max-w-md">
      <motion.div
        animate={{ backgroundColor: doc.accentHex }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full aspect-square border border-neutral-200 overflow-hidden"
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center p-12"
          >
            <img
              src={doc.img}
              alt={doc.title}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {docs.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: activeIndex === i ? 24 : 6,
                opacity: activeIndex === i ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 bg-neutral-800 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Tag + counter row */}
      <div className="mt-4 flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.span
            key={doc.tag}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.25 }}
            className={`text-xs tracking-[0.2em] uppercase font-DM-Sans font-semibold px-3 py-1 ${doc.tagColor}`}
          >
            {doc.tag}
          </motion.span>
        </AnimatePresence>
        <span className="text-xs text-neutral-400 font-DM-Sans tabular-nums">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(docs.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

// ─── Scroll Card ──────────────────────────────────────────────────────────────

interface ScrollCardProps {
  doc: DocItem;
  index: number;
  onActive: (i: number) => void;
}

const ScrollCard: FC<ScrollCardProps> = ({ doc, index, onActive }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.7", "end 0.3"],
  });

  // Symmetric dim-bright-dim based on how centred the card is in the viewport
  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.2, 1, 1, 1, 0.2]
  );
  const translateX: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 12, 12, 12, 0]
  );

  // Fire onActive whenever the card's midpoint crosses the viewport centre,
  // in EITHER scroll direction. useMotionValueEvent handles cleanup automatically.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.3) {
      onActive(index);
    } else if (index > 0 && v < 0.5 && v > 0) {
      // Scrolling back up: hand off to the previous card
      onActive(index - 1);
    }
  });

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x: translateX }}
      className="py-12 sm:py-16 lg:py-20 border-b border-neutral-200 last:border-none"
    >
      {/* Tag pill */}
      <span
        className={`inline-block text-xs tracking-[0.2em] uppercase font-DM-Sans font-semibold px-3 py-1 mb-6 ${doc.tagColor}`}
      >
        {doc.tag}
      </span>

      {/* Large index number + title */}
      <div className="flex items-start gap-4 mb-5">
        <span
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-6xl font-bold text-neutral-200 leading-none select-none tabular-nums mt-1 shrink-0"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          style={{ fontFamily: "'DM Sans', Georgia, serif" }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight"
        >
          {doc.title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-neutral-600 font-DM-Sans text-base leading-relaxed mb-8 max-w-md md:pl-20">
        {doc.description}
      </p>

      {/* CTA link */}
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase font-semibold text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors duration-200 group md:ml-20"
      >
        Read Documentation
        <ArrowUpRight
          size={13}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </a>

      {/* Mobile / tablet image card */}
      <motion.div
        animate={{ backgroundColor: doc.accentHex }}
        transition={{ duration: 0.4 }}
        className="lg:hidden mt-10 border mr-8 md:mr-12 border-neutral-200 overflow-hidden"
      >
        <img
          src={doc.img}
          alt={doc.title}
          className="w-full h-52 object-contain p-8"
        />
      </motion.div>
    </motion.div>
  );
};

export default Documentation;