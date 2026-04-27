import { useRef } from "react";
import { motion, useInView } from "motion/react";

function Video() {
  const ref = useRef(null);

  // triggers once when 60% of the component enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="w-full px-5 md:pt-18 sm:px-10 md:px-24 lg:px-40 pb-12 md:pb-20 relative isolate z-0">
      <motion.div
        className="relative max-w-[1200px] mx-auto w-full z-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          border: "1.5px solid #e2e2e2",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
          background: "#18181b",
        }}
      >
        {/* Browser chrome top bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "#18181b", borderBottom: "1px solid #2e2e33" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#FF5F57", border: "1px solid #e0443e" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#FEBC2E", border: "1px solid #d4a017" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#28C840", border: "1px solid #1aab2e" }}
          />
          <div
            className="mx-auto flex items-center gap-1.5 px-4 py-1 rounded"
            style={{ background: "#2a2a2e", minWidth: 180 }}
          >
            <span className="text-[11px] text-white/30 font-medium tracking-wide truncate">
              courses.telusko.com
            </span>
          </div>
        </div>

        {/* Video - always visible, autoplay triggered on scroll into view */}
        <div className="w-full aspect-video relative">
          {isInView ? (
            <motion.iframe
              src="https://www.youtube.com/embed/7xIpeyBc-jY?si=k4aUwOZrMec1KMbP&autoplay=1&controls=1&modestbranding=1&rel=0&mute=1&loop=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          ) : ""}
        </div>
      </motion.div>
    </div>
  );
}

export default Video;