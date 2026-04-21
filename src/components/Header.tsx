import Navbar from "./Navbar";
import NavbarSM from "./NavbarSM";
import logo from "/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { X, PhoneForwarded } from "lucide-react";
import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

type Course = {
  courseId: string;
  courseName: string;
  courseDescription: string;
  courseImage: string;
  coursePrice: number;
  createdAt: string;
  courseUrl: string;
};

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

const coursesHardCoded: Course[] = [
  {
    courseId: "22777a55-28e9-4370-9504-3f8d2b5bafd9",
    courseName: "Complete DevOps Bootcamp: Master DevOps in 12 Weeks",
    courseDescription: "Complete DevOps bootcamp with hands-on tools",
    courseImage:
      "https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail/0667d01b-98b0-484c-a6b2-6ce4f956d2d9.jpg",
    coursePrice: 0,
    createdAt: "2026-04-06T11:18:29.487410+00:00",
    courseUrl:
      "https://learn.telusko.com/courses/complete devops bootcamp: master devops in 12 weeks",
  },
  {
    courseId: "course2",
    courseName: "Full Stack Gen AI using Spring AI & React",
    courseDescription: "Fullstack AI",
    courseImage:
      "https://dyz1pdcuffwr5.cloudfront.net/telusko-main-website-courses-thumbnail/full-stack-genai.jpeg",
    coursePrice: 0,
    createdAt: "2025-10-27T10:00:00Z",
    courseUrl:
      "https://courses.telusko.com/learn/spring-ai-mastery-build-gen-ai-applications-with-springboot",
  },
  {
    courseId: "course-3-0",
    courseName: "Industry-Ready Spring Boot, React & Gen AI - Live Course",
    courseDescription: "Fullstack AI",
    courseImage:
      "https://dyz1pdcuffwr5.cloudfront.net/telusko-main-website-courses-thumbnail/Industry-Ready-Spring-Boot,-React-&-Gen-AI--Live-Course.png",
    coursePrice: 0,
    createdAt: "2025-10-27T10:00:00Z",
    courseUrl:
      "https://courses.telusko.com/learn/Spring-Boot-React-Gen-AI-Live-Course",
  },
  {
    courseId: "course3",
    courseName: "AI-Powered DevOps with AWS-Live Course V3",
    courseDescription: "AI-driven AWS DevOps automation",
    courseImage:
      "https://dyz1pdcuffwr5.cloudfront.net/telusko-main-website-courses-thumbnail/V3_AI-Powered-DevOps-with-AWS.jpg.jpeg",
    coursePrice: 0,
    createdAt: "2025-10-27T10:00:00Z",
    courseUrl:
      "https://courses.telusko.com/learn/AI-powered-devops-with-AWS-live-course-v3",
  },
  {
    courseId: "course1",
    courseName: "Master Java Spring Development",
    courseDescription:
      "Master Spring Boot development with real-world projects",
    courseImage:
      "https://dyz1pdcuffwr5.cloudfront.net/telusko-main-website-courses-thumbnail/master-v1.png",
    coursePrice: 0,
    createdAt: "2025-10-27T10:00:00Z",
    courseUrl:
      "https://courses.telusko.com/learn/Master-Java-Spring-Development",
  },
  // {
  //   "courseId": "ccb7a61c-7e2d-475e-ad38-d95a886956c2",
  //   "courseName": "Spring AI - GenAI with Telusko",
  //   "courseDescription": "Build AI apps using Spring Boot",
  //   "courseImage": "https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail/e6d14247-9a71-4034-8b01-06cc0bf56220.jpg",
  //   "coursePrice": 799,
  //   "createdAt": "2026-04-01T18:03:11.259541+00:00",
  //   "courseUrl": "https://learn.telusko.com/courses/spring ai - genai with telusko"
  // },
  // {
  //   "courseId": "b2a979fe-6d49-4ef3-960c-e27d2a4b770d",
  //   "courseName": "Docker Made Easy: Hands-On & Simplified from Scratch",
  //   "courseDescription": "Learn Docker with practical hands-on projects",
  //   "courseImage": "https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail/03739e11-295c-4c25-9ad7-91fd2dc81ef8.png",
  //   "coursePrice": 499,
  //   "createdAt": "2026-04-02T08:31:25.577574+00:00",
  //   "courseUrl": "https://learn.telusko.com/courses/docker made easy: hands-on & simplified from scratch"
  // },
  // {
  //   "courseId": "8a540713-852c-4ab3-b333-c3ca65b25f52",
  //   "courseName": "FastAPI for Beginners - Python Web Framework",
  //   "courseDescription": "Build fast APIs using Python FastAPI",
  //   "courseImage": "https://dbqnpc1d9lg0s.cloudfront.net/course-thumbnail/d60b12e5-f0ac-42f2-b85c-0ed7f8cb3a98.png",
  //   "coursePrice": 0,
  //   "createdAt": "2026-04-02T09:26:20.686017+00:00",
  //   "courseUrl": "https://learn.telusko.com/courses/fastapi for beginners - python web framework"
  // }
];

function CoursesTextLogo() {
  return (
    <div>
      <span className="group relative flex gap-3 items-center text-gray-700 font-Grostek text-sm font-[600]">
        COURSES
      </span>
    </div>
  );
}

function Header() {
  const [show, setShow] = useState(false);

  const [courses, setCourses] = useState<Course[]>([]);
  const [courseLoading, setCourseLoading] = useState<boolean>(true);
  const [courseError, setCourseError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setShowForm(true);
    }, 10000);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    (async () => {
      try {
        // const res = await fetch('https://u7whc3ltonlajak7yqp2cocna40pucwb.lambda-url.ap-south-1.on.aws/api/courses',{
        //   signal,
        // });
        // if(!res.ok) throw Error ('something went wrong!')
        // const data = await res.json();
        // let rearranged = [];

        // if(data){
        //   for(let i=0;i<data.length;i++){
        //     if(data[i].courseName=="Industry-Ready Spring Boot, React & GEN AI - Live Course"){
        //       rearranged.unshift(data[i])
        //     }else{
        //       rearranged.push(data[i])
        //     }

        //   }
        // }
        setCourses(coursesHardCoded);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name != "AbortError") {
            setCourses(coursesHardCoded);
            setCourseError(null);
          }
        } else {
          console.log(err);
        }
      } finally {
        setCourseLoading(false);
      }
    })();

    return () => {
      // controller.abort();
    };
  }, []);

  return (
    <main className="min-h-screen grid grid-rows-[_auto_1fr_auto]">
      <div className="relative border-1 border-black py-3 px-4 sm:px-6 md:px-8 min-[825px]:py-1.5 min-[825px]:px-12 flex  gap-4 sm:gap-6 lg:gap-8 items-center max-[1165px]:gap-0 font-Aileron">
        <Link className="block min-[1166px]:hidden flex-shrink-0" to="/">
          <img className="h-auto w-[100px] max-sm:w-[80px]" src={logo} alt="" />
        </Link>

        <div className="relative max-[1165px]:ml-6  top-[2.5px] min-[1166px]:hidden flex-shrink-0">
          <button
            onClick={() => {
              setShow((prev) => !prev);
            }}
            className="flex gap-8"
          >
            <CoursesTextLogo />
          </button>
        </div>

        <div className="w-full min-[1166px]:block hidden">
          <Navbar courses={courses} />
        </div>
        <div className="w-full max-[1166px]:block hidden">
          <NavbarSM setShow={setShow} />
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              key="course-dropdown-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute z-[100] left-0 top-[calc(100%)] w-full bg-white border-t-0 border border-black/20 shadow-sm p-4"
            >
              <div className="p-2 flex flex-col gap-3">
                {courseLoading ? (
                  <p className="text-center font-bold uppercase tracking-widest text-sm">
                    Loading courses...
                  </p>
                ) : courses && courses.length > 0 ? (
                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-DM-Sans">
                    {courses.map((course, index) => {
                      const color = pastelPalette[index % pastelPalette.length];

                      const borderColorMap: Record<string, string> = {
                        "#D7E9D1": "#4a7c59",
                        "#D3ECF0": "#3a7a8a",
                        "#F2EFF9": "#6b5ebd",
                        "#FFE5E5": "#c0605e",
                        "#FFF6D1": "#b8860b",
                        "#E0D7F9": "#5a4ea0",
                        "#CFF5E7": "#2e8b6a",
                        "#FADADD": "#b56a72",
                        "#E8F3D6": "#5a7a3a",
                        "#E1F7F5": "#2e7a74",
                      };
                      const accentColor = borderColorMap[color] ?? "#000";

                      return (
                        <motion.div
                          key={course.courseId}
                          style={{
                            background: color,
                            border: `2px solid ${accentColor}`,
                            boxShadow: `2px 2px 0px 0px ${accentColor}`,
                          }}
                          className="flex gap-3 p-3 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:cursor-pointer items-center transition-all duration-150"
                          onClick={() =>
                            window.open(course.courseUrl, "_blank")
                          }
                        >
                          {/* Image */}
                          <img
                            src={course.courseImage}
                            alt={course.courseName}
                            loading="lazy"
                            style={{ borderColor: accentColor }}
                            className="w-28 sm:w-32 md:w-36 aspect-[16/9] object-contain object-center bg-white border flex-shrink-0 self-center"
                          />

                          {/* Content */}
                          <div className="flex flex-col justify-between flex-1 min-w-0 h-full">
                            <div>
                              <h1 className="font-bold text-sm leading-snug text-gray-900 line-clamp-2">
                                {course.courseName}
                              </h1>
                              <p className="text-[11px] text-gray-600 mt-1 line-clamp-2">
                                {course.courseDescription}
                              </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                                {course.coursePrice === 0
                                  ? " "
                                  : `₹${course.coursePrice.toLocaleString()}`}
                              </span>
                              <a
                                target="_blank"
                                href={course.courseUrl}
                                style={{
                                  color: accentColor,
                                  borderColor: accentColor,
                                  boxShadow: `1.5px 1.5px 0px 0px ${accentColor}`,
                                }}
                                className="text-[11px] font-bold uppercase border tracking-wide py-1 px-3 text-black hover:bg-white hover:shadow-none hover:translate-x-[1.5px] hover:translate-y-[1.5px] transition-all duration-150 whitespace-nowrap"
                              >
                                Start Learning
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <p className="text-center text-gray-700">
                    No courses available at this time.
                  </p>
                )}
              </div>

              <button
                className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-white text-black font-bold uppercase tracking-widest text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
                onClick={() => setShow(false)}
              >
                <X size={14} strokeWidth={2.5} /> Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Outlet context={{ courses, courseLoading, courseError }} />
      <FooterSection />
      <AnimatePresence>
        {showForm && (
          <div className="z-[1000] fixed inset-0 bg-black/30  flex justify-center items-center">
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                  z-[1000]
                  p-4 bg-white relative rounded-xl
                  w-[80%] sm:w-[40%]
                  border-2 border-gray-500
                  shadow-2xl shadow-black
              "
            >
              <h1 className="flex items-center justify-center gap-2 font-DM-Sans text-2xl py-2 font-[600] text-center ">
                Get in Touch
                <PhoneForwarded size={18} />
              </h1>
              <button
                onClick={() => {
                  setShowForm(false);
                }}
                className="hover:scale-102 duration-300 bg-red-500 right-5 -top-5 shadow-[4px_4px_0_0_#000] p-2 absolute "
              >
                <X color="white" />
              </button>
              <ContactForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Header;
