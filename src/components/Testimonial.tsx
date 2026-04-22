import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

function Logo() {
  return (
    <div className="relative flex flex-col font-DM-Sans items-center text-center mb-16 px-6">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-2xl md:text-6xl font-extrabold tracking-tight"
      >
        What Our
        <span className="ml-3 bg-cyan-300 border-2 border-black px-3 shadow-[4px_4px_0_0_#000]">
          Learners Say
        </span>
      </motion.h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 font-medium">
        Thousands of developers started their journey here, and built real
        careers from it.
      </p>
    </div>
  );
}

const testimonials = [
  {
    name: "Maniraj Sivasubbu",
    role: "Oracle",
    photo: "https://i.ibb.co/R0Y23GQ/Maniraj-Testimonial.jpg",
    testimonial:
      "I learned fundamental knowledge of Java and Python programming from Telusko YouTube channel during my undergraduate. It helped me to get a job in PwC and then I learned Spring Boot. Thank you sir. ",
  },
  {
    name: "Vamshi Nallavalli",
    role: "Student",
    photo: "https://i.ibb.co/BPRd16j/vamshi-krishna-testimonial.jpg",
    testimonial:
      "After completing my final year exams, I took the Java with Spring course. I had some knowledge in Java but wasn't clear on concepts like objects, classes, and collections. After the course, I can clear technical rounds like a piece of cake.",
  },
  {
    name: "Daniel Wangari",
    role: "Dynamic Technologies",
    photo: "https://i.ibb.co/NT64mjG/DANIEL-NJAMA-Testimonial.jpg",
    testimonial:
      "Telusko has played a crucial role in providing me with the essential skills needed for transitioning into the tech industry. Specifically, I have acquired extensive knowledge in web development and coding, focusing on Python and the Django framework through this channel. I am grateful to Navin for serving as an inspiration as well.",
  },
  {
    name: "Navya Puttu",
    role: "Student",
    photo: "https://i.ibb.co/vXJD9g4/puttu-navya-Testimonial.jpg",
    testimonial:
      "I got into a product based company only by watching and following your path, Sir!",
  },
  {
    name: "Gokhul",
    role: "Galvanize Global Education",
    photo: "https://i.ibb.co/k9nSZf7/Gokhul-Testimonial.jpg",
    testimonial:
      "My coding journey on the internet started with Telusko, and I began to see coding as problem-solving. Java became my go-to programming language through his teachings, and it continues strong.",
  },
  {
    name: "Hemanth Anumala",
    role: "Cisco Systems",
    photo: "https://i.ibb.co/Lxydrtb/Hemanth-Anumala-Testimonial.jpg",
    testimonial:
      "Telusko is the channel which helped me in shaping my career. The way Naveen sir explains things in a curious way helped me to dig up things in learning a particular technology. Telusko has its mark on each step of my career and today life is easy because of a man like Naveen sir.",
  },
  {
    name: "Shubham Shinde",
    role: "",
    photo: "/testimonial/yt.svg",
    testimonial:
      "I've never seen such a detailed explanation for JWT — rather say the whole Spring Security. Just crisp and clear! To be honest, I was avoiding the video because of its length for months. But not gonna lie, every minute of the video is important and super useful.",
  },
  {
    name: "Deepak Tiwari",
    role: "",
    photo: "/testimonial/yt.svg",
    testimonial:
      "Dude, you are a magician. That's what came to my mind after watching this video. I've never seen such a magical yet simple explanation for lambda.",
  },
  {
    name: "Mohit Anand",
    role: "Java developer",
    photo: "/profile.svg",
    testimonial:
      "I am from non technical background i learned every single word of coding from your channel only",
  },
  {
    name: "Koushik Biswas",
    role: "Associate Software Engineer",
    photo: "/profile.svg",
    testimonial:
      "Company started training with Java spring boot & automation testing, that's time I have not any idea about Java, luckily got two courses of Navin Reddy beginners Java & Spring boot free of cost as birthday gift, learnt total Java & now working, Thanks man for the great content.",
  },
  {
    name: "Sharad Kumar",
    role: "Project Engineer (Java full stack Engineer)",
    photo: "/profile.svg",
    testimonial:
      "Telusko help me a a lot in my java full stack carrier I have learned all the basics from here and also help a lot . During my college time my fev language was python but after visiting  naveen sir channel java became my fev language I decided make my carrier in java. The teaching way of naveen sir is very impressive and very attractive",
  },
  {
    name: "Joshua Charles P",
    role: "Business Analyst",
    photo: "/profile.svg",
    testimonial:
      "Telusko has played a pivotal role in advancing my career in technology. The comprehensive tutorials on various programming languages and technologies have equipped me with invaluable skills and knowledge essential for my professional growth. The practical examples and clear explanations have not only enhanced my current role but have also opened up new opportunities. Thanks to Telusko, I've been able to confidently tackle complex projects and stay updated with the latest industry trends, making a significant impact on my career trajectory. I highly recommend Telusko to anyone seeking to excel in the tech industry.",
  },
  {
    name: "Samir Krishna",
    role: "Applications engineer 2",
    photo: "/profile.svg",
    testimonial:
      "I started following Navin reddy sir from past 7 years when I was in my engineering. I started taking java tutorials and then servlets and then spring. By watching his content I got very good exposure towards java tech and build confidence. Thank you very much sir for such amazing content.",
  },
  {
    name: "Kapil Rai",
    role: "Student",
    photo: "/profile.svg",
    testimonial:
      "You are super hero for Me Sir You are Great Sir... U made Difficult topic Concept easier",
  },
  {
    name: "Partha Pratim Das",
    role: "Senior Consultant",
    photo: "/profile.svg",
    testimonial:
      "It started during the lockdown when I had to learn spring boot quickly to get a new project as my existing project was ramped down. Then brushing my concepts everytime before the interviews",
  },
  {
    name: "Chaitanya Sunil Pawar",
    role: "Full Stack Developer",
    photo: "/profile.svg",
    testimonial:
      "I was a Mechanical Engineering graduated in 2021. Started learning java on telusko, being non IT student telusko gave me strong foundation of java programming. Now I am Fullstack developer in a product based company",
  },
  {
    name: "Satya Prakash",
    role: "TECHNICAL Support",
    photo: "/profile.svg",
    testimonial:
      "Sir I completed full stack Java course from iNeuron I try multiple interview but I am getting jobs I am hopeless now. Kindly help me sir. You are great mentor kindly give some path",
  },
  {
    name: "Daniel Wangari",
    role: "Senior Technical team lead",
    photo: "/profile.svg",
    testimonial:
      "Telusko has played a crucial role in providing me with the essential skills needed for transitioning into the tech industry. Specifically, I have acquired extensive knowledge in web development and coding, focusing on Python and the Django framework through this channel. Navin's ability to articulate his ideas and explain various concepts has consistently facilitated my understanding. I am grateful to Navin for serving as an inspiration as well.",
  },
  {
    name: "Shruti",
    role: "Student",
    photo: "/profile.svg",
    testimonial: "",
  },
  {
    name: "Sriram V",
    role: "Software engineer",
    photo: "/profile.svg",
    testimonial:
      "From my early days in my career even at present i have been following telusko channel.The concept explanation is of high quality and easier to understand. Thankyou for your hardwork and guidance and keep up ur good work.",
  },
  {
    name: "Gokhul",
    role: "SDE 1",
    photo: "/profile.svg",
    testimonial:
      "My coding journey on the internet started with Telusko, and I began to see coding as problem-solving. Java became my go-to programming language through his teachings, and it continues strong.",
  },
  {
    name: "Sumanth katari",
    role: "Trainee Decision Scientist",
    photo: "/profile.svg",
    testimonial:
      "Helped me to learn python and how the programming language works. Thank you Navin reddy sir",
  },
  {
    name: "Vamshi Krishna Nallavalli",
    role: "Fresher",
    photo: "/profile.svg",
    testimonial:
      'I took java with Spring Course last year from Udemy after completing my final year exams before I used to watch in YouTube. Actually i have knowledge in Java but not clear means why we use objects, classes, methods, collections etc,. After completing the course I am able to clear technical rounds like "piece of cake" but due to internal hirings and not fresher job posting trying to get a chance as a fresher.',
  },
  {
    name: "Akass raj",
    role: "Software engineer",
    photo: "/profile.svg",
    testimonial:
      "Actually a big fan of him for the way of explanation and watched his most of the videos. It helped me In learning spring boot, security and lot of things from Java stack . Mostly helped me to clear interviews with confidence",
  },
  {
    name: "Maniraj Sivasubbu",
    role: "Application Developer 2",
    photo: "/profile.svg",
    testimonial:
      "I learned fundamental knowledge of Java and Python programming from Telusko YouTube channel during my undergraduate. It helped me to get a job in PwC and then I learned Spring Boot. Thank you sir🙏",
  },
  {
    name: "Arunkumar",
    role: "Software Engineer",
    photo: "/profile.svg",
    testimonial:
      "Your 6 hour Java video is where I started my programming.it was beginner friendly and ofcourse I have learnt some other advanced Java as well but your video is the base for everything and I m in a really good position right now.",
  },
  {
    name: "Hemanth Anumala",
    role: "Technical consulting Engineer",
    photo: "/profile.svg",
    testimonial:
      "Telusko is the channel which helped me in shaping my career.  In the initial days of my college days i started learning java from the channel and soon with that one video of how API works has changed my whole life. The way naveen sir explains things in a curious way helped me to dig up things in learning a particular technology.No wonder the whole india watches telusko python playlist. I have followed the old playlist of packet tracer from naveen sir and thats where my networking journey has started up. I was exposed to blockchain later in my 3rd year and made myself confident today to make a career over the same line. Telusko has its mark on each step of my career and today life is easy because of a man like naveen sir. Thank you so much for providing valuable content for free till date.",
  },
  {
    name: "Ajay",
    role: "Php Developer",
    photo: "/profile.svg",
    testimonial:
      "I have Learned Javascript & Python concepts from his youtube videos. Thank you so much for the great content.",
  },
  {
    name: "Madhuri reddy",
    role: "SRE",
    photo: "/profile.svg",
    testimonial:
      "Iis difficult to mention one course, because when ever I have any queries, telusko is first source where I will look at , thankyou so much for sharing your knowledge and experience",
  },
];

const testimonialPalettes = [
  {
    name: "Sunrise Glow",
    cardBg: "#FFFBEB",
    textColor: "#78350F",
    nameColor: "#F97316",
    accentColor: "#FACC15",
  },
  {
    name: "Electric Blue & Magenta",
    cardBg: "#111827",
    textColor: "#D1D5DB",
    nameColor: "#EC4899",
    accentColor: "#6366F1",
  },
  {
    name: "Tropical Vibe",
    cardBg: "#ECFEFF",
    textColor: "#155E75",
    nameColor: "#10B981",
    accentColor: "#F472B6",
  },
  {
    name: "Citrus Punch",
    cardBg: "#FEFCE8",
    textColor: "#854D0E",
    nameColor: "#EAB308",
    accentColor: "#A3E635",
  },
  {
    name: "Hot & Cold",
    cardBg: "#111827",
    textColor: "#F9FAFB",
    nameColor: "#F43F5E",
    accentColor: "#0EA5E9",
  },
  {
    name: "Pop Art",
    cardBg: "#FACC15",
    textColor: "#1E40AF",
    nameColor: "#BE185D",
    accentColor: "#FFFFFF",
  },

  {
    name: "Serene Greens",
    cardBg: "#F0FDF4",
    textColor: "#3F6212",
    nameColor: "#22C55E",
    accentColor: "#A3E635",
  },
  {
    name: "Soft Lavender",
    cardBg: "#F5F3FF",
    textColor: "#5B21B6",
    nameColor: "#7C3AED",
    accentColor: "#A78BFA",
  },
  {
    name: "Peach & Cream",
    cardBg: "#FFF7ED",
    textColor: "#7C2D12",
    nameColor: "#EA580C",
    accentColor: "#FB923C",
  },
  {
    name: "Misty Mountains",
    cardBg: "#D6D3D1",
    textColor: "#292524",
    nameColor: "#047857",
    accentColor: "#F9FAFB",
  },
  {
    name: "Oceanic Deep",
    cardBg: "#0C4A6E",
    textColor: "#E0F2FE",
    nameColor: "#7DD3FC",
    accentColor: "#06B6D4",
  },

  {
    name: "70s Groove",
    cardBg: "#78350F",
    textColor: "#FDE68A",
    nameColor: "#F97316",
    accentColor: "#FCD34D",
  },
  {
    name: "Vintage Seaside",
    cardBg: "#E0F2FE",
    textColor: "#1E3A8A",
    nameColor: "#BE123C",
    accentColor: "#F9A8D4",
  },
  {
    name: "Retro Diner",
    cardBg: "#FCE7F3",
    textColor: "#831843",
    nameColor: "#06B6D4",
    accentColor: "#F472B6",
  },
  {
    name: "Autumn Academia",
    cardBg: "#FEF9C3",
    textColor: "#422006",
    nameColor: "#9A3412",
    accentColor: "#CA8A04",
  },
  {
    name: "Desert Sunset",
    cardBg: "#FFF7ED",
    textColor: "#7C2D12",
    nameColor: "#9A3412",
    accentColor: "#F9A8D4",
  },
];

function ScrollColumn({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: number;
}) {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);

  const startFrom = useCallback(
    (yNow: number) => {
      if (!ref.current) return;
      // Because we duplicate the children inside two stacked divs,
      // scrollHeight / 2 is exactly the height of one instance!
      const totalHeight = ref.current.scrollHeight / 2;
      const remainingRatio = (totalHeight + yNow) / totalHeight;
      const remainingDuration = duration * remainingRatio;

      controls
        .start({
          y: [yNow, -totalHeight],
          transition: {
            duration: remainingDuration,
            ease: "linear",
            repeat: 0,
          },
        })
        .then(() => {
          controls.start({
            y: [0, -totalHeight],
            transition: {
              duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          });
        });
    },
    [controls, duration]
  );

  useEffect(() => {
    if (!ref.current) return;
    const totalHeight = ref.current.scrollHeight / 2;
    controls.start({
      y: [0, -totalHeight],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, duration]);

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    if (!ref.current) return;
    const transform = getComputedStyle(ref.current).transform;
    if (transform === "none") {
      startFrom(0);
      return;
    }
    const yNow = new DOMMatrix(transform).m42;
    startFrom(yNow);
  };

  return (
    <motion.div
      ref={ref}
      // Removed the gap here so the outer container matches perfectly
      className="flex flex-col"
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      // Touch events added for mobile pausing
      onTouchStart={handleHoverStart}
      onTouchEnd={handleHoverEnd}
      onTouchCancel={handleHoverEnd}
    >
      {/* Container 1 */}
      <div className="flex flex-col gap-6 pb-6">{children}</div>
      {/* Container 2 (Duplicated mathematically perfect) */}
      <div className="flex flex-col gap-6 pb-6">{children}</div>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, palette }: any) {
  return (
    <div
      style={{
        background: palette.cardBg,
      }}
      className="
        relative
        border-2
        border-black
        rounded-md
        shadow-[4px_4px_0_0_#000]
        p-6
        mb-2
        transition-all
        duration-200
        hover:-translate-y-1
      "
    >
      <img
        src={testimonial.photo}
        alt={testimonial.name}
        loading="lazy"
        className="
          w-12
          h-12
          rounded-full
          object-cover
          absolute
          -top-6
          left-5
          border-2
          border-black
          bg-white
        "
      />

      <p
        style={{
          color: palette.textColor,
        }}
        className="
          mt-6
          text-sm
          italic
          leading-relaxed
        "
      >
        "{testimonial.testimonial}"
      </p>

      <div className="mt-4">
        <p
          style={{
            color: palette.nameColor,
          }}
          className="font-bold text-sm"
        >
          {testimonial.name}
        </p>

        {testimonial.role && (
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        )}
      </div>
    </div>
  );
}

function Testimonial() {
  const validTestimonials = testimonials.filter((t) => t.testimonial !== "");

  const col1 = validTestimonials.filter((_, i) => i % 3 === 0);
  const col2 = validTestimonials.filter((_, i) => i % 3 === 1);
  const col3 = validTestimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative w-full p-2 overflow-hidden my-24 font-DM-Sans">
      <Logo />

      <div className="relative h-[650px] border-4 md:px-8 border-black w-fit mx-auto rounded-3xl overflow-hidden">
        <div
          className="
        relative
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        px-4
        h-[650px]
        overflow-hidden
      "
        >
          {/* Note how we no longer duplicate the columns inside the map! ScrollColumn handles the duplication correctly */}
          <ScrollColumn duration={28}>
            {col1.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                palette={testimonialPalettes[i % testimonialPalettes.length]}
                index={i}
              />
            ))}
          </ScrollColumn>

          <ScrollColumn duration={34}>
            {col2.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                palette={
                  testimonialPalettes[(i + 3) % testimonialPalettes.length]
                }
                index={i}
              />
            ))}
          </ScrollColumn>

          <ScrollColumn duration={30}>
            {col3.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                palette={
                  testimonialPalettes[(i + 6) % testimonialPalettes.length]
                }
                index={i}
              />
            ))}
          </ScrollColumn>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;