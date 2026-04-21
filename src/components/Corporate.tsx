import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Corporate() {
  return (
    <div className="my-20 w-full flex justify-center font-DM-Sans px-4">
      <motion.div
        className="relative w-full max-w-6xl overflow-hidden"
        style={{ border: "2.5px solid #000", boxShadow: "7px 7px 0 #000" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Grid background layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ccc9bb 1px, transparent 1px), linear-gradient(90deg, #ccc9bb 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 90%)",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row">

          {/* Left — image pane */}
          <div
            className="w-full md:w-1/2 min-h-[260px] md:min-h-[420px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/Corporate.webp')",
              borderRight: "2.5px solid #000",
            }}
          />

          {/* Right — content pane */}
          <motion.div
            className="w-full md:w-1/2 bg-[#e8e6df] p-10 flex flex-col gap-5 justify-center"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Badge */}
            <span
              className="text-[11px] font-black uppercase tracking-widest text-[#111] w-fit px-3 py-1.5 bg-[#F5F06A]"
              style={{ border: "2px solid #000" }}
            >
              Corporate Training
            </span>

            {/* Heading */}
            <h2 className="font-black text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.05] uppercase tracking-tight text-[#111]">
              Master Java,{" "}
              <span
                className="bg-[#4F6BFF] text-white px-1 italic"
                style={{ borderBottom: "3px solid #000" }}
              >
                Spring Boot
              </span>
              {" &"} Microservices
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-black" />
              <div className="h-[2px] flex-1 bg-black/15" />
            </div>

            {/* Body */}
            <p className="text-[0.88rem] text-[#444] leading-relaxed">
              Elevate your team's skills with expert-led training in the latest
              Java technologies. Our tailored curriculum, experienced instructors,
              and hands-on approach will ensure your team is equipped to excel in
              today's competitive landscape.
            </p>

            {/* CTA */}
            <Link
              to="/contact-us"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <motion.button
                className="inline-flex items-center gap-2 bg-[#111] text-white text-[0.82rem] font-black uppercase tracking-wider px-6 py-3 w-fit"
                style={{ boxShadow: "4px 4px 0 #4F6BFF" }}
                whileHover={{ boxShadow: "2px 2px 0 #4F6BFF", x: 2, y: 2 }}
                whileTap={{ boxShadow: "1px 1px 0 #4F6BFF", x: 3, y: 3 }}
                transition={{ duration: 0.12 }}
              >
                Contact Us →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Corporate;