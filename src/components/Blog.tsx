import { motion } from "framer-motion";
import { SquareChevronRight } from "lucide-react"

const blogs = [
  {
    image: "blog/blog1.svg",
    title: "Inside JDK 25: Features, Fixes, and Future of Java",
    topic: "java",
    description:
      "JDK 25 is dropping this September, and it’s packed with serious upgrades that will transform how you write Java code. Among the headline features are Scoped Values for safer concurrency...",
    link: "https://blogs.telusko.com/blog/Inside%20JDK%2025:%20Features,%20Fixes,%20and%20Future%20of%20Java",
  },
  {
    image: "blog/blog2.svg",
    title: "JBang: scripting in Java",
    topic: "java",
    description:
      "JBang makes running Java code as simple as running a Python script. With just one installation and a single command, you can write, edit, and run Java programs directly from your terminal - no need to set up full projects or complex build tools...",
    link: "https://blogs.telusko.com/blog/JBang:%20scripting%20in%20Java",
  },
];

function Blog() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <div className="my-10 w-full flex justify-center relative">
      <div className="w-[70%] max-sm:w-full grid grid-cols-3 max-[1325px]:grid-cols-1 bg-[#F2F5FA] gap-4 p-4 rounded-lg">
        {/* Left section */}
        <motion.div 
        initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.5 }}
        className="font-DM-Sans flex flex-col max-[1280px]:gap-4">
          <h1 className="text-[2rem] font-bold">Blog and tips</h1>
          <h1 className="text-[1.375rem] font-[600]">
            Stay motivated and improve faster with practical tips from our team.
          </h1>
          <a 
          className="block min-[1280px]:mt-auto"
          target="_blank"
          href="https://blogs.telusko.com/">
          <button className="font-Grostek flex justify-center items-center gap-2 cursor-pointer hover:scale-102  active:scale-95 hover:bg-[#000] shadow-[4px_4px_0_0_#000]  duration-300  py-2.5 w-fit px-8 bg-btn text-white font-medium">
            See  more <SquareChevronRight size={16} />
          </button></a>
        </motion.div>

        {/* Right section */}
        <motion.div
          className="grid grid-cols-2 col-span-2 gap-4 max-[880px]:flex max-[880px]:flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {blogs.map((blog, i) => (
            <motion.a
            href={blog.link}
            target="_blank"
              key={i}
              className="p-2  flex flex-col gap-2 w-full bg-white border-[1px] border-[#DAE1ED] cursor-pointer shadow-[4px_4px_0_0_#DAE1ED]"
              variants={card}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <img
               loading="lazy"
                className=" h-48 object-cover object-center"
                src={blog.image}
                alt=""
              />
              <p className="text-[.5rem] px-2.5 py-1 text-white bg-[#3C6AE2] self-start rounded-2xl">
                {blog.topic}
              </p>
              <h1 className="text-[.875rem]">{blog.title}</h1>
              <p className="text-[.625rem] text-[#656E84]">
                {blog.description}
                <a className=" text-blue-600 ml-1 " href={blog.link} target="_blank">
                  Read More 
                </a>
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;