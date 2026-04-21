import { useOutletContext } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

import KnowledgeRibbon from "@/components/RibbonCarousel";
const HeroSection = lazy(() => import("../components/HeroSection"));
const Courses = lazy(() => import("../components/Courses"));
const Why = lazy(() => import("../components/Why"));
const Quote = lazy(() => import("../components/Quote"));
const Corporate = lazy(() => import("../components/Corporate"));
const Documentation = lazy(() => import("../components/Documentation"));
// const Blog = lazy(() => import("../components/Blog"));
const Explore = lazy(() => import("../components/Explore"));
const Testimonial = lazy(() => import("../components/Testimonial"));
const Community2 = lazy(() => import("../components/Community2"));
const Video = lazy(() => import("../components/Video"));
const Invitation = lazy(() => import("../components/Invitation"));
const AnnouncementSection = lazy(
  () => import("../components/AnnouncementSection"),
);

type Course = {
  courseId: string;
  courseName: string;
  courseDescription: string;
  courseImage: string;
  coursePrice: number;
  createdAt: string;
  courseUrl: string;
};

type CourseProps = {
  courses: Course[];
  courseLoading: boolean;
  courseError: null | string;
};

function Home() {
  const { courses, courseError, courseLoading } =
    useOutletContext<CourseProps>();

  return (
    <div className="w-full">
      {/* hero-section */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <HeroSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <AnnouncementSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Video />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Courses
          courses={courses}
          courseError={courseError}
          courseLoading={courseLoading}
        />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <KnowledgeRibbon />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Why />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Explore />
      </Suspense>

      {/* <Suspense fallback={<div className="flex justify-center items-center">
        <Loading />
      </div>}>
        <Blog />
      </Suspense> */}

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Testimonial />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center overflow-hidden items-center">
            <Loading />
          </div>
        }
      >
        <Documentation />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Community2 />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Invitation />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Corporate />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Quote />
      </Suspense>
    </div>
  );
}

export default Home;
