import CourseLogo from "./CourseLogo";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import CoursesGrid from "./CourseGrid";

// const pastelPalette = [
//   "#D7E9D1",
//   "#D3ECF0",
//   "#F2EFF9",
//   "#FFE5E5",
//   "#FFF6D1",
//   "#E0D7F9",
//   "#CFF5E7",
//   "#FADADD",
//   "#E8F3D6",
//   "#E1F7F5",
// ]

type Course = {
  courseId?: string;
  courseName?: string;
  courseDescription?: string;
  courseImage?: string;
  coursePrice?: number;
  createdAt?: string;
  courseUrl?: string;
};

type CourseProps = {
  courses: Course[];
  courseLoading: boolean;
  courseError: null | string;
};

function Courses({ courses, courseLoading, courseError }: CourseProps) {
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
  };

  if (courseLoading || courseError || courses.length === 0) return null;

  return (
    <div className="relative bg-bottom bg-[url('/eclipse1.png')] flex flex-col items-center overflow-clip">
      {/* curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[80px] sm:h-[100px] lg:h-[120px]"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-md:mb-10"
      >
        <CourseLogo />
      </motion.div>

      {/* Info box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="-mt-[60px] flex items-center px-2 justify-center"
      >
        <div className="z-[49] max-[500px]:flex-col max-[500px]:gap-2 flex items-center justify-center gap-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] py-3 px-6">
          <p className="text-sm font-semibold text-black">
            Choose the right course for your goal
          </p>
          <div className="w-px h-4 bg-black/20 max-[500px]:hidden" />
          <a
            target="_blank"
            href="https://courses.telusko.com/learn"
            className="relative flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.08em] text-black bg-[#8BB8F8] border-2 border-black shadow-[3px_3px_0px_0px_#000] px-4 py-1.5 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
          >
            <Star
              size={11}
              className="absolute -top-[7px] -left-[7px] text-black fill-black"
            />
            <Star
              size={11}
              className="absolute -bottom-[7px] -right-[7px] text-black fill-black"
            />
            Explore all Courses
          </a>
        </div>
      </motion.div>

      {/* Main section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="my-10 w-full flex px-4 justify-center relative"
      >
        <div
          className="w-[70%] max-sm:w-full grid grid-cols-4 max-[1325px]:grid-cols-1 items-start gap-4 p-8 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_#000]"
          style={{
            backgroundColor: "#f9f9f9",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        >
          {" "}
          {/* Left section */}
          <motion.div
            variants={cardVariant}
            className="font-DM-Sans lg:sticky top-8 flex flex-col gap-1"
          >
            <span className="text-[2.6rem] leading-[1.1] font-extrabold text-black tracking-tight">
              Discover
            </span>

            <div className="flex flex-col gap-1.5 my-1">
              <span className="self-start border border-dashed border-[#241F5A] px-3 py-0.5 text-[1rem] font-medium text-[#241F5A] bg-[#F0ECFD]">
                newly launched courses
              </span>
              <span className="self-start border border-dashed border-[#5A4300] px-3 py-0.5 text-[1rem] font-medium text-[#5A4300] bg-[#FDFAE9]">
                expert-crafted content
              </span>
              <span className="self-start border border-dashed border-[#063A36] px-3 py-0.5 text-[1rem] font-medium text-[#063A36] bg-[#EEF9F8]">
                real-world skills
              </span>
            </div>

            <span className="text-[2.6rem] leading-[1.1] font-extrabold text-black tracking-tight">
              and everything
              <br />
              in between.
            </span>
          </motion.div>
          {/* Courses */}
          <CoursesGrid courses={courses} />
        </div>
      </motion.div>
    </div>
  );
}

export default Courses;
