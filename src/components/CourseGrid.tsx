import { motion } from "framer-motion";

const themes = ["strong", "accent", "muted", "soft", "light", "accent-soft"];

type Course = {
  courseId?: string;
  courseName?: string;
  courseDescription?: string;
  courseImage?: string;
  coursePrice?: number;
  createdAt?: string;
  courseUrl?: string;
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

export default function CoursesGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={cardVariant}
      className="
                col-span-3
                grid
                grid-cols-4
                max-lg:grid-cols-1
                font-Sans
                gap-5
                "
    >
      {courses.map((course, index) => {
        const isHero = index === 0;
        const isSingle = -1;
        const theme = themes[index % themes.length];

        const bodyBg =
          theme === "accent"
            ? "bg-[#F0ECFD]"
            : theme === "accent-soft"
              ? "bg-[#F8F6FE]"
              : theme === "light"
                ? "bg-[#EDF7FA]"
                : theme === "muted"
                  ? "bg-[#EEF9F8]"
                  : theme === "soft"
                    ? "bg-[#EDF6EB]"
                    : theme === "strong"
                      ? "bg-[#FDFAE9]"
                      : "bg-[#FDF1F2]";

        const titleColor =
          theme === "accent" || theme === "accent-soft"
            ? "text-[#4B3F72]"
            : theme === "strong"
              ? "text-[#6B4F00]"
              : "text-[#2C2D2D]";

        const descColor =
          theme === "accent" || theme === "accent-soft"
            ? "text-[#6E6A9E]"
            : "text-[#5F6368]";

        const tagColor =
          theme === "accent" || theme === "accent-soft"
            ? "text-[#8A84C6]"
            : "text-[#7A7A7A]";

        const borderColor =
          theme === "accent"
            ? "#241F5A"
            : theme === "accent-soft"
              ? "#2F2A63"
              : theme === "light"
                ? "#08363F"
                : theme === "muted"
                  ? "#063A36"
                  : theme === "soft"
                    ? "#153524"
                    : theme === "strong"
                      ? "#5A4300"
                      : "#4A1F24";

        const btnClass =
          theme === "accent"
            ? "bg-[#B6A6FF] text-[#241F5A] hover:bg-white border-[#241F5A]"
            : theme === "accent-soft"
              ? "bg-[#CEC4FF] text-[#2F2A63] hover:bg-white border-[#2F2A63]"
              : theme === "light"
                ? "bg-[#8FD6E0] text-[#08363F] hover:bg-white border-[#08363F]"
                : theme === "muted"
                  ? "bg-[#9EDFD8] text-[#063A36] hover:bg-white border-[#063A36]"
                  : theme === "soft"
                    ? "bg-[#9FD79A] text-[#153524] hover:bg-white border-[#153524]"
                    : theme === "strong"
                      ? "bg-[#FFD24D] text-[#5A4300] hover:bg-white border-[#5A4300]"
                      : "bg-[#F4A9B1] text-[#4A1F24] hover:bg-white border-[#4A1F24]";

        const indexColor =
          theme === "accent"
            ? "text-[#7A6FB3]"
            : theme === "light"
              ? "text-[#7AA8B3]"
              : "text-[#8A8A8A]";

        return (
          <motion.div
            key={course.courseId ?? index}
            variants={cardVariant}
            style={{
              border: `2px solid ${borderColor}`,
              boxShadow: `4px 4px 0px 0px ${borderColor}`,
            }}
            whileHover={{
              x: -2,
              y: -2,
              boxShadow: `6px 6px 0px 0px ${borderColor}`,
            }}
            whileTap={{
              x: 1,
              y: 1,
              boxShadow: `2px 2px 0px 0px ${borderColor}`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`
              relative overflow-hidden flex bg-[#0a0a0a]
              hover:cursor-pointer
              ${
                isHero
                  ? "col-span-4 max-lg:col-span-1 flex-row max-lg:flex-col min-h-[240px]"
                  : ""
              }
              ${
                isSingle
                  ? "col-span-2 max-sm:col-span-1 md:w-full flex-col max-sm:flex-col min-h-[180px]"
                  : ""
              }
              ${!isHero ? "flex-col min-h-[200px]" : ""}
            `}
            onClick={() => window.open(course.courseUrl, "_blank")}
          >
            {/* Image */}
            <div
              className={`overflow-hidden flex-shrink-0 ${
                isHero
                  ? "w-[52%] min-h-full max-lg:w-full max-lg:min-h-0"
                  : isSingle
                    ? "max-sm:w-full max-sm:h-40"
                    : "w-full h-36"
              }`}
              style={{
                borderBottom: !isHero ? `2px solid ${borderColor}` : undefined,
                borderRight: isHero ? `2px solid ${borderColor}` : undefined,
              }}
            >
              <img
                src={course.courseImage}
                alt={course.courseName}
                loading="lazy"
                className={`w-full h-full block transition-transform duration-500 hover:scale-105 ${
                  isHero
                    ? "object-contain bg-black max-sm:object-cover max-sm:bg-transparent"
                    : "object-cover"
                }`}
              />
            </div>

            {/* Body */}
            <div
              className={`flex-1 flex flex-col justify-between p-3 ${bodyBg}`}
            >
              <div>
                {isHero && (
                  <div
                    className="w-[22px] h-[3px] mb-3 max-sm:hidden"
                    style={{ backgroundColor: borderColor }}
                  />
                )}
                <p
                  className={`text-[10px] font-medium tracking-[0.14em] uppercase mb-2 ${tagColor}`}
                >
                  Course
                </p>
                <h2
                  className={`font-extrabold uppercase tracking-tight leading-[1.12] mb-2 ${titleColor} ${
                    isHero
                      ? "text-lg lg:text-xl max-sm:text-sm"
                      : "text-sm lg:text-base"
                  }`}
                >
                  {course.courseName}
                </h2>
                <p
                  className={`text-[11px] font-bold leading-relaxed mb-4 line-clamp-3 ${descColor}`}
                >
                  {course.courseDescription}
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-2">
                <a
                  href={course.courseUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full sm:w-auto"
                >
                  <button
                    className={`w-full sm:w-auto cursor-pointer flex items-center justify-center gap-1.5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-200 ${btnClass}`}
                  >
                    Start Learning
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1 9L9 1M9 1H3M9 1V7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>

                <span
                  className={`text-[11px] font-semibold tracking-[0.08em] ${indexColor}`}
                >
                  0{index + 1}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}