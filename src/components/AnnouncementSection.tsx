import { motion } from "framer-motion";
import { ArrowRight, Server, Cloud, GitBranch, Book } from "lucide-react";

function ScribbleArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute z-40 pointer-events-none rotate-6 flex flex-col items-center"
    >
      {/* GLOW BACKDROP */}
      <div className="absolute -top-4 w-32 h-20 bg-blue-400/20 blur-2xl rounded-full animate-pulse"></div>

      {/* TEXT */}
      <div className="relative mb-1 text-xs font-semibold text-blue-500 bg-white px-3 py-1 border border-blue-500 shadow-[2px_2px_0_0_#3b82f6]">
        New Course Launched
        {/* small ping dot */}
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
      </div>

      {/* SVG */}
      <svg width="120" height="90" viewBox="0 0 180 140" fill="none">
        {/* BACK SHADOW CURVE */}
        <path
          d="M20 30 C 100 -20, 160 60, 90 110"
          stroke="#93c5fd"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.2"
        />

        {/* MAIN CURVE */}
        <motion.path
          d="M20 30 C 100 -20, 160 60, 90 110"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 8"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* FLOATING DOTS */}
        <motion.circle
          cx="60"
          cy="20"
          r="2"
          fill="#3b82f6"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.circle
          cx="120"
          cy="60"
          r="2"
          fill="#3b82f6"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />

        {/* LOOP */}
        <motion.path
          d="M110 20 C130 0, 160 20, 130 40 C100 60, 80 30, 110 20"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0.2,
          }}
        />

        {/* ARROW HEAD */}
        <motion.path
          d="M85 105 L95 120 L110 100"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </svg>
    </motion.div>
  );
}

export default function DevOpsCourseSection() {
  const curriculum = [
    "Linux & System Fundamentals",
    "Git & Version Control",
    "CI/CD Pipelines (Jenkins)",
    "Docker & Containerization",
    "Kubernetes & Orchestration",
    "Cloud (AWS Basics)",
    "Infrastructure Automation",
  ];

  const features = [
    {
      icon: <Server size={22} />,
      title: "Hands-on Tools",
      desc: "Learn real DevOps tools used in industry environments.",
      bg: "#D7E9D1",
    },
    {
      icon: <Cloud size={22} />,
      title: "Cloud Ready",
      desc: "Work with AWS and cloud-based deployments.",
      bg: "#D3ECF0",
    },
    {
      icon: <GitBranch size={22} />,
      title: "Real Workflow",
      desc: "Understand complete DevOps lifecycle and pipelines.",
      bg: "#F2EFF9",
    },
  ];

  const enrollUrl =
    "https://learn.telusko.com/courses/complete%20devops%20bootcamp%3A%20master%20devops%20in%2012%20weeks";

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#fffdf8] font-DM-Sans overflow-x-hidden">
      {/* Scribble */}
      <div className="mb-18 mt-4 relative w-full flex justify-center items-center">
        <ScribbleArrow />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="font-Caveat text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight">
          Complete <span className="bg-[#FBB130] px-1">DevOps</span> Bootcamp
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mt-4 px-2">
          Master DevOps in just <b>12 weeks</b> — go from beginner to
          industry-ready with real-world tools and workflows.
        </p>
      </motion.div>

      {/* Hero Grid */}
      <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0, y: -20 }}
          className="relative my-auto"
        >
          <div className="absolute top-[-12px] left-4 z-10 bg-[#FF3B3B] text-white text-[11px] font-black uppercase tracking-[0.08em] px-[10px] py-1 border-2 border-black shadow-[2px_2px_0_#000]">
            New
          </div>

          <img
            src="https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail%2F0667d01b-98b0-484c-a6b2-6ce4f956d2d9.jpg"
            alt="devops"
            className="w-full block"
            style={{ border: "3px solid #000", boxShadow: "7px 7px 0 #000" }}
          />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Curriculum */}
          <div
            className="bg-white p-5"
            style={{ border: "2.5px solid #000", boxShadow: "6px 6px 0 #000" }}
          >
            <h3
              className="text-[13px] font-black uppercase tracking-[0.1em] text-black pb-3 mb-3"
              style={{ borderBottom: "2px solid #000" }}
            >
              What you'll master
            </h3>

            <ul>
              {curriculum.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-[7px] text-sm font-semibold text-[#1a1a1a]"
                  style={{
                    borderBottom:
                      i < curriculum.length - 1 ? "1px dashed #ccc" : "none",
                  }}
                >
                  <span
                    className="w-[18px] h-[18px] rounded-full bg-[#D7F2C1] flex items-center justify-center text-[10px] font-black flex-shrink-0"
                    style={{ border: "2px solid #000" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div
              className="bg-[#F2EFF9] px-4 py-3"
              style={{ border: "2px solid #000", boxShadow: "3px 3px 0 #000" }}
            >
              <p className="text-2xl font-black text-black">12</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500 mt-0.5">
                Weeks
              </p>
            </div>

            <div
              className="bg-[#FFF6D1] px-4 py-3"
              style={{ border: "2px solid #000", boxShadow: "3px 3px 0 #000" }}
            >
              <p className="text-sm sm:text-base font-black text-black leading-tight">
                Beginner → Intermediate
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500 mt-0.5">
                Level
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 justify-center flex flex-wrap gap-3">
            <a href={enrollUrl} target="_blank" className="w-full">
              <button className="w-full rounded-md cursor-pointer flex items-center justify-center gap-2 px-6 py-[11px] text-[13px] font-black uppercase tracking-[0.07em] bg-[#4F6BFF] text-white border-[2.5px] border-black shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000] transition-all duration-100">
                Enroll Now <ArrowRight size={15} />
              </button>
            </a>

            <a href={enrollUrl} target="_blank" className="w-full">
              <button className="w-full rounded-md cursor-pointer flex items-center justify-center gap-2 px-6 py-[11px] text-[13px] font-black uppercase tracking-[0.07em] bg-white text-black border-[2.5px] border-black shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000] transition-all duration-100">
                View Curriculum <Book size={15} />
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((card, i) => (
          <div
            key={i}
            className="group p-6 text-center transition-all rounded-2xl duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px]"
            style={{
              backgroundColor: card.bg,
              border: "2.5px solid #000",
              boxShadow: "5px 5px 0 #000",
            }}
          >
            <div className="mb-3 flex justify-center transition-transform duration-150 group-hover:scale-110">
              {card.icon}
            </div>

            <h4 className="font-black text-[15px] mb-1 text-black uppercase tracking-[0.05em]">
              {card.title}
            </h4>

            <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div
        className="mt-12 sm:mt-14 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-5 sm:px-7 py-6"
        style={{ border: "2.5px solid #000", boxShadow: "6px 6px 0 #000" }}
      >
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-black text-black">
            Become a DevOps Engineer in 12 Weeks
          </h3>

          <p className="text-sm text-[#333] mt-1">
            Start learning today and build the skills companies are hiring for
            right now.
          </p>
        </div>

        <a href={enrollUrl} target="_blank" className="max-sm:w-full">
          <button className="w-full group cursor-pointer flex items-center justify-center gap-2 px-7 py-[13px] text-[13px] font-black uppercase tracking-[0.07em] bg-black text-white border-[2.5px] border-black shadow-[4px_4px_0_#555] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#555] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#555] transition-all duration-100">
            Start Now <ArrowRight size={15} />
          </button>
        </a>
      </div>
    </section>
  );
}
