import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CourseCard from "./CourseCard";
import CircularBadge from "./circularBadge";

function MiniBarChart() {
  return (
    <div className="flex font-bold items-end gap-[3px] bg-rose-100 py-1.5 px-1 h-12 mt-auto pt-2"
      style={{ fontFamily: "'Bebas Neue', sans-serif" }} 
    >
      <p className="text-rose-700 sm:text-md text-center w-full font-Playfair md:text-xl lg:text-2xl xl:text-4xl">
        "In the age of AI, average isn’t safe-it’s obsolete"
      </p>
    </div>
  );
}

function HeroCards() {
  return (
    <div className="max-w-[1200px] mx-auto mt-6 xl:mt-12 mb-4 gap-0 border-2 border-black shadow-[5px_5px_0px_#111]">

      {/* Card 1 - community */}
      {/* <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col justify-between p-5 border-b-2 sm:border-b-0 sm:border-r-2 border-black"
        style={{ background: "#fff", minHeight: 168 }}
      >
        <div>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Community
          </p>
          <p
            className="font-bold leading-tight mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#111",
              letterSpacing: "0.01em",
            }}
          >
            2M+ Developers
          </p>
          <p className="text-xs leading-relaxed text-gray-500 max-w-[200px]">
            Real skills, real projects, real careers  built here.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="flex -space-x-1.5">
            {["#111", "#2563eb", "#7c5cbf"].map((c, i) => (
              <div
                key={i}
                className="w-6 h-6 border-2 border-white flex items-center justify-center text-[9px] font-black text-white"
                style={{ background: c }}
              >
                {["N", "J", "P"][i]}
              </div>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-gray-400 tracking-wide">
            100k+ 
          </span>
        </div>
      </motion.div> */}

      {/* Card 3 - top course */}
      {/* <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col justify-between p-5"
        style={{ background: "#111", minHeight: 168 }}
      >
        <div>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "#6b7280" }}>
            Top Pick
          </p>
          <p
            className="font-bold leading-tight mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#fff",
              letterSpacing: "0.01em",
            }}
          >
            Java + Spring Boot
          </p>
          <p className="text-xs leading-relaxed max-w-[200px]" style={{ color: "#9ca3af" }}>
            From zero to production-ready backend. The most enrolled path.
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#6b7280" }}>
              Enrolled Across platforms
            </p>
            <p className="text-lg lg:text-xl font-black text-white">250k+</p>
          </div>
          <a
            href="hhttps://courses.telusko.com/learn/master-spring-boot-spring-ai-live-course"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 border-2 border-white text-white transition-all duration-150 hover:bg-white hover:text-black"
          >
            Enroll <ArrowRight size={11} />
          </a>
        </div>
      </motion.div> */}

      {/* Card 2 - metric */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col p-5 border-b-2 sm:border-b-0 sm:border-r-2 border-black"
        style={{ background: "#f5f5f5", minHeight: 168 }}
      >
        <div className="flex items-start justify-between">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">
            Uplift your dreams
          </p>
          <a href="https://learn.telusko.com/" target="_blank" className="text-[8px] lg:text-[16px] flex items-center justify-center gap-2 font-bold border hover:bg-green-900 hover:text-white cursor-pointer duration-300 border-black px-1.5 md:px-2 py-0.5 md:py-1.5 text-gray-700 tracking-wide">
            Explore the platform <ArrowRight size={12} />
          </a>
        </div>

        <p
          className="font-black leading-none mt-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            color: "#111",
          }}
        >
          Our New learing platform
          <span
            className="ml-2 text-sm font-semibold text-gray-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            to explore your potential
          </span>
        </p>

        

        {/* progress bar - flat, no border-radius = brutalist */}
        <div className="w-full h-1.5 mt-3 mb-2" style={{ background: "#d1d5db" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
            className="h-full"
            style={{ background: "#111" }}
          />
        </div>
        {/* <p className="text-[10px] text-gray-600 font-medium mb-1">Be better than the mid.</p> */}

        <MiniBarChart />
      </motion.div>

      

    </div>
  );
}

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="w-full z-40 px-5 sm:px-10 md:px-24 lg:px-40 pt-8 pb-4 relative"
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-start justify-between gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-3 md:block">
              <div className="flex-1 min-w-0">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-bold leading-[0.92] mb-3 md:pt-6"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    color: "#111",
                  }}
                >
                  Welcome back{" "}
                  <span className="relative text-gray-800 inline-block">
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
              </div>

              <div className="md:hidden flex-shrink-0 mt-2 relative">
                <CircularBadge size={88} onClick={() => setOpen((v) => !v)} />
                <AnimatePresence>
                  {open && (
                    <>
                      <div
                        className="fixed inset-0 z-[998]"
                        onClick={() => setOpen(false)}
                      />
                      <div className="absolute right-0 top-full mt-2 z-[999]">
                        <CourseCard
                          onClose={() => setOpen(false)}
                          origin="top"
                        />
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="font-semibold mb-4"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "#555",
                lineHeight: 1.2,
              }}
            >
              learn at your own{" "}
              <span
                className="inline-block px-2 py-0.5 rounded border border-black/15 align-middle"
                style={{ background: "#fde047", color: "#111", lineHeight: 1.3 }}
              >
                pace
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-[15px] mb-7 leading-relaxed"
              style={{ color: "#666", maxWidth: 400, fontWeight: 500 }}
            >
              The universe of tech is vast. We make programming accessible, fun,
              and cosmic for every developer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="https://courses.telusko.com/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 font-extrabold text-sm
                  px-5 py-2.5 text-white border-2 border-black
                  transition-all duration-150 select-none
                  shadow-[3px_3px_0_#111]
                  hover:shadow-[2px_2px_0_#111]
                  active:shadow-[0px_0px_0_#111]
                  hover:translate-y-[1px]
                  active:translate-y-[3px]
                "
                style={{ background: "#2563eb" }}
              >
                Get started <ArrowRight size={14} />
              </a>

              <a
                href="https://aliencoach.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 font-extrabold text-sm
                  px-5 py-2.5 border-2 border-black/20
                  transition-all duration-150 select-none
                  shadow-[3px_3px_0_#111]
                  hover:shadow-[2px_2px_0_#111]
                  active:shadow-[0px_0px_0_#111]
                  hover:translate-y-[1px]
                  active:translate-y-[3px]
                "
                style={{ color: "#111", background: "transparent" }}
              >
                Try Alien Coach
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block flex-shrink-0 relative"
            style={{ position: "sticky", top: "2rem", alignSelf: "flex-start" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <CircularBadge size={124} />

            <AnimatePresence>
              {open && (
                <div
                  className="absolute right-0 top-full mt-2 z-[999]"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <CourseCard onClose={() => setOpen(false)} origin="top" />
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Three info cards */}
        <HeroCards />
      </section>
    </>
  );
}

export default HeroSection;