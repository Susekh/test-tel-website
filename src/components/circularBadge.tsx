import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { MouseEventHandler } from "react";

const CIRCULAR_TEXT = "NEW COURSE · DEVOPS BOOTCAMP · ";

interface CircularBadgeProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  size?: number;
}

function CircularBadge({
  onClick,
  onHoverStart,
  onHoverEnd,
  size = 124,
}: CircularBadgeProps) {
  const radius = size / 2 - 16;
  const chars = CIRCULAR_TEXT.split("");
  const total = chars.length;
  const center = size / 2;

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      aria-label="View new DevOps course"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center cursor-pointer focus:outline-none"
      style={{ width: size, height: size }}
    >
      {/* static dashed border */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 pointer-events-none"
      >
        <circle
          cx={center}
          cy={center}
          r={center - 2}
          fill="none"
          stroke="#1e1e2e"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      </svg>

      {/* spinning text */}
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        {chars.map((char, i) => {
          const angle =
            (i / total) * 2 * Math.PI - Math.PI / 2;

          const x =
            center + radius * Math.cos(angle);

          const y =
            center + radius * Math.sin(angle);

          const rotation =
            (i / total) * 360;

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${rotation}, ${x}, ${y})`}
              style={{
                fontSize: size < 100 ? 7.5 : 9,
                fontFamily:
                  "'DM Sans', sans-serif",
                fontWeight: 800,
                fill: "#1e1e2e",
                letterSpacing: "0.05em",
              }}
            >
              {char}
            </text>
          );
        })}
      </motion.svg>

      {/* center */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: size * 0.52,
          height: size * 0.52,
          background: "#4F6BFF",
          border: "2px solid #1e1e2e",
          boxShadow: "2px 2px 0 #1e1e2e",
        }}
      >
        <ArrowRight
          size={size < 100 ? 14 : 18}
          color="#fff"
          strokeWidth={2.5}
        />
      </div>
    </motion.button>
  );
}

export default CircularBadge;