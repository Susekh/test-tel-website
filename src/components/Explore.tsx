import { motion } from "framer-motion";

function Explore() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200 },
    },
  };

  const floatingIcon = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 15, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut" as const,
      },
    },
  };

  const buttonPulse = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div
      className="
        mb-20
        relative
        flex
        py-18
        px-20
        overflow-hidden

        border-[6px]
        border-black
        bg-[#F4F6FF]

        max-[1080px]:flex
        max-[1080px]:flex-col
        max-sm:px-4
      "
    >
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* GRID */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="gridPattern"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M48 0H0V48"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
        
        <motion.svg
          className="absolute top-[18%] left-[10%]"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          animate={{ rotate: [0, 8, -8, 0], y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            width="80"
            height="80"
            fill="#7DD000"
            stroke="black"
            strokeWidth="5"
          />
        </motion.svg>

        {/* TRIANGLE */}
        <motion.svg
          className="absolute bottom-[20%] right-[12%]"
          width="90"
          height="90"
          viewBox="0 0 100 100"
          animate={{ rotate: [0, -10, 10, 0], y: [0, 14, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon
            points="50,0 100,100 0,100"
            fill="#00CEB3"
            stroke="black"
            strokeWidth="5"
          />
        </motion.svg>

        {/* CIRCLE */}
        <motion.svg
          className="absolute top-[60%] left-[25%]"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="#FF6B6B"
            stroke="black"
            strokeWidth="5"
          />
        </motion.svg>

        {/* ALIEN GLOW */}
        <div
          className="
            absolute
            top-[30%]
            right-[30%]
            w-[420px]
            h-[420px]
            bg-[#7DD000]
            opacity-[0.18]
            blur-[120px]
            rounded-full
          "
        />
      </div>

      {/* Headline */}
      <div
        className="
          z-40
          flex
          justify-center
          items-center
          w-full
          font-Poppins
          text-[3rem]
          font-bold
          text-black

          max-md:text-[2.2rem]
          max-sm:text-[1.7rem]
          max-sm:w-full
        "
      >
        <div className="w-full">
          <motion.h1
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            className="max-lg:text-center"
          >
            {"Explore".split("").map((char, i) => (
              <motion.span variants={letter} key={i}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h1
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-lg:text-center z-[1000]"
          >
            {"Our AI Alien Coach".split("").map((char, i) => (
              <motion.span variants={letter} key={i}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Button */}
      <div
        className="
          w-full
          z-40
          flex
          items-center
          min-[1080px]:ml-30

          max-[1080px]:justify-center
          max-[1080px]:mt-6
        "
      >
        <a className="block" target="_blank" href="https://aliencoach.com/">
          <motion.button {...buttonPulse}>
            <div className="rounded-full p-[3px] bg-black">
              <div className="p-3 bg-[#093EC6] rounded-full relative border-4 border-black">

                {/* Floating icons */}
                <motion.img
                  loading="lazy"
                  className="h-5 absolute -top-2 left-8 bg-white py-[1px] px-2 rounded-full border-2 border-black"
                  src="/python1.svg"
                  alt="Python"
                  variants={floatingIcon}
                  animate="animate"
                />

                <motion.img
                  loading="lazy"
                  className="h-5 absolute -bottom-2 left-40 bg-white py-[1px] px-2 rounded-full border-2 border-black"
                  src="/c++.svg"
                  alt="C++"
                  variants={floatingIcon}
                  animate="animate"
                />

                <motion.img
                  loading="lazy"
                  className="h-5 absolute bottom-12 -right-3 bg-white py-[1px] px-2 rounded-full border-2 border-black"
                  src="/js12.svg"
                  alt="JavaScript"
                  variants={floatingIcon}
                  animate="animate"
                />

                <div className="flex gap-2 font-Poppins font-bold text-white py-2 px-16 rounded-full bg-blue-700 cursor-pointer border-4 border-black shadow-[4px_4px_0px_black]">
                  <span>Try Our AI Alien Coach</span>
                </div>
              </div>
            </div>
          </motion.button>
        </a>
      </div>

      {/* Background image */}
      <motion.img
        className="absolute top-0 right-2/30 hidden xl:block max-[1080px]:h-full max-[1080px]:right-0"
        src="/explore.svg"
        alt=""
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}

export default Explore;