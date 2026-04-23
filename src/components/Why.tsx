import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import UfoScrollTracker from "./UfoScrollTracker";
import {
  BookOpen,
  Brain,
  MessageCircle,
  Rocket,
  Target,
  Users,
} from "lucide-react";

// ── Telusko brand mark ────────────────────────────────────────────────────────
function CoursesTextLogo() {
  return (
    <div>
      <span className="relative text-[#907B62] font-DM-Sans font-[600]">
        <svg
          className="absolute left-0 translate-x-[-80%] -top-5 w-10 h-10
            sm:w-10 sm:left-0 sm:-top-5 sm:h-10
            md:w-10 md:-left-37 md:-top-4 md:h-10"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_394_335)">
            <g clipPath="url(#clip1_394_335)">
              <mask
                id="mask0_394_335"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="60"
                height="60"
              >
                <path d="M60 0H0V60H60V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_394_335)">
                <path
                  d="M33.8834 37.4053C32.6925 37.5746 32.0486 37.851 31.4813 37.7235C23.8222 35.9456 16.144 34.2681 8.54246 32.1872C6.73844 31.7034 4.98342 30.1084 3.77483 28.5798C2.17643 26.5013 3.22682 24.5113 5.87307 24.3571C7.30727 24.2711 8.90616 24.4698 10.1858 25.0694C17.5593 28.5223 24.8535 32.136 32.1474 35.7094C32.6756 35.9576 33.0054 36.5673 33.8428 37.4047L33.8834 37.4053Z"
                  fill="#00CEB3"
                />
                <path
                  d="M49.0197 27.5123C48.8303 26.9235 48.3574 26.2906 48.4518 25.7457C49.3622 19.143 50.171 12.5188 51.4667 6.02193C51.7339 4.73077 54.0902 3.88992 55.453 2.85486C56.1636 4.72434 57.8079 6.88843 57.3824 8.46085C56.3578 12.3519 54.4002 15.9888 52.8684 19.7321C51.7884 22.3684 50.8099 25.0667 49.7909 27.724L48.9996 27.5323L49.0197 27.5123Z"
                  fill="#00CEB3"
                />
                <path
                  d="M38.4316 31.1115C38.1488 31.0287 37.685 31.005 37.5825 30.8228C34.3915 24.7903 31.0799 18.7971 28.2106 12.6461C27.7803 11.7355 29.3189 9.9124 29.9335 8.52588C31.451 9.24306 34.015 9.68589 34.2848 10.7162C36.1088 17.2626 37.4298 23.9463 38.9116 30.5909C38.9528 30.7122 38.6317 30.9114 38.452 31.1318L38.4316 31.1115Z"
                  fill="#00CEB3"
                />
                <path
                  d="M26.999 49.6807C26.7207 51.0282 26.7471 51.3717 26.6275 51.4505C20.0873 54.8238 13.1917 56.414 5.72899 54.5822C4.77573 54.3425 3.70202 53.0309 3.42145 52.0366C3.27015 51.4888 4.67564 49.9599 5.44231 49.9336C12.4842 49.7186 19.5708 49.7468 26.999 49.6807Z"
                  fill="#00CEB3"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_394_335">
              <rect width="60" height="60" fill="white" />
            </clipPath>
            <clipPath id="clip1_394_335">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
}

// ── Area graph ────────────────────────────────────────────────────────────────
function AreaGraph({
  color,
  fillColor,
  dotColor,
  animate,
  points,
  id,
}: {
  color: string;
  fillColor: string;
  dotColor: string;
  animate: boolean;
  points: [number, number][];
  id: string;
}) {
  const W = 220;
  const H = 90;
  const pathD = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
    .join(" ");
  const areaD =
    pathD + ` L${points[points.length - 1][0]},${H} L${points[0][0]},${H} Z`;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="w-full h-[90px]"
    >
      <defs>
        <clipPath id={`clip-${id}`}>
          <motion.rect
            x="0"
            y="0"
            height={H}
            initial={{ width: 0 }}
            animate={{ width: animate ? W : 0 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
          />
        </clipPath>
      </defs>
      {[55, 88, 121, 154, 187].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2={H}
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="3,3"
          opacity="0.4"
        />
      ))}
      <path d={areaD} fill={fillColor} clipPath={`url(#clip-${id})`} />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2"
        clipPath={`url(#clip-${id})`}
      />
      {points
        .filter((_, i) => i % 2 === 1)
        .map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="white"
            stroke={dotColor}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
            transition={{
              delay: 0.6 + i * 0.18,
              type: "spring",
              stiffness: 300,
            }}
          />
        ))}
    </svg>
  );
}

function useCountUp(target: number, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(Math.round(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return val;
}

function RevealCard({
  children,
  delay = 0,
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initial = {
    opacity: 0,
    y: from === "bottom" ? 50 : 0,
    x: from === "left" ? -60 : from === "right" ? 60 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={visible ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// // ── UFO scroll tracker ────────────────────────────────────────────────────────
// function UfoScrollTracker({
//   sectionRef,
// }: {
//   sectionRef: React.RefObject<HTMLElement | null>;
// }) {
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   // Map scroll 0→1 to a zigzag: right on even passes, left on odd
//   // We'll use a custom derived value for bouncy left↔right
//   const rawX = useTransform(scrollYProgress, (v) => {
//     // passes across: 0→1 right, 1→0 left, 0→1 right, 1→0 left
//     const passes = 2;
//     const t = v * passes;
//     const pass = Math.floor(t);
//     const frac = t - pass;
//     // even pass: 0→1 (left to right), odd pass: 1→0 (right to left)
//     const pos = pass % 2 === 0 ? frac : 1 - frac;
//     return pos * 500; // percent across container
//   });

//   // direction for flipping UFO
//   const [flipped, setFlipped] = useState(false);
//   const prevX = useRef(0);

//   useEffect(() => {
//     return rawX.on("change", (v) => {
//       setFlipped(v < prevX.current);
//       prevX.current = v;
//     });
//   }, [rawX]);

//   const springX = useSpring(rawX, { stiffness: 80, damping: 14, mass: 0.6 });

//   // Bobbing Y
//   const [bobY, setBobY] = useState(0);
//   useEffect(() => {
//     let frame: number;
//     const tick = (t: number) => {
//       setBobY(Math.sin(t / 600) * 6);
//       frame = requestAnimationFrame(tick);
//     };
//     frame = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   return (
//     <div className="lg:sticky top-40 z-30 w-full pointer-events-none select-none h-0">
//       <div className="relative w-full max-w-[940px] mx-auto px-4">
//         <motion.div
//           style={{
//             position: "absolute",
//             top: -56,
//             left: 0,
//             width: "100%",
//           }}
//         >
//           <motion.div
//             style={{
//               x: useTransform(
//                 springX,
//                 (v) => `calc(${v}% - ${(v / 100) * 80}px)`,
//               ),
//               y: bobY,
//               display: "inline-block",
//             }}
//             className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)]"
//           >
//             <UfoSvg flipped={flipped} />
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// ── Stat cards ────────────────────────────────────────────────────────────────
const studentsPoints: [number, number][] = [
  [0, 80],
  [28, 72],
  [55, 62],
  [88, 50],
  [121, 38],
  [154, 27],
  [187, 16],
  [220, 6],
];
const satisfactionPoints: [number, number][] = [
  [0, 84],
  [28, 78],
  [55, 70],
  [88, 60],
  [121, 48],
  [154, 35],
  [187, 22],
  [220, 10],
];

function CoursesCard({ animate }: { animate: boolean }) {
  const count = useCountUp(30, 1200, animate);
  return (
    <div className="bg-[#FAF8F5] border-2 border-black shadow-[6px_6px_0_#000] p-5 flex flex-col h-full min-h-[280px]">
      <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">
        Courses
      </span>
      <div className="font-['Playfair_Display',serif] text-[5rem] leading-none font-black text-black tracking-tight">
        {count}+
      </div>
      <p className="text-gray-500 text-sm mt-3 leading-relaxed">
        Topics ranging from Java to Cloud, DSA to DevOps — all in one place.
      </p>
    </div>
  );
}

function StudentsCard({ animate }: { animate: boolean }) {
  return (
    <div className="bg-[#FAF8F5] border-2 border-black shadow-[6px_6px_0_#000] p-5 flex flex-col h-full min-h-[280px]">
      <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">
        Students
      </span>
      <div className="font-['Playfair_Display',serif] text-[3.5rem] leading-none font-black text-black tracking-tight">
        300k+
      </div>
      <div className="mt-auto pt-4">
        <AreaGraph
          color="#4a5c30"
          fillColor="#C9DFA0"
          dotColor="#4a5c30"
          animate={animate}
          points={studentsPoints}
          id="students"
        />
      </div>
    </div>
  );
}

function SatisfactionCard({ animate }: { animate: boolean }) {
  return (
    <div className="bg-[#FAF8F5] border-2 border-black shadow-[6px_6px_0_#000] p-5 flex flex-col h-full min-h-[280px]">
      <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">
        Satisfaction
      </span>
      <div className="font-['Playfair_Display',serif] text-[3.5rem] leading-none font-black text-black tracking-tight">
        98%
      </div>
      <div className="mt-auto pt-4">
        <AreaGraph
          color="#4a3a8c"
          fillColor="#C0B4F0"
          dotColor="#4a3a8c"
          animate={animate}
          points={satisfactionPoints}
          id="satisfaction"
        />
      </div>
    </div>
  );
}

function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="font-DM-Sans pb-24 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Alien grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.12]
            [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* floating shapes */}
        <div className="absolute top-[22%] right-[18%] w-10 h-10 border-4 border-black rotate-12 bg-white" />
        <div className="absolute bottom-[25%] left-[15%] w-12 h-12 border-4 border-black rotate-45 bg-[#7DD000]" />
        <div className="absolute top-[60%] right-[30%] w-8 h-8 border-4 border-black bg-black" />
      </div>

      {/* UFO sticky scroll tracker */}
      <UfoScrollTracker sectionRef={sectionRef} />

      {/* ── Header ── */}
      <div className="flex justify-center">
        <div className="relative px-6 sm:px-12 md:px-20 pt-28 pb-10 sm:py-16 md:py-20 overflow-hidden">
          <div className="relative ml-4 sm:ml-8 md:ml-12">
            <CoursesTextLogo /> 
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif"}} className="relative  font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]">
            Why Telusko
            <img
              className="absolute -top-15 right-0 translate-x-1/4 sm:-top-10 sm:-right-3 md:-top-12 md:-right-4 lg:-top-10 lg:-right-4 h-20 sm:h-16 md:h-20"
              src="/why.svg"
              alt="Illustration"
            />
          </h1>
        </div>
      </div>

      <div className="h-16" />
      <div className="flex flex-col gap-6 px-4 sm:px-8 lg:px-40 pb-28 items-center">
        {/* LEFT CARD */}
        <div className="w-full max-w-[550px] bg-[#F4F6FF] border-4 md:mr-auto border-black shadow-[10px_10px_0px_black] p-6 font-DM-Sans">
          <div className="inline-block mb-4 px-3 py-1 bg-black text-white border-2 border-black font-extrabold tracking-wide">
            LEARNING PATH
          </div>

          <h3 className="text-2xl font-extrabold mb-3 leading-tight">
            Explore Industry-Ready Courses
          </h3>

          <p className="text-base font-medium mb-5">
            Discover structured learning journeys designed to help you master
            modern technologies, build real-world projects, and grow your career
            with confidence.
          </p>

          <div className="hidden md:flex justify-between items-center text-sm font-bold mb-3">
            <span className="flex items-center gap-2">
              <BookOpen size={18} strokeWidth={2.5} />
              Category:
            </span>
            <span>Full-Stack Development</span>
          </div>

          <div className="hidden md:flex justify-between items-center text-sm font-bold mb-3">
            <span className="flex items-center gap-2">
              <Brain size={18} strokeWidth={2.5} />
              Skill Focus:
            </span>
            <span>Problem Solving & System Design</span>
          </div>

          <div className="hidden md:flex justify-between items-center text-sm font-bold mb-5">
            <span className="flex items-center gap-2">
              <Target size={18} strokeWidth={2.5} />
              Outcome:
            </span>
            <span>Job-Ready Practical Skills</span>
          </div>

          <button
            className="
            w-full
            bg-[#FF6B6B]
            text-black
            font-extrabold
            uppercase
            py-3
            border-4
            border-black
            shadow-[4px_4px_0px_black]
            transition-all
            active:translate-x-[3px]
            active:translate-y-[3px]
            active:shadow-none
          "
          >
            Start Your Learning Journey
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-[550px] bg-[#111111] border-4 md:ml-auto border-black shadow-[10px_10px_0px_black] p-6 font-DM-Sans text-white">
          <div className="inline-block mb-4 px-3 py-1 bg-[#7DD000] text-black border-2 border-black font-extrabold tracking-wide">
            COMMUNITY
          </div>

          <h3 className="text-2xl font-extrabold mb-3 leading-tight">
            Learn Together, Build Faster
          </h3>

          <p className="text-base font-medium mb-5 text-white/90">
            Join a collaborative learning environment where mentors, peers, and
            real-world projects help you stay motivated and continuously improve
            your technical skills.
          </p>

          <div className="hidden md:flex justify-between items-center text-sm font-bold mb-3">
            <span className="flex items-center gap-2">
              <Users size={18} strokeWidth={2.5} />
              Support:
            </span>
            <span>Dedicated Mentors</span>
          </div>

          <div className="hidden md:flex justify-between items-center text-sm font-bold mb-3">
            <span className="flex items-center gap-2">
              <MessageCircle size={18} strokeWidth={2.5} />
              Interaction:
            </span>
            <span>Peer Discussions & Reviews</span>
          </div>

          <div className="hidden md:flex justify-between items-center text-sm font-bold mb-5">
            <span className="flex items-center gap-2">
              <Rocket size={18} strokeWidth={2.5} />
              Growth:
            </span>
            <span>Hands-On Project Experience</span>
          </div>

          <button
            className="
              w-full
              bg-[#7DD000]
              text-black
              font-extrabold
              py-3
              uppercase
              border-4
              border-black
              shadow-[4px_4px_0px_black]
              transition-all
              active:translate-x-[3px]
              active:translate-y-[3px]
              active:shadow-none
            "
          >
            Join the Learning Community
          </button>
        </div>
      </div>

      {/* ── Block : stat cards with staggered reveal ── */}
      <div ref={statsRef} className="w-full max-w-[940px] overflow-hidden mx-auto px-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <RevealCard delay={0} from="left">
            <CoursesCard animate={statsVisible} />
          </RevealCard>
          <RevealCard delay={0.15} from="bottom">
            <StudentsCard animate={statsVisible} />
          </RevealCard>
          <RevealCard delay={0.3} from="right">
            <SatisfactionCard animate={statsVisible} />
          </RevealCard>
        </div>
      </div>

      {/* ── Spacer between blocks ── */}
      <div className="h-8" />
    </section>
  );
}

export default Why;
