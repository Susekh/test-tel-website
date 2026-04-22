import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CourseCard from "./CourseCard";
import CircularBadge from "./circularBadge";

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        className="w-full z-40 px-5 sm:px-10 md:px-24 lg:px-40 pt-16 pb-10 relative"
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff" }}
      >
        {/* ── flex row: left text | right badge (desktop) ── */}
        <div className="flex items-start justify-between gap-4">

          {/* LEFT: hero content */}
          <div className="flex-1 min-w-0">

            {/* mobile: headline row with inline badge */}
            <div className="flex items-start gap-3 md:block">
              <div className="flex-1 min-w-0">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-bold leading-[0.92] mb-4"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#111" }}
                >
                  Welcome back{" "}
                  <span className="relative inline-block">
                    ALIENS
                    <svg className="absolute -bottom-1 left-0" style={{ width: "100%", height: 10 }} viewBox="0 0 200 10" preserveAspectRatio="none">
                      <motion.path d="M0 5 Q50 0 100 5 T200 5" stroke="#7c5cbf" strokeWidth="4" fill="none" strokeLinecap="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                    </svg>
                  </span>
                </motion.h1>
              </div>

              {/* mobile badge — sits top-right of headline, not sticky/fixed */}
              <div className="md:hidden flex-shrink-0 mt-2 relative">
                <CircularBadge size={88} onClick={() => setOpen(v => !v)} />
                <AnimatePresence>
                  {open && (
                    <>
                      <div className="fixed inset-0 z-[998]" onClick={() => setOpen(false)} />
                      <div className="absolute right-0 top-full mt-2 z-[999]">
                        <CourseCard onClose={() => setOpen(false)} origin="top" />
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="font-semibold mb-3"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "#555", lineHeight: 1.2 }}
            >
              learn at your own{" "}
              <span className="inline-block px-2 py-0.5 rounded border border-black/15 align-middle"
                style={{ background: "#fde047", color: "#111", lineHeight: 1.3 }}>
                pace
              </span>
            </motion.p>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-[15px] mb-7 leading-relaxed"
              style={{ color: "#666", maxWidth: 400, fontWeight: 500 }}
            >
              The universe of tech is vast. We make programming accessible,
              fun, and cosmic for every developer.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="https://courses.telusko.com/learn" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-extrabold text-sm px-5 py-2.5 text-white border-2 border-black transition-all active:scale-95 hover:-translate-y-0.5"
                style={{ background: "#2563eb", boxShadow: "3px 3px 0 #111" }}>
                Get started <ArrowRight size={14} />
              </a>
              <a href="https://aliencoach.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-extrabold text-sm px-5 py-2.5 border-2 border-black/20 transition-all active:scale-95 hover:-translate-y-0.5"
                style={{ color: "#111", background: "transparent" }}>
                Try Alien Coach
              </a>
            </motion.div>
          </div>

          {/* RIGHT: desktop sticky badge with hover */}
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
      </section>
    </>
  );
}

export default HeroSection;