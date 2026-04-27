import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Book, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import MarqueeRow from "./MarqueeRow";

interface MarqueeItem {
  label: string;
  bg: string;
  color: string;
}


const ROW_A: MarqueeItem[] = [
  { label: "Linux & System Fundamentals", bg: "#D7E9D1", color: "#1a4a1a" },
  { label: "Docker & Containerization", bg: "#D3ECF0", color: "#0d3d4a" },
  { label: "12 Weeks", bg: "#FFF6D1", color: "#4a3500" },
  { label: "CI/CD Pipelines", bg: "#E0D7F9", color: "#2d1a5e" },
  { label: "Git & Version Control", bg: "#FFE5E5", color: "#5e1a1a" },
  { label: "Kubernetes", bg: "#CFF5E7", color: "#0d4a30" },
  { label: "AWS Cloud", bg: "#FADADD", color: "#5e1a2e" },
];

const ROW_B: MarqueeItem[] = [
  { label: "Cloud Ready", bg: "#E1F7F5", color: "#0d3d38" },
  { label: "Beginner → Intermediate", bg: "#FFF6D1", color: "#4a3500" },
  { label: "Hands-on Tools", bg: "#D7E9D1", color: "#1a4a1a" },
  { label: "Infrastructure Automation", bg: "#F2EFF9", color: "#2d1a5e" },
  { label: "Real Workflow", bg: "#FFE5E5", color: "#5e1a1a" },
  { label: "Jenkins", bg: "#D3ECF0", color: "#0d3d4a" },
  { label: "DevOps Lifecycle", bg: "#E0D7F9", color: "#2d1a5e" },
];

const ROW_C: MarqueeItem[] = [
  { label: "Complete DevOps Bootcamp", bg: "#FADADD", color: "#5e1a2e" },
  { label: "AWS Deployments", bg: "#CFF5E7", color: "#0d4a30" },
  { label: "Cloud (AWS Basics)", bg: "#FFF6D1", color: "#4a3500" },
  { label: "Industry Ready", bg: "#D7E9D1", color: "#1a4a1a" },
  { label: "Docker & K8s", bg: "#E1F7F5", color: "#0d3d38" },
  { label: "Version Control", bg: "#F2EFF9", color: "#2d1a5e" },
  { label: "Orchestration", bg: "#FFE5E5", color: "#5e1a1a" },
];

const ROW_D: MarqueeItem[] = [
  { label: "Kubernetes & Orchestration", bg: "#D3ECF0", color: "#0d3d4a" },
  { label: "Beginner Friendly", bg: "#D7E9D1", color: "#1a4a1a" },
  { label: "CI/CD & Git", bg: "#E0D7F9", color: "#2d1a5e" },
  { label: "AWS & Cloud", bg: "#FFF6D1", color: "#4a3500" },
  { label: "Real DevOps Tools", bg: "#CFF5E7", color: "#0d4a30" },
  { label: "12-Week Program", bg: "#FADADD", color: "#5e1a2e" },
  { label: "Industry Projects", bg: "#E1F7F5", color: "#0d3d38" },
];


const enrollUrl =
  "https://learn.telusko.com/courses/complete%20devops%20bootcamp%3A%20master%20devops%20in%2012%20weeks";

const curriculum: string[] = [
  "Linux & System Fundamentals",
  "Git & Version Control",
  "CI/CD Pipelines (Jenkins)",
  "Docker & Containerization",
  "Kubernetes & Orchestration",
  "Cloud (AWS Basics)",
  "Infrastructure Automation",
];

function ScribbleArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute z-40 pointer-events-none flex flex-col items-center"
    >
      <div className="relative mb-1 text-xs font-semibold text-indigo-500 bg-white px-3 py-1 border border-indigo-500 shadow-[2px_2px_0_0_#3b82f6]">
        New Course Launched
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
      </div>
    </motion.div>
  );
}

// Details panel - shared content for both layouts
function DetailsPanel() {
  return (
    <div className="flex flex-col gap-3">
      {/* Curriculum */}
      <div className="bg-white border-2 border-black shadow-[3px_3px_0_#000]">
        <p className="text-[10px] font-black uppercase tracking-[0.1em] text-black px-3 py-2 border-b-2 border-black">
          What you'll master
        </p>
        <ul className="px-3 py-1">
          {curriculum.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 py-[5px] text-[11px] font-semibold text-[#1a1a1a]"
              style={{
                borderBottom: i < curriculum.length - 1 ? "1px dashed #e5e7eb" : "none",
              }}
            >
              <span
                className="w-[15px] h-[15px] flex items-center justify-center text-[8px] font-black flex-shrink-0 rounded-full border-[1.5px] border-black"
                style={{ background: "#D7F2C1" }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div
          className="px-3 py-2 border-2 border-black shadow-[2px_2px_0_#000]"
          style={{ background: "#F2EFF9" }}
        >
          <p className="text-xl font-black text-black leading-none">12</p>
          <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500 mt-0.5">
            Weeks
          </p>
        </div>
        <div
          className="px-3 py-2 border-2 border-black shadow-[2px_2px_0_#000]"
          style={{ background: "#FFF6D1" }}
        >
          <p className="text-[11px] font-black text-black leading-tight">
            Beginner → Intermediate
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500 mt-0.5">
            Level
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DevOpsCourseSection() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop (hover-capable) vs touch device
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative w-full font-DM-Sans mt-20 md:mb-28">
      {/* Badge */}
      <div className="relative w-full flex justify-center items-center">
        <ScribbleArrow />
      </div>

      {/* Marquee background */}
      <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none z-0 gap-0 min-w-0">
        <MarqueeRow items={ROW_A} reverse={false} />
        <MarqueeRow items={ROW_B} reverse={true} />
        <MarqueeRow items={ROW_C} reverse={false} />
        <MarqueeRow items={ROW_D} reverse={true} />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 65% at 50% 50%, transparent 20%, #ffffff 72%)",
        }}
      />

      {/* Centered layout */}
      <div className="relative z-20 flex items-center justify-center w-full px-4 py-12">

        {/* ── DESKTOP: horizontal expansion ── */}
        {isDesktop ? (
          <div
            className="flex flex-row items-stretch"
            style={{ border: "2.5px solid #000", boxShadow: "7px 7px 0 #000", borderRadius: 14, background: "#fff", overflow: "hidden" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main card - fixed width, never shrinks */}
            <div className="w-[340px] flex-shrink-0 flex flex-col">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail%2F0667d01b-98b0-484c-a6b2-6ce4f956d2d9.jpg"
                  alt="DevOps Bootcamp"
                  className="w-full block"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                  <div className="flex items-end justify-between gap-2">
                    <h3 className="font-black text-[15px] leading-snug text-white font-DM-Sans">
                      Complete DevOps Bootcamp
                    </h3>
                    <div className="flex-shrink-0 text-right pb-0.5">
                      <p className="text-[9px] font-bold text-white/60 uppercase tracking-wide leading-none mb-0.5">
                        12 weeks
                      </p>
                      <p className="text-[9px] font-bold text-blue-300 uppercase tracking-wide leading-none">
                        Beginner → Mid
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div
                className="px-4 pt-3 pb-4 flex flex-col gap-2 flex-1"
                style={{ background: "linear-gradient(160deg, #eff4ff 0%, #ffffff 55%)" }}
              >
                {/* Hover hint - only shown when collapsed */}
                {!isHovered && (
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-gray-400 text-center py-1">
                    Hover to explore →
                  </p>
                )}

                {/* CTAs - always visible */}
                <div className="flex flex-col gap-2 mt-auto">
                  <a href={enrollUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.07em] text-white bg-blue-600 border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-100 hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000] active:translate-y-[3px] active:shadow-none cursor-pointer select-none"
                      style={{ borderRadius: 6 }}
                    >
                      Enroll Now <ArrowRight size={12} />
                    </button>
                  </a>
                  <a href={enrollUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.07em] text-black bg-white border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-100 hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000] active:translate-y-[3px] active:shadow-none cursor-pointer select-none"
                      style={{ borderRadius: 6 }}
                    >
                      View Curriculum <Book size={12} />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Details panel - slides in horizontally from the right */}
            <AnimatePresence initial={false}>
              {isHovered && (
                <motion.div
                  key="desktop-details"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 260, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden flex-shrink-0"
                  style={{ borderLeft: "2.5px solid #000" }}
                >
                  <div className="w-[260px] p-4 h-full overflow-y-auto">
                    <DetailsPanel />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        ) : (
          /* ── MOBILE / TABLET: vertical expansion (original behaviour) ── */
          <motion.div
            layout
            className="w-full bg-white overflow-hidden"
            style={{
              maxWidth: 380,
              border: "2.5px solid #000",
              boxShadow: "7px 7px 0 #000",
              borderRadius: 14,
            }}
          >
            {/* Image */}
            <div className="relative">
              <img
                src="https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail%2F0667d01b-98b0-484c-a6b2-6ce4f956d2d9.jpg"
                alt="DevOps Bootcamp"
                className="w-full block"
                style={{ width: "100%", height: "auto" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                <div className="flex items-end justify-between gap-2">
                  <h3 className="font-black text-[15px] leading-snug text-white font-DM-Sans">
                    Complete DevOps Bootcamp
                  </h3>
                  <div className="flex-shrink-0 text-right pb-0.5">
                    <p className="text-[9px] font-bold text-white/60 uppercase tracking-wide leading-none mb-0.5">
                      12 weeks
                    </p>
                    <p className="text-[9px] font-bold text-blue-300 uppercase tracking-wide leading-none">
                      Beginner → Mid
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div
              className="px-4 pt-3 pb-4"
              style={{ background: "linear-gradient(160deg, #eff4ff 0%, #ffffff 55%)" }}
            >
              {/* Toggle button */}
              <button
                onClick={() => setIsClicked((v) => !v)}
                className="w-full flex items-center justify-center gap-1.5 mb-3 text-[10px] font-black uppercase tracking-[0.08em] text-gray-600 bg-white border-2 border-black py-1.5 shadow-[2px_2px_0_#000] transition-all duration-100 hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000] active:translate-y-[2px] active:shadow-none cursor-pointer select-none"
                style={{ borderRadius: 6 }}
              >
                {isClicked ? (
                  <>Hide Details <ChevronUp size={11} strokeWidth={3} /></>
                ) : (
                  <>Show Details <ChevronDown size={11} strokeWidth={3} /></>
                )}
              </button>

              {/* Expandable details */}
              <AnimatePresence initial={false}>
                {isClicked && (
                  <motion.div
                    key="mobile-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mb-3">
                      <DetailsPanel />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTAs */}
              <div className="flex flex-col gap-2">
                <a href={enrollUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.07em] text-white bg-blue-600 border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-100 hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000] active:translate-y-[3px] active:shadow-none cursor-pointer select-none"
                    style={{ borderRadius: 6 }}
                  >
                    Enroll Now <ArrowRight size={12} />
                  </button>
                </a>
                <a href={enrollUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.07em] text-black bg-white border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-100 hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000] active:translate-y-[3px] active:shadow-none cursor-pointer select-none"
                    style={{ borderRadius: 6 }}
                  >
                    View Curriculum <Book size={12} />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}