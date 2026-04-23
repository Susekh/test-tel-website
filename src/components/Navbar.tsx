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
import CourseCards from "./NavCourseCard";

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
                   <CourseCards courses={courses} />
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* middle */}
      <div className="hidden lg:flex items-center gap-1.5 mx-auto">
        <a
          href="https://aliencoach.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-Grostek font-medium text-gray-700 px-4 py-2 rounded-md border border-gray-400 bg-white transition-all duration-150 hover:text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-[0_2px_0px_0px_rgba(99,102,241,0.5)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
        >
          AI Alien Coach
        </a>

        <a
          href="https://docs.telusko.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-Grostek font-medium text-gray-700 px-4 py-2 rounded-md border border-gray-400 bg-white transition-all duration-150 hover:text-teal-700 hover:border-teal-400 hover:bg-teal-50 hover:shadow-[0_2px_0px_0px_rgba(20,184,166,0.5)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
        >
          Docs
        </a>

        <Link
          to="/career"
          className="text-[13px] font-Grostek font-medium text-gray-700 px-4 py-2 rounded-md border border-gray-400 bg-white transition-all duration-150 hover:text-violet-700 hover:border-violet-400 hover:bg-violet-50 hover:shadow-[0_2px_0px_0px_rgba(139,92,246,0.5)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
        >
          Career
        </Link>

        <Link
          to="/contact-us"
          className="text-[13px] font-Grostek font-medium text-gray-700 px-4 py-2 rounded-md border border-gray-400 bg-white transition-all duration-150 hover:text-rose-700 hover:border-rose-400 hover:bg-rose-50 hover:shadow-[0_2px_0px_0px_rgba(244,63,94,0.5)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
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
