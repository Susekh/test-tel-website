import { motion } from "framer-motion";
import { X, Server, Cloud, GitBranch, ArrowRight } from "lucide-react";

interface FeatureTag {
  icon: React.ReactNode;
  label: string;
}

interface CourseCardProps {
  onClose: () => void;
  origin?: "top" | "bottom";
}

const COURSE_THUMBNAIL =
  "https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail%2F0667d01b-98b0-484c-a6b2-6ce4f956d2d9.jpg";
const ENROLL_URL =
  "https://learn.telusko.com/courses/complete%20devops%20bootcamp%3A%20master%20devops%20in%2012%20weeks";


const featureTags: FeatureTag[] = [
  { icon: <Server size={9} />, label: "Docker & K8s" },
  { icon: <Cloud size={9} />, label: "AWS Cloud" },
  { icon: <GitBranch size={9} />, label: "CI/CD & Git" },
];

function CourseCard({ onClose, origin = "bottom" }: CourseCardProps) {
  const fromY = origin === "bottom" ? 8 : -8;

  return (
    <motion.div
      initial={{ opacity: 0, y: fromY, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: fromY, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
      className="z-[999] overflow-hidden relative border-2 border-neutral-800"
      style={{
        width: 300,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 8px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* close */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-black/20 hover:bg-black/35 transition-colors"
      >
        <X size={11} strokeWidth={2.5} color="#fff" />
      </button>

      {/* full-bleed image with gradient overlay + text on top */}
      <div className="relative" style={{ height: 170 }}>
        <img
          src={COURSE_THUMBNAIL}
          alt="DevOps Bootcamp"
          className="w-full h-full object-cover block"
        />

        {/* gradient scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
          }}
        />

        {/* NEW tag */}
        <span className="absolute top-1 left-3 bg-red-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-2 py-[3px] rounded-[4px] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          New
        </span>

        {/* title + level overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <div className="flex items-end justify-between gap-2">
            <h3
              className="font-bold text-[14px] leading-snug text-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Complete DevOps Bootcamp
            </h3>
            <div className="flex-shrink-0 text-right pb-0.5">
              <p className="text-[9px] font-semibold text-white/60 uppercase tracking-wide leading-none mb-0.5">
                12 weeks
              </p>
              <p className="text-[9px] font-bold text-blue-300 uppercase tracking-wide leading-none">
                Beginner → Mid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div
        className="px-4 pt-3 pb-4"
        style={{
          background: "linear-gradient(160deg, #eff4ff 0%, #ffffff 55%)",
        }}
      >
        <p className="text-[11.5px] text-gray-500 leading-relaxed mb-3">
          Go from zero to industry-ready — Docker, Kubernetes, AWS, CI/CD and more.
        </p>

        {/* feature tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {featureTags.map((f: FeatureTag, i: number) => (
            <span
              key={i}
              className="flex items-center gap-1 text-[10px] font-bold text-blue-700 bg-blue-50 border-1 border-black px-1 py-[3px] rounded-[4px]"
            >
              <span className="text-blue-600">{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>
        <a
          href={ENROLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button
            className="
              w-full flex items-center justify-center gap-2
              px-4 py-2.5
              text-[12px] font-extrabold text-white
              bg-blue-600
              border-2 border-black
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-100
              hover:translate-y-[1px]
              hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              active:translate-y-[3px]
              active:shadow-none
              cursor-pointer
              select-none
            "
          >
            Enroll Now <ArrowRight size={13} />
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default CourseCard;