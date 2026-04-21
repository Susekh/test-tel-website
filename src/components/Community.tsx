import { motion } from "framer-motion";

function Community() {
  const links = [
    {
      href: "https://discord.com/invite/D8hWe9BqfF",
      src: "/discord.png",
      alt: "Discord",
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.telusko.learn&hl=en_IN",
      src: "/playstore.svg",
      alt: "Play Store",
    },
    {
      href: "https://apps.apple.com/in/app/telusko/id6470615366",
      src: "/appstore.svg",
      alt: "App Store",
    },
    {
      href: "https://www.youtube.com/@Telusko",
      src: "/youtube1.svg",
      alt: "YouTube",
    },
    {
      href: "https://www.instagram.com/telusko_edutech",
      src: "/insta.svg",
      alt: "Instagram",
    },
  ];

  // Variants for animation
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="my-20 mt-40 relative flex justify-end items-center gap-8 max-[1325px]:flex-col">
      {/* Heading */}
      <motion.div
        className="font-Caveat text-[2.65rem] max-md:text-[2rem] leading-tight"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="max-md:flex max-md:flex-col max-md:text-center leading-none">
          Explore Our{" "}
          <span className="font-bold text-[#017E84] text-[4rem] max-md:text-[3rem] leading-none">
            Community!
          </span>
        </h1>
      </motion.div>

      {/* Links */}
      <nav
      className="flex items-center justify-center gap-4 p-4 rounded-full shadow-inner"
      aria-label="Community Links"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"

          aria-label={link.alt}
          className="
            relative flex items-center justify-center
            w-16 h-16 
          "
        >
          <img
            className="
              w-8 h-8 object-contain  duration-300
            "
            src={link.src}
            alt={link.alt}
          />
        </a>
      ))}
    </nav>
    </section>
  );
}

export default Community;