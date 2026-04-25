import { motion, type Variants } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ArrowUpRight,
  CheckSquare,
  PlayCircle,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

const desktopPhoto = "/Explore/lms-desktop.png";
const mobilePhoto = "/Explore/lms-mobile.png";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  },
});

const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  },
});

const features = [
  { icon: PlayCircle, label: "Video courses with progress tracking" },
  { icon: BookOpen, label: "Structured paths from zero to job-ready" },
  { icon: Award, label: "Certificate generation on completion" },
  { icon: Users, label: "Community discussions & live sessions" },
];

export default function Explore() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative w-full overflow-hidden bg-white border-y border-[#d4edda]"
    >
      {/* ── background arc ── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1000 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="-60"
          cy="680"
          r="680"
          fill="none"
          stroke="#52b788"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <circle
          cx="-60"
          cy="680"
          r="480"
          fill="none"
          stroke="#2d6a4f"
          strokeWidth="0.7"
          opacity="0.13"
        />
        <circle
          cx="-60"
          cy="680"
          r="300"
          fill="none"
          stroke="#52b788"
          strokeWidth="0.6"
          opacity="0.10"
        />
        <circle
          cx="-60"
          cy="680"
          r="160"
          fill="none"
          stroke="#2d6a4f"
          strokeWidth="0.5"
          opacity="0.09"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-20">
        {/* ── eyebrow ── */}
        <motion.div
          variants={fadeIn(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#52796f]">
            Learning Platform
          </span>
          <span className="h-px w-8 bg-[#95d5b2]" />
          <span className="text-[10px] font-medium tracking-wide text-[#a0b8aa]">
            Telusko
          </span>
        </motion.div>

        {/* ── two-column header ── */}
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <h2 className="text-[2.4rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#1b4332] md:text-[2.9rem]">
              A new way to learn{" "}
              <span className="text-[#2d6a4f]">development.</span>
              <br />
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp(0.16)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-[15px] leading-[1.8] text-[#4a6859]">
             Meet our new platform to learn explore grow. Discover curated courses track progress and resume anytime seamless zero friction learner dashboard experience.
            </p>

            <ul className="flex flex-col gap-[10px]">
              {features.map(({ label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-[13.5px] text-[#2d4a3e]"
                >
                  <span className="flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center rounded-[3px] border border-[#95d5b2] bg-[#d8f3dc]">
                    <CheckSquare
                      size={11}
                      strokeWidth={2.5}
                      className="text-[#2d6a4f]"
                    />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://learn.telusko.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  border-2 border-[#1b4332] bg-[#1b4332]
                  px-5 py-[10px]
                  text-[12px] font-bold uppercase tracking-[.1em] text-white
                  shadow-[4px_4px_0px_#2d6a4f]
                  transition-all duration-100
                  hover:shadow-[1px_1px_0px_#2d6a4f] hover:translate-x-[3px] hover:translate-y-[3px]
                "
              >
                Start Learning
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <span className="text-[11px] text-[#7a9e8a]">
                learn.telusko.com
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── FRAMES  ── */}
        <motion.div
          variants={fadeUp(0.28)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-5"
        >
          {/* ── DESKTOP FRAME ── */}
          <div
            className="w-full min-w-0 overflow-hidden rounded-xl border border-[#b7e4c7] bg-white lg:flex-1"
            style={{ boxShadow: "0 4px 32px rgba(45,106,79,0.10)" }}
          >
            {/* browser chrome */}
            <div className="flex flex-shrink-0 items-center gap-2 border-b border-[#e2f4e8] bg-[#f0f7f2] px-3 py-[9px]">
              <span className="h-[9px] w-[9px] rounded-full bg-[#ff6b6b]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#ffd93d]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#52b788]" />
              <div className="ml-2 flex flex-1 items-center gap-2 rounded border border-[#dceee3] bg-white px-3 py-[3px] text-[10px] text-[#6b8f7c]">
                <Monitor
                  size={9}
                  strokeWidth={2}
                  className="flex-shrink-0 text-[#95d5b2]"
                />
                learn.telusko.com
                <span className="ml-auto rounded-sm bg-[#d8f3dc] px-[7px] py-[1px] text-[8px] font-semibold text-[#2d6a4f]">
                  LIVE
                </span>
              </div>
            </div>

            <div
              className="relative w-full bg-[#eef6ee]"
              style={{ aspectRatio: "16/9" }}
            >
              {desktopPhoto ? (
                <img
                  src={desktopPhoto}
                  alt="LMS desktop view"
                  className="h-full w-full object-cover object-top"
                  draggable={false}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 select-none">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-dashed border-[#95d5b2] bg-[#d8f3dc]">
                    <Monitor
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#2d6a4f]"
                    />
                  </div>
                  <p className="text-[11px] font-semibold text-[#3a5c46]">
                    Desktop view{" "}
                  </p>
                  <p className="text-[10px] text-[#7a9e8a]">
                    Set{" "}
                    <code className="rounded bg-[#d8f3dc] px-1 font-mono text-[#2d6a4f]">
                      desktopPhoto
                    </code>{" "}
                    at the top
                  </p>
                </div>
              )}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden md:block" />
            </div>
          </div>

          {/* ── MOBILE FRAME ── */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div
              className="mx-auto lg:mx-0"
              style={{
                maxWidth: "clamp(240px, 60vw, 320px)",
              }}
            >
              <div
                className="hidden lg:block w-full overflow-hidden border border-[#b7e4c7] bg-white lg:w-[clamp(150px,18vw,210px)]"
                style={{
                  borderRadius: "28px",
                  boxShadow: "0 4px 28px rgba(45,106,79,0.10)",
                }}
              >
                {/* notch bar */}
                <div
                  className="relative flex items-start justify-center bg-white pt-[10px] pb-[6px] px-4"
                  style={{ borderBottom: "1px solid #e2f4e8" }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 20,
                      borderRadius: 12,
                      background: "#1b4332",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#2d6a4f",
                      }}
                    />
                    <div
                      style={{
                        width: 20,
                        height: 4,
                        borderRadius: 2,
                        background: "#2d6a4f",
                      }}
                    />
                  </div>
                </div>

                {/* photo area */}
                <div
                  className="relative w-full bg-[#f0f7f2]"
                  style={{ aspectRatio: "9/17" }}
                >
                  {mobilePhoto ? (
                    <img
                      src={mobilePhoto}
                      alt="LMS mobile view"
                      className="h-full w-full object-cover object-top"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center select-none">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-[#95d5b2] bg-[#d8f3dc]">
                        <Smartphone
                          size={18}
                          strokeWidth={1.5}
                          className="text-[#2d6a4f]"
                        />
                      </div>
                      <p className="text-[10px] font-semibold leading-snug text-[#3a5c46]">
                        Mobile view
                      </p>
                      <p className="text-[9px] leading-snug text-[#7a9e8a]">
                        Set{" "}
                        <code className="rounded bg-[#d8f3dc] px-[3px] font-mono text-[#2d6a4f]">
                          mobilePhoto
                        </code>
                      </p>
                    </div>
                  )}
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 hidden md:block"
                    style={{
                      height: "30%",
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 80%, rgba(255,255,255,0.98) 100%)",
                    }}
                  />
                </div>

                {/* home indicator */}
                <div className="flex justify-center bg-white py-[8px]">
                  <div
                    style={{
                      width: 48,
                      height: 4,
                      borderRadius: 2,
                      background: "#c8e6c9",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
