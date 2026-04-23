import CoursesTextLogo from "./CourseTexLogo";



function CourseLogo() {
  return (
    <>
    <div className="relative w-fit px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="relative 
      left-1
      sm:left-1 
      md:left-1 
      lg:left-1">
        <CoursesTextLogo />
      </div>

      <h1
        className="
          relative font-bold font-DM-Sans 
          text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]
        "
        style={{ fontFamily: "'Bebas Neue', sans-serif"}}
      >
        Telusko Courses
        <img
          className="
            absolute -top-15 -right-4.5 
            sm:-top-18 sm:-right-6 
            md:-top-20 md:-right-6 
            lg:-top-22 lg:-right-6
            h-20 sm:h-24 md:h-28 lg:h-[120px]
          "
          src="/Illustration.svg"
          alt="Illustration"
        />
      </h1>
    </div>
    </>
  );
}

export default CourseLogo;
