import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

function Quote() {
  return (
    <div className="my-24 w-full flex justify-center px-6 font-DM-Sans">
      <motion.div
        className="relative w-full max-w-3xl text-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Large decorative quote mark */}
        <motion.span
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9rem] leading-none font-black text-black/8 select-none pointer-events-none"
          variants={itemVariant}
        >
          "
        </motion.span>

        {/* Top rule */}
        <motion.div className="flex items-center gap-4 justify-center mb-8" variants={itemVariant}>
          <div className="h-[2px] w-12 bg-black" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
            Founder's Note
          </span>
          <div className="h-[2px] w-12 bg-black" />
        </motion.div>

        {/* Quote text */}
        <motion.h1
          className="font-Playfair text-2xl md:text-3xl lg:text-[2.1rem] font-medium leading-[1.6] text-[#111] relative z-10"
          variants={itemVariant}
        >
          "The greatest applications don't boast of complexity, but whisper
          simplicity, yet powerful enough to transform millions of lives like
          WhatsApp."
        </motion.h1>

        {/* Attribution */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-1 relative z-10"
          variants={itemVariant}
        >
          {/* Accent line above name */}
          <div className="w-8 h-[3px] bg-[#4F6BFF] mb-3" />

          <p className="font-Satisfy text-xl md:text-2xl font-semibold text-[#111]">
            Navin Reddy
          </p>
          <p className="text-[0.78rem] font-black uppercase tracking-[0.18em] text-black/40 mt-0.5">
            Founder &amp; CEO
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Quote;