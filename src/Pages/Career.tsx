import { ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";

const photos = [
  { image: "NavinReddyheadshot.webp" },
  { image: "kiranreddy.webp" },
  { image: "harsh.jpeg" },
  { image: "hyderabbas.webp" },
  { image: "Pravin-Reddy.webp" },
  { image: "Gaurav-Sharma.webp" },
  { image: "Ishann.webp" },
  { image: "Naman.webp" }
];

const openPositions = [
  {
    id: 2,
    title: "Video Editor",
    location: "On-site Pune, India",
    type: "Full-time",
    experience: "0-3",
    description: "Join our editorial team to review, edit, and refine educational content across multiple formats including videos to ensure quality and consistency.",
    applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfyvD1EyeQCxP9GGsLEbQBZj5HoR9bV1R8wYf56rxG7_joUyg/viewform",
  },
  {
    id: 1,
    title: "Content Creator",
    location: "Remote, India",
    experience: "0-3",
    type: "Full-time / Part-time",
    description: "Join our content team to create engaging educational content in various formats including videos, articles, and exercises.",
    applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdQ2RNqFFQxW95w0Cj4ICzCGe5qhnMRbSdQnwJYo_OgNJCPaA/viewform",
  },
  
];

function Logo() {
  return (
    <span className=" relative md:text-[5.75rem] text-[3.25rem]   text-[#FBB130] font-Caveat font-[700]">
      Aliens
      <span className="absolute inset-0  max-md:-left-11 max-md:top-3 -z-1 -left-3 top-8 ">
        <svg
          className="max-md:h-11"
          width="227"
          height="65"
          viewBox="0 0 227 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M216.932 44.6803C223.284 44.034 224.593 35.6203 221.329 31.4853C221.355 31.1519 221.359 30.8196 221.362 30.4873C229.287 28.833 228.537 14.4973 220.011 15.1847C219.11 15.2515 218.209 15.296 217.29 15.3858C222.701 11.885 221.163 0.29018 213.617 0.906907C147.404 6.26269 81.2121 11.6175 14.9994 16.9733C6.82025 17.6434 7.11819 29.8974 14.0422 32.0797C11.5641 32.2022 9.10643 32.3237 6.62724 32.4242C-2.10071 32.7893 -1.27486 47.8298 7.39082 47.8664C16.7345 47.9136 26.0556 47.9178 35.3927 47.8326C32.4513 48.1331 29.5097 48.4336 26.5476 48.7351C17.9279 49.6263 18.63 65.0715 27.3112 64.1772C90.5317 57.685 153.731 51.1716 216.952 44.6793L216.932 44.6803Z"
            fill="black"
          />
        </svg>
      </span>
    </span>
  );
}

function Career() {
  return (
    <section className="mb-20">
      <div className=" font-DM-Sans min-xl:px-30 sm:p-8 p-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#111827] text-[2.625rem] md:text-[4.125rem] max-sm:text-[2.625rem]"
        >
          Join Our Team of{" "}
          <span className="max-[445px]:block max-[445px]:-mt-6"><Logo /></span>
        </motion.h1>
      </div>

      <div className="max-sm:-mt-5 flex max-lg:flex-col items-start lg:items-center gap-6 -mt-16 xl:px-30 sm:p-8 p-4">
        {/* images */}
        <motion.div
          className="flex shrink-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {photos.map((photo, index) => (
            <motion.img
              loading="lazy"
              key={index}
              src={"/team/" + photo.image}
              className={`h-12 w-12 sm:w-18 sm:h-18 rounded-full border-2 border-white object-cover ${
                index !== 0 ? "-ml-4" : ""
              }`}
              alt={`team-${index}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-base md:text-[1.5rem] max-w-[44ch]"
        >
          At Telusko, we're passionate about education and technology. We're looking
          for talented individuals who share our vision of making quality tech
          education accessible to everyone.
        </motion.p>
      </div>

      <motion.div
        className="mt-5 flex w-full justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <table className="hidden md:block w-full font-DM-Sans ">
          <tr className="bg-gray-100 ">
            <td className="font-bold max-lg:text-[0.875rem] text-[1rem] text-[#2C2D2D]">
              POSITION
            </td>
            <td className=" font-bold max-lg:text-[0.875rem] text-[1rem] text-[#2C2D2D]">
              LOCATION
            </td>
            <td className=" font-bold max-lg:text-[0.875rem] text-[1rem] text-[#2C2D2D]">
              EXPERIENCE
            </td>
            <td className=" font-bold max-lg:text-[0.875rem] text-[1rem] text-[#2C2D2D]">
              JOB TYPE
            </td>
            <td></td>
          </tr>
          {openPositions.map((job, index) => {
            return (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#]"
              >
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.experience} Year</td>
                <td>{job.type}</td>
                <td>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2 px-4.5 text-sm gap-2 justify-self-end bg-btn cursor-pointer shadow-[4px_4px_0_0_#000] hover:bg-[#000] duration-300 w-fit text-white  font-[600]  flex justify-center"
                    target="_blank"
                    href={job.applyLink}
                  >
                    Apply Now <ArrowRightFromLine size={16} />
                  </motion.a>
                </td>
              </motion.tr>
            );
          })}
        </table>
      </motion.div>

      {/* Mobile Cards */}
      <div className=" md:hidden flex flex-col gap-4">
        {openPositions.map((job, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                background: `${(index + 1) % 2 == 0 ? "#FFF" : "#F3F4F6"}`,
              }}
              className="py-2.5 px-6 w-full flex max-[484px]:flex-col justify-between gap-4"
            >
              <div className="flex flex-col">
                <h3 className="text-[1rem] sm:text-[1.25rem]">{job.title}</h3>
                <p className="text-[.75rem] sm:text-[1rem]">
                  {job.location} / {job.experience} / {job.type}
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 px-4 bg-btn cursor-pointer hover:bg-[#000] gap-2 duration-300 w-fit shadow-[4px_4px_0_0_#000] text-white text-[0.75rem] font-[600] flex justify-center items-center"
                target="_blank"
                href={job.applyLink}
              >
                Apply Now <ArrowRightFromLine size={16} />
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Career;
