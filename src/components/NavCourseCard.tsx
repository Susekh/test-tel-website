import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Course {
  courseId: string | number;
  courseName: string;
  courseDescription: string;
  courseUrl: string;
  courseImage: string;
  tag?: string;
}

interface CourseCardsProps {
  courses?: Course[];
}

const pastelPalette = [
  { bg: "#D7E9D1", accent: "#4a7c59" },
  { bg: "#D3ECF0", accent: "#3a7a8a" },
  { bg: "#F2EFF9", accent: "#6b5ebd" },
  { bg: "#FFE5E5", accent: "#c0605e" },
  { bg: "#FFF6D1", accent: "#b8860b" },
  { bg: "#E0D7F9", accent: "#5a4ea0" },
  { bg: "#CFF5E7", accent: "#2e8b6a" },
  { bg: "#FADADD", accent: "#b56a72" },
  { bg: "#E8F3D6", accent: "#5a7a3a" },
  { bg: "#E1F7F5", accent: "#2e7a74" },
];

export default function CourseCards({ courses = [] }: CourseCardsProps) {
  const total = courses.length;

  return (
    <div className="flex flex-col gap-3 font-[DM_Sans]">

      {/* Grid */}
      <div className="grid grid-cols-6 gap-3">
        {courses.map((course, index) => {
          const remainder = total % 3;
          const isLast = index === total - 1;
          const isSecondLast = index === total - 2;

          let colSpan = 2;
          if (remainder === 1 && isLast) colSpan = 6;
          else if (remainder === 2 && (isLast || isSecondLast)) colSpan = 3;

          const { bg, accent } = pastelPalette[index % pastelPalette.length];

          return (
            <motion.div
              key={course.courseId}
              onClick={() => window.open(course.courseUrl, "_blank")}
              whileHover={{ x: 3, y: 3, boxShadow: "none" }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="flex flex-col overflow-hidden cursor-pointer min-h-[110px]"
              style={{
                gridColumn: `span ${colSpan}`,
                background: bg,
                border: `2px solid ${accent}`,
                borderRadius: "0px",
                boxShadow: `3px 3px 0px 0px ${accent}`,
              }}
            >
              {/* Image */}
              <div
                className="w-full flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  borderBottom: `2px solid ${accent}`,
                }}
              >
                <img
                  src={course.courseImage}
                  alt={course.courseName}
                  loading="lazy"
                  className="w-full block object-contain"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-1 flex-1 p-3">
                {course.tag && (
                  <span
                    className="self-start text-[0.5rem] font-bold uppercase tracking-[0.08em] mb-0.5 px-1.5 py-0.5"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: `1px solid ${accent}`,
                      color: accent,
                      borderRadius: "0px",
                    }}
                  >
                    {course.tag}
                  </span>
                )}

                <h2
                  className="font-extrabold leading-tight tracking-tight text-[#111] m-0 uppercase overflow-hidden"
                  style={{
                    fontSize: "clamp(0.62rem, 1.1vw, 0.82rem)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                  }}
                >
                  {course.courseName}
                </h2>

                <p
                  className="m-0 flex-1 overflow-hidden leading-[1.5]"
                  style={{
                    fontSize: "clamp(0.52rem, 0.9vw, 0.65rem)",
                    color: "rgba(0,0,0,0.5)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                  }}
                >
                  {course.courseDescription}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All - neutral */}
      <div
        className="flex items-center justify-between gap-3 px-[18px] py-[14px]"
        style={{
          background: "#F5F4F0",
          border: "2px solid #C8C5BC",
          borderRadius: "0px",
          boxShadow: "3px 3px 0px 0px #C8C5BC",
        }}
      >
        <div className="min-w-0">
          <p
            className="font-extrabold uppercase tracking-[0.05em] text-[#2a2a2a] m-0"
            style={{ fontSize: "clamp(0.6rem, 1vw, 0.7rem)" }}
          >
            Want to explore more?
          </p>
          <p
            className="text-[#888] mt-[3px] m-0"
            style={{ fontSize: "clamp(0.52rem, 0.85vw, 0.62rem)" }}
          >
            Browse our full catalog of courses across all topics.
          </p>
        </div>

        <motion.a
          href="https://courses.telusko.com/learn/view-all?show=courses&type=1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 2, y: 2, boxShadow: "none" }}
          transition={{ duration: 0.12 }}
          className="flex-shrink-0 font-extrabold uppercase tracking-[0.06em] text-white bg-[#2a2a2a] whitespace-nowrap px-[18px] py-[7px] no-underline inline-block"
          style={{
            fontSize: "clamp(0.52rem, 0.85vw, 0.62rem)",
            border: "2px solid #2a2a2a",
            borderRadius: "0px",
            boxShadow: "2px 2px 0px 0px #C8C5BC",
          }}
        >
          View All <ArrowRight className="inline mx-auto my-auto w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
}