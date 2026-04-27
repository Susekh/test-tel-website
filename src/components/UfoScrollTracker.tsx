import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ufoRouteConfig.ts

type UfoWaypoint = {
  progress: number;
  xPercent: number; 
};

const UFO_ROUTE: UfoWaypoint[] = [
  { progress: 0.0, xPercent: 0 },   // start left
  { progress: 0.2, xPercent: 650 },  // move right
  { progress: 0.5, xPercent: 300 },   // left
  { progress: 0.6, xPercent: -300 },  // right 
  { progress: 0.8, xPercent: -300 },   // left 
  { progress: 1.0, xPercent: -300 },  // finish right
];

// ── UFO SVG 
function UfoSvg({ flipped }: { flipped: boolean }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 80 56"
      fill="none"
      className="w-50 h-40 lg:w-60 lg:h-48"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flipped ? "scaleX(-1)" : "scaleX(1)",
        transition: "transform 0.3s ease",
      }}
    >
      {/* tractor beam */}
      {/* <polygon points="28,34 52,34 62,56 18,56" fill="#FFE566" opacity="0.65" /> */}
      {/* body shadow */}
      <ellipse cx="40.5" cy="27.5" rx="27" ry="9" fill="#000" opacity="0.15" />
      {/* body */}
      <ellipse
        cx="40"
        cy="26"
        rx="27"
        ry="9"
        fill="#E8E1FF"
        stroke="#000"
        strokeWidth="2.5"
      />
      {/* dome */}
      <ellipse
        cx="40"
        cy="20"
        rx="13"
        ry="8"
        fill="#C4EFFF"
        stroke="#000"
        strokeWidth="2.5"
      />
      {/* portholes */}
      <circle
        cx="33"
        cy="26"
        r="2.5"
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
      />
      <circle
        cx="40"
        cy="28"
        r="2.5"
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
      />
      <circle
        cx="47"
        cy="26"
        r="2.5"
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
      />
      {/* legs */}
      <line x1="27" y1="34" x2="23" y2="42" stroke="#000" strokeWidth="2" />
      <line x1="40" y1="35" x2="40" y2="43" stroke="#000" strokeWidth="2" />
      <line x1="53" y1="34" x2="57" y2="42" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

function interpolateRoute(progress: number) {
  const route = UFO_ROUTE;

  for (let i = 0; i < route.length - 1; i++) {
    const start = route[i];
    const end = route[i + 1];

    if (progress >= start.progress && progress <= end.progress) {
      const range = end.progress - start.progress;
      const localT = (progress - start.progress) / range;

      return (
        start.xPercent +
        (end.xPercent - start.xPercent) * localT
      );
    }
  }

  return route[route.length - 1].xPercent;
}

export default function UfoScrollTracker({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    Route-driven X position
  */

  const rawX = useTransform(scrollYProgress, (v) => {
    return interpolateRoute(v);
  });

  /*
    Direction detection
  */

  const [flipped, setFlipped] = useState(false);
  const prevX = useRef(0);

  useEffect(() => {
    return rawX.on("change", (v) => {
      setFlipped(v < prevX.current);
      prevX.current = v;
    });
  }, [rawX]);

  /*
    Smooth movement
  */

  const springX = useSpring(rawX, {
    stiffness: 80,
    damping: 14,
    mass: 0.6,
  });

  /*
    Bobbing animation
  */

  const [bobY, setBobY] = useState(0);

  useEffect(() => {
    let frame: number;

    const tick = (t: number) => {
      setBobY(Math.sin(t / 600) * 6);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hidden lg:block lg:sticky top-40 z-30 w-full pointer-events-none select-none h-0">
      <div className="relative w-full max-w-[940px] mx-auto px-4">
        <motion.div
          style={{
            position: "absolute",
            top: -56,
            left: 0,
            width: "100%",
          }}
        >
          <motion.div
            style={{
              x: useTransform(
                springX,
                (v) => `calc(${v}% - ${(v / 100) * 80}px)`
              ),
              y: bobY,
              display: "inline-block",
            }}
            className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)]"
          >
            <UfoSvg flipped={flipped} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}