import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DiDocker, DiJava } from "react-icons/di";

function HeroSection() {
  return (
    <div className="p-4 pt-3 font-[family-name:var(--font-dm-sans)] max-w-[1400px] mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl border-[2.5px] border-black mx-auto"
        style={{ background: "#c8dff7", minHeight: 480 }}
      >
        {/* ── Grid background ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(80,130,200,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(80,130,200,0.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Purple bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3 rounded-b-2xl"
          style={{ background: "#7c5cbf" }}
        />

        {/* Blue circle */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: [0, -11, 0], opacity: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.05 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.05,
            },
          }}
          className="absolute w-12 h-12 lg:w-[92px] lg:h-[92px] flex items-center justify-center left-14 md:top-[110px] md:left-[274px] rounded-full border-[2.5px] border-black"
          style={{
            background: "#6ab8f7",
          }}
        >
          <DiJava className="w-28 h-28" />
        </motion.div>

        {/* Dashed bounding box */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.12,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="absolute hidden sm:block"
          style={{ top: 68, left: 126 }}
        >
          <svg width="68" height="56" fill="none">
            <rect
              x="2"
              y="2"
              width="64"
              height="52"
              rx="2"
              stroke="#445"
              strokeWidth="1.5"
              strokeDasharray="5,4"
            />
            {[
              [0, 0],
              [32, 0],
              [64, 0],
              [0, 26],
              [64, 26],
              [0, 52],
              [32, 52],
              [64, 52],
            ].map(([cx, cy], i) => (
              <rect
                key={i}
                x={cx - 3}
                y={cy - 3}
                width="6"
                height="6"
                rx="1"
                fill="white"
                stroke="#555"
                strokeWidth="1.2"
              />
            ))}
          </svg>
        </motion.div>

        {/* Constellation dots (top-left) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="absolute hidden lg:block"
          style={{ top: 155, left: 44 }}
        >
          <svg width="72" height="58" fill="none">
            <circle cx="8" cy="8" r="2.5" fill="#334" />
            <circle cx="42" cy="22" r="2.5" fill="#334" />
            <circle cx="24" cy="50" r="2.5" fill="#334" />
            <circle cx="64" cy="10" r="2" fill="#334" />
            <line x1="8" y1="8" x2="42" y2="22" stroke="#334" strokeWidth="1" />
            <line
              x1="42"
              y1="22"
              x2="24"
              y2="50"
              stroke="#334"
              strokeWidth="1"
            />
            <line
              x1="42"
              y1="22"
              x2="64"
              y2="10"
              stroke="#334"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Lime blob starburst */}
        <motion.div
          initial={{ y: -40, opacity: 0, scale: 0.7 }}
          animate={{ y: 0, opacity: 1, scale: [1, 1.05, 1] }}
          transition={{
            y: { duration: 0.55, delay: 0.08, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.4, delay: 0.08 },
            scale: {
              delay: 0.7,
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute border-[2.5px] top-[-40px] lg:top-20 border-black flex items-center justify-center"
          style={{
            width: 112,
            height: 90,
            background: "#c8f032",
            borderRadius: "40% 60% 70% 30%/40% 50% 60% 70%",
            left: "38%",
          }}
        >
          <svg width="42" height="42" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2L15.5 9.5L22 7L17.5 13L25 14.5L17.5 16L22 22L15.5 19.5L14 27L12.5 19.5L6 22L10.5 16L3 14.5L10.5 13L6 7L12.5 9.5Z"
              fill="black"
            />
          </svg>
        </motion.div>

        {/* Purple planet */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.06 },
            y: {
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.06,
            },
          }}
          className="absolute top-14 md:top-[100] text-blue-900 flex items-center justify-center"
          style={{
            width: 88,
            height: 88,
            right: "14%",
          }}
        >
          <DiDocker className="w-28 h-28" />
        </motion.div>

        {/* UFO with beam */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: [0, -9, 0], opacity: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.14 },
            y: {
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.14,
            },
          }}
          className="absolute hidden md:block"
          style={{ top: 22, right: 22 }}
        >
          <svg width="96" height="84" viewBox="0 0 96 84" fill="none">
            <ellipse
              cx="48"
              cy="28"
              rx="30"
              ry="14"
              fill="#7ee8c8"
              stroke="black"
              strokeWidth="2"
            />
            <ellipse
              cx="48"
              cy="32"
              rx="17"
              ry="7"
              fill="#b2f5e4"
              stroke="black"
              strokeWidth="1.5"
            />
            <ellipse
              cx="48"
              cy="24"
              rx="8"
              ry="7"
              fill="#d1faf0"
              stroke="black"
              strokeWidth="1.5"
            />
            <circle
              cx="34"
              cy="32"
              r="3"
              fill="#fde68a"
              stroke="black"
              strokeWidth="1.5"
            />
            <circle
              cx="48"
              cy="34"
              r="3"
              fill="#fde68a"
              stroke="black"
              strokeWidth="1.5"
            />
            <circle
              cx="62"
              cy="32"
              r="3"
              fill="#fde68a"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="38"
              y1="48"
              x2="36"
              y2="72"
              stroke="black"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="48"
              y1="48"
              x2="48"
              y2="74"
              stroke="black"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="58"
              y1="48"
              x2="60"
              y2="72"
              stroke="black"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          </svg>
        </motion.div>

        {/* Rocket */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: [0, 4, 0], y: [0, -14, 0], opacity: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.1 },
            x: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            },
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            },
          }}
          className="absolute right-24 lg:right-[408px]"
          style={{ top: "22%" }}
        >
          <svg width="200" height="208" viewBox="0 0 76 108" fill="none">
            <path
              d="M38 6 C18 28 12 54 12 74 L38 84 L64 74 C64 54 58 28 38 6Z"
              fill="white"
              stroke="black"
              strokeWidth="2.5"
            />
            <path
              d="M12 74 L2 92 L24 88Z"
              fill="#f9a8d4"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M64 74 L74 92 L52 88Z"
              fill="#f9a8d4"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="38"
              cy="50"
              r="12"
              fill="#93c5fd"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="38"
              cy="50"
              r="7"
              fill="#3b82f6"
              stroke="black"
              strokeWidth="1.5"
            />
            <path
              d="M26 88 Q38 104 50 88"
              fill="#fbbf24"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M32 90 Q38 108 44 90"
              fill="#fde047"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="30"
              y1="98"
              x2="28"
              y2="107"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="38"
              y1="100"
              x2="38"
              y2="108"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="46"
              y1="98"
              x2="48"
              y2="107"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Teal 6-point star */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1, rotate: [0, 18, 0] }}
          transition={{
            x: { duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.4, delay: 0.2 },
            rotate: {
              duration: 5,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute md:block"
          style={{ top: "36%", right: "9%" }}
        >
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path
              d="M28 2L32 18L48 14L38 28L48 42L32 38L28 54L24 38L8 42L18 28L8 14L24 18Z"
              fill="#2dd4bf"
              stroke="black"
              strokeWidth="2.2"
            />
            <line
              x1="22"
              y1="28"
              x2="34"
              y2="28"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="28"
              y1="22"
              x2="28"
              y2="34"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Purple dashes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="absolute sm:block"
          style={{ top: "44%", right: "21%" }}
        >
          <svg width="32" height="18">
            <line
              x1="0"
              y1="4"
              x2="12"
              y2="4"
              stroke="#a78bfa"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="12"
              x2="28"
              y2="12"
              stroke="#a78bfa"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Yellow star */}
        <motion.div
          initial={{ y: 45, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: [0, 10, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            y: { duration: 0.55, delay: 0.16, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.4, delay: 0.16 },
            rotate: {
              duration: 4.2,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 4.2,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute w-[2px] h-[2px]"
          style={{ top: 68, left: 32 }}
        >
          <svg width="66" height="66" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 4L38 24H60L44 36L50 56L32 44L14 56L20 36L4 24H26Z"
              fill="#fde047"
              stroke="black"
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>

        {/* Teal wavy arrow */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.24,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="absolute hidden md:block"
          style={{ top: 76, left: 116 }}
        >
          <svg width="136" height="44" fill="none">
            <path
              d="M8 22 Q 36 6, 58 22 T 108 22 L 124 22"
              stroke="#2dd4bf"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <polygon points="120,15 136,22 120,29" fill="#2dd4bf" />
          </svg>
        </motion.div>

        {/* Pink Saturn */}
        <motion.div
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: [0, -7, 0], opacity: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.18 },
            y: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.18,
            },
          }}
          className="absolute sm:block left-[75%] top-28 md:top-2 md:left-[43%]"
        >
          <svg width="88" height="78" viewBox="0 0 88 78" fill="none">
            <ellipse
              cx="44"
              cy="38"
              rx="24"
              ry="24"
              fill="#f9a8d4"
              stroke="black"
              strokeWidth="2"
            />
            <ellipse
              cx="44"
              cy="38"
              rx="17"
              ry="7"
              fill="#f472b6"
              fillOpacity="0.35"
            />
            <ellipse
              cx="44"
              cy="38"
              rx="38"
              ry="12"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            <ellipse
              cx="32"
              cy="30"
              rx="8"
              ry="5"
              fill="#fce7f3"
              fillOpacity="0.65"
            />
          </svg>
        </motion.div>

        {/* Small purple diamond (bottom-center scatter) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: [0, 12, 0] }}
          transition={{
            scale: { duration: 0.4, delay: 0.36, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.35, delay: 0.36 },
            rotate: {
              duration: 4,
              delay: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute hidden sm:block"
          style={{ top: 86, left: "55%" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1L19 10L10 19L1 10Z"
              fill="#a78bfa"
              stroke="black"
              strokeWidth="1.8"
            />
          </svg>
        </motion.div>

        {/* Blue organic blob */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: [1, 1.04, 1], rotate: [0, 5, 0] }}
          transition={{
            x: { duration: 0.5, delay: 0.22, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.4, delay: 0.22 },
            scale: {
              duration: 6,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute hidden md:block border-[2.5px] border-black"
          style={{
            width: 100,
            height: 92,
            background: "#93c5fd",
            borderRadius: "60% 40% 55% 45%/50% 60% 40% 55%",
            top: 220,
            right: 22,
          }}
        >
          <svg width="100" height="92" viewBox="0 0 100 92">
            <path
              d="M28 56 Q44 34 56 50 Q66 66 50 72 Q34 78 28 56Z"
              fill="#3b82f6"
              fillOpacity="0.4"
            />
            <path
              d="M38 64 Q50 48 60 60"
              stroke="#1d4ed8"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Crosshair plus marks */}
        {[
          { top: 50, right: "28%" },
          { bottom: 84, right: 76 },
          { bottom: 70, right: 98 },
          { top: "58%", left: "33%" },
        ].map((style, i) => (
          <div
            key={i}
            className="absolute hidden sm:block text-black/40 font-bold text-sm select-none pointer-events-none"
            style={style}
          >
            +
          </div>
        ))}

        <div
          className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-10 pt-16"
          style={{
            background:
              "linear-gradient(to top, rgba(200,223,247,0.97) 70%, transparent 100%)",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex-1">
              {/* Badge — no animation */}
              <div
                className="md:inline-flex hidden  items-center gap-1.5 rounded-full border-2 border-black px-4 py-1 text-xs font-black mb-3 shadow-[2px_2px_0px_0px_#000]"
                style={{ background: "#c8f032" }}
              >
                ✦ FOR EVERY ALIEN OUT THERE
              </div>

              {/* Headline — only text that animates */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="font-bold leading-[0.88] mb-4"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(3.2rem, 7vw, 5.5rem)",
                  color: "#111",
                }}
              >
                Welcome back{" "}
                <span className="relative inline-block">
                  ALIENS
                  <svg
                    className="absolute -bottom-1 left-0"
                    style={{ width: "100%", height: 10 }}
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 5 Q50 0 100 5 T200 5"
                      stroke="#7c5cbf"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Slim static subline */}
              <p
                className="font-semibold"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                  color: "#444",
                  letterSpacing: "0.01em",
                  lineHeight: 1.2,
                }}
              >
                learn at your own{" "}
                <span
                  className="inline-block px-2 py-0.5 rounded border-[1.5px] border-black align-middle"
                  style={{
                    background: "#fde047",
                    color: "#111",
                    lineHeight: 1.3,
                  }}
                >
                  pace
                </span>
              </p>
            </div>

            {/* Right side */}
            <div className=" lg:max-w-sm">
              <p className="text-sm md:text-base text-gray-800 mb-5 leading-snug font-medium">
                The universe of tech is vast. We make programming accessible,
                fun, and cosmic for every developer.
              </p>
              <div className="flex w-full gap-3">
                <a
                  href="https://courses.telusko.com/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-blue-600 items-center gap-2 font-extrabold text-sm px-5 py-3 text-white border-2 border-black cursor-pointer transition-all active:scale-95 hover:-translate-y-0.5"
                  style={{ boxShadow: "4px 4px 0 #111" }}
                >
                  Start Learning <ArrowRight size={16} />
                </a>

                <a
                  href="https://aliencoach.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-extrabold text-sm px-5 py-3 bg-black text-white border-2 border-black cursor-pointer transition-all active:scale-95 hover:-translate-y-0.5"
                  style={{ boxShadow: "4px 4px 0 #555" }}
                >
                  Try Alien Coach
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
