import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { LogIn, ChevronRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const pastelPalette = [
  "#D7E9D1", // soft mint green
  "#D3ECF0", // pale aqua blue
  "#F2EFF9", // light lavender
  "#FFE5E5", // blush pink
  "#FFF6D1", // pastel yellow
  "#E0D7F9", // soft periwinkle
  "#CFF5E7", // mint aqua
  "#FADADD", // baby pink
  "#E8F3D6", // light lime green
  "#E1F7F5", // icy teal
];

type Course = {
  courseId: string;
  courseName: string;
  courseDescription: string;
  courseImage: string;
  coursePrice: number;
  createdAt: string;
  courseUrl: string;
};

function CoursesTextLogo() {
  return (
    <div>
      <span
        className="
          group relative flex gap-3 items-center
          text-gray-800 font-Grostek font-semibold
          px-4 py-2
          bg-white
          border-2 border-black
          rounded-md
          shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
          transition-all duration-200
          hover:-translate-y-[2px]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:bg-yellow-200
          cursor-pointer
          select-none
          w-fit
          "
      >
        COURSES
        <div
          className="
          transition-transform duration-300
          group-hover:rotate-90
      "
        >
          <ChevronRight size={16} strokeWidth={3} />
        </div>
      </span>
    </div>
  );
}

function Navbar({ courses }: { courses: Course[] }) {
  return (
    <nav className="flex w-full items-center py-2">
      <div className="flex items-center gap-8 flex-1">
        <Link className="hidden lg:flex flex-shrink-0" to="/">
          <img className="h-auto w-[100px] max-sm:w-[80px]" src={logo} alt="" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="
                  p-0
                  bg-transparent
                  hover:bg-transparent
                  focus:bg-transparent
                  focus:outline-none
                  focus:ring-0
                  data-[state=open]:bg-transparent
                  data-[active]:bg-transparent
                  shadow-none
                "
              >
                <CoursesTextLogo />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white rounded-lg z-50 shadow-lg">
                <div className="w-[400px] md:w-[500px] xl:w-[680px] 2xl:w-[700px] 3xl:w-[850px]">
                  {courses?.length === 0 ? (
                    <div className="text-center text-gray-600 font-DM-Sans py-4">
                      No Courses Available!
                    </div>
                  ) : (
                    <motion.div className="grid grid-cols-6 gap-1 xl:gap-1.5 2xl:gap-2 3xl:gap-3 font-Montserrat">
                      {courses.map((course, index) => {
                        const total = courses.length;
                        const remainder = total % 3;

                        const isLast = index === total - 1;
                        const isSecondLast = index === total - 2;

                        let spanClass = "col-span-2"; // default = 1 column visually

                        // 1 item remaining → full row
                        if (remainder === 1 && isLast) {
                          spanClass = "col-span-6";
                        }

                        // 2 items remaining → split row equally (1.5 each)
                        else if (remainder === 2 && (isLast || isSecondLast)) {
                          spanClass = "col-span-3";
                        }

                        return (
                          <motion.div
                            key={course.courseId}
                            style={{
                              background:
                                pastelPalette[index % pastelPalette.length],
                            }}
                            onClick={() =>
                              window.open(course.courseUrl, "_blank")
                            }
                            className={`
                    flex flex-col gap-1.5
                    p-1.5 lg:p-2

                    border-2 border-black
                    rounded-lg

                    shadow-[1px_1px_0px_0px_#000]
                    hover:shadow-none
                    hover:translate-x-[3px]
                    hover:translate-y-[3px]

                    transition-all duration-150
                    hover:cursor-pointer

                    min-h-[95px]
                    xl:min-h-[105px]
                    2xl:min-h-[120px]
                    3xl:min-h-[140px]

                    ${spanClass}
                  `}
                          >
                            {/* Larger image window so content is visible */}
                            <div className="w-full overflow-hidden flex-shrink-0 rounded-md bg-white flex items-center justify-center">
                              <img
                                className="w-full h-full object-contain rounded-lg"
                                src={course.courseImage}
                                alt={course.courseName}
                              />
                            </div>

                            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                              <h1 className="font-bold text-[0.6rem] lg:text-[0.68rem] xl:text-xs 2xl:text-sm leading-tight line-clamp-2 hover:line-clamp-none transition-all">
                                {course.courseName}
                              </h1>

                              <p className="text-[0.55rem] lg:text-[0.6rem] xl:text-[0.65rem] 2xl:text-[0.68rem] text-[#2C2D2D] line-clamp-2 hover:line-clamp-none leading-snug flex-1">
                                {course.courseDescription}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}

                      <div
                        style={{
                          background:
                            pastelPalette[
                              courses.length % pastelPalette.length
                            ],
                        }}
                        className="
                          col-span-6
                          flex items-center justify-between gap-2 2xl:gap-4

                          px-2 lg:px-3 2xl:px-4
                          py-1.5 2xl:py-2.5

                          border-2 border-black
                          rounded-lg

                          shadow-[2px_2px_0px_0px_#000]
                          "
                      >
                        <div>
                          <p className="font-semibold text-[0.58rem] lg:text-[0.63rem] xl:text-[0.65rem] 2xl:text-xs text-gray-800">
                            Want to explore more?
                          </p>

                          <p className="text-[0.54rem] lg:text-[0.58rem] xl:text-[0.6rem] 2xl:text-[0.65rem] text-gray-500">
                            Browse our full catalog of courses across all
                            topics.
                          </p>
                        </div>

                        <a
                          href="https://courses.telusko.com/learn/view-all?show=courses&type=1"
                          target="_blank"
                          className="
        flex-shrink-0
        py-0.5 lg:py-1 2xl:py-1.5
        px-2.5 lg:px-3 2xl:px-5

        bg-black text-white
        border-2 border-black
        rounded-md

        shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]

        text-[0.58rem] lg:text-[0.63rem] 2xl:text-xs

        hover:bg-white hover:text-black
        hover:shadow-none
        hover:translate-x-[2px]
        hover:translate-y-[2px]

        transition-all duration-150
        whitespace-nowrap
      "
                        >
                          View All →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* middle */}
      <div className="hidden lg:flex gap-3 py-2 mx-auto px-2 border-2 border-black rounded-full bg-yellow-50 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <a
          href="https://aliencoach.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-Grostek font-medium text-base px-4 py-1.5 rounded-full
            bg-white border-2 border-black
            transition-all duration-200
            hover:-translate-y-[2px]
            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
            hover:bg-blue-200"
        >
          AI Alien Coach
        </a>

        {/* <a
    href="https://blogs.telusko.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 font-Grostek font-medium text-base px-4 py-1.5 rounded-full
    bg-white border-2 border-black
    transition-all duration-200
    hover:-translate-y-[2px]
    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
    hover:bg-pink-200"
  >
    Blog
  </a> */}

        <a
          href="https://docs.telusko.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-Grostek font-medium text-base px-4 py-1.5 rounded-full
            bg-white border-2 border-black
            transition-all duration-200
            hover:-translate-y-[2px]
            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
            hover:bg-green-200"
        >
          Docs
        </a>

        <Link
          to="/career"
          className="text-gray-800 font-Grostek font-medium text-base px-4 py-1.5 rounded-full
            bg-white border-2 border-black
            transition-all duration-200
            hover:-translate-y-[2px]
            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
            hover:bg-purple-200"
        >
          Career
        </Link>

        <Link
          to="/contact-us"
          className="text-gray-800 font-Grostek font-medium text-base px-4 py-1.5 rounded-full
            bg-white border-2 border-black
            transition-all duration-200
            hover:-translate-y-[2px]
            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
            hover:bg-orange-200"
        >
          Contact Us
        </Link>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-center gap-4 justify-end">
        <a
          className="hidden lg:block cursor-pointer"
          href="https://courses.telusko.com/learn/account/signin"
        >
          <button
            className="
          flex items-center justify-center gap-2
          py-2.5 px-8

          bg-btn text-white
          font-Grostek font-semibold text-sm

          border-2 border-black
          rounded-md

          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]

          transition-all duration-200
          hover:-translate-y-[2px]
          hover:bg-black
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]

          active:translate-y-[1px]
          active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]

          cursor-pointer
          select-none
          "
          >
            Login
            <LogIn size={16} />
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
