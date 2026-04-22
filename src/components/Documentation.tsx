import { motion, AnimatePresence } from "framer-motion";
import { SquareChevronRight, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect, type FC } from "react";

interface DocItem {
  img: string;
  tag: string;
  title: string;
  description: string;
  url: string;
  color: string;
}

interface ScrollItemProps {
  doc: DocItem;
  index: number;
  setActiveIndex: (index: number) => void;
  isActive: boolean;
}

// --- Data ---
const docs: DocItem[] = [
  {
    img: "documentation/blog1.svg",
    tag: "Java",
    title: "Mastering Java for Modern Applications",
    description:
      "Learn the fundamentals and advanced concepts of Java programming to build robust applications. Explore multi-threading and stream API.",
    url: "https://docs.telusko.com/docs/java/getting-started",
    color: "#CDFADB",
  },
  {
    img: "documentation/blog2.svg",
    tag: "Python",
    title: "Python for Fast Backend Development",
    description:
      "Explore Python's versatility for data analysis, AI, and automation projects. Master Django and FastAPI for high-performance services.",
    url: "https://docs.telusko.com/docs/python/getting-started",
    color: "#F6CF96",
  },
  {
    img: "documentation/blog3.svg",
    tag: "Spring Boot",
    title: "Building Scalable Backend with Spring Boot",
    description:
      "Hands-on guide to creating efficient backend services using Spring Boot framework. Learn dependency injection and security.",
    url: "https://docs.telusko.com/docs",
    color: "#A2C7E5",
  },
];

const Documentation: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative w-full py-20 px-4 md:px-10 font-DM-Sans">
      <div className="max-w-7xl mx-auto">
        {/*HEADER */}
        <header className="mb-20 border-b-4 border-black pb-10">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-none">
              How Telusko helps you <br />
              <span className="bg-blue-800 text-white border-2 mt-2 inline-block px-4">
                work smarter
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-800 font-bold max-w-xl">
              Clean, practical guides for modern developers. No fluff, just the
              code that builds careers.
            </p>
            <a
              href="https://docs.telusko.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-black uppercase text-sm border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Explore Docs <SquareChevronRight size={18} />
            </a>
          </motion.div>
        </header>

        {/* CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT: Scrolling Text */}
          <div className="w-full lg:w-1/2 space-y-16 md:space-y-[45vh] md:pb-[20vh]">
            {docs.map((doc, i) => (
              <ScrollItem
                key={i}
                doc={doc}
                index={i}
                setActiveIndex={setActiveIndex}
                isActive={activeIndex === i}
              />
            ))}
          </div>

          {/* RIGHT: Sticky Frame */}
          <div className="hidden lg:block w-1/2 sticky top-32 h-[400px]">
            <motion.div
              animate={{ backgroundColor: docs[activeIndex].color }}
              className="relative w-full h-full border-4 border-black overflow-hidden transition-colors duration-500"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: "100%", opacity: 1 }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "tween",
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 flex items-center justify-center p-10"
                >
                  <img
                    src={docs[activeIndex].img}
                    alt={docs[activeIndex].title}
                    className="w-full h-full object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,0.15)]"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollItem: FC<ScrollItemProps> = ({
  doc,
  index,
  setActiveIndex,
  isActive,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isActive ? 1 : 0.3,
        x: isActive ? 10 : 0,
      }}
      className="group cursor-default transition-all duration-300"
    >
      <div
        className={`mb-4 inline-block px-3 py-1 border-2 border-black font-black text-xs uppercase transition-colors ${isActive ? "bg-blue-800 text-white" : "bg-white"}`}
      >
        {doc.tag}
      </div>
      <h2 className="text-3xl font-black mb-4 uppercase leading-tight text-black">
        {doc.title}
      </h2>
      <p className="text-gray-700 font-bold mb-6 text-base leading-relaxed">
        {doc.description}
      </p>

      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-black text-sm uppercase group-hover:gap-4 transition-all duration-300"
      >
        Read Documentation <ArrowRight size={18} />
      </a>

      {/* Mobile-only view */}
      <div className="lg:hidden mt-4 max-w-11/12 border-4 border-black shadow-[8px_8px_0_0_#000] bg-white">
        <img
          src={doc.img}
          alt={doc.title}
          className="w-full h-48 object-contain p-2"
        />
      </div>
    </motion.div>
  );
};

export default Documentation;
