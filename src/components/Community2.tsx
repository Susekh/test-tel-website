import { motion } from "motion/react";
import Social from "./Social";

function Community2() {

  const socialLinks = [
    {
      name: "LinkedIn",
      src: "/socials/linkedin.svg",
      url: "https://www.linkedin.com/in/navinreddy20"
    },
    {
      name: "Youtube",
      src: "/socials/youtube.svg",
      url: "https://www.youtube.com/@Telusko",
    },
    {
      name: "Discord",
      src: "/socials/discord.svg",
      url: "https://discord.com/invite/D8hWe9BqfF",
    },
    {
      name: "Facebook",
      src: "/socials/facebook-svgrepo-com.svg",
      url: "https://www.facebook.com/teluskolearnings/",
    },
    {
      name: "Instagram",
      src: "/socials/instagram.svg",
      url: "https://www.instagram.com/telusko_edutech",
    },
    {
      name: "Play Store",
      src: "/socials/playstore1.svg",
      url: "https://play.google.com/store/apps/details?id=com.telusko.learn&hl=en_IN",
    },
    {
      name: "App Store",
      src: "/socials/appstore.svg",
      url: "https://apps.apple.com/in/app/telusko/id6470615366",
    },
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="overflow-hidden relative py-20 px-4 my-20 mt-40 flex flex-col gap-20 justify-end items-center ">

      {/* Decorative neo-brutal shapes */}
      <div className="pointer-events-none absolute top-5 -left-32 lg:-left-10 w-40 h-40 bg-[#d8f250] border-2 border-black rotate-6 shadow-[6px_6px_0_#000]" />

      <div className="pointer-events-none absolute bottom-10 -right-12 w-32 h-32 bg-[#39d0a5] border-2 border-black rounded-full shadow-[6px_6px_0_#000]" />

      {/* Dotted pattern boxes (kept but improved) */}
      <div className="absolute overflow-hidden top-12 -right-45 sm:-right-15 h-[120px] w-[200px] border-2 border-black bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:6px_6px] rounded-lg" />

      <div className="absolute top-25 min-sm:block -left-45 sm:-left-15 h-[120px] w-[200px] border-2 border-black bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:6px_6px] rounded-lg" />

      {/* Heading */}
      <motion.div
        className="font-Caveat text-[2.8rem] max-md:text-[2rem] leading-tight text-center px-4"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="max-md:flex max-md:flex-col max-md:text-center leading-none">
          Explore Our {" "}
          <span className="font-bold text-[#017E84] text-[4rem] max-md:text-[3rem] leading-none inline-block px-3">
            Community!
          </span>
        </h1>
      </motion.div>

      {/* Social Container */}
      <div className="relative w-full max-w-5xl mx-auto">

        {/* Background card */}
        <div className="absolute inset-[-18px] -z-10 border-2 border-black rounded-2xl bg-white shadow-[8px_8px_0_#000]" />

        <div className="flex gap-4 flex-wrap justify-center p-6">
          {socialLinks.map((social, index) => {
            return (
              <Social
                key={index}
                url={social.url}
                index={index}
                src={social.src}
              >
                {social.name}
              </Social>
            );
          })}
        </div>
      </div>

      {/* Extra floating accents for fullness */}
      <div className="pointer-events-none absolute top-1/2 left-6 w-6 h-6 bg-black rotate-45" />

      <div className="pointer-events-none absolute bottom-6 left-1/3 w-5 h-5 border-2 border-black bg-[#ff7e5f]" />

    </section>
  );
}

export default Community2;