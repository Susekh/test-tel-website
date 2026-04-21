import { Mail,ArrowRight,Calendar,MapPin,Users,GraduationCap,Building2,UsersRound,Code2,Mic,
BookOpen,Trophy,Globe,BadgeCheck,PhoneOutgoing,AlarmClock} from "lucide-react";

const infos = [
  {
    icon: <Mail />,
    title: "Email Us",
    description: (
      <a className="text-blue-800 " href="mailto:connect@telusko.com">
        connect@telusko.com
      </a>
    ),
  },
  {
    icon: <PhoneOutgoing />,
    title: "Call Us",
    description: (
      <a className="text-blue-800 " href="tel:+91-9008963671">
        +91-9008963671
      </a>
    ),
  },
  {
    icon: <AlarmClock />,
    title: "Business Hours",
    description: "Monday – Friday: 10am – 6pm IST",
  },
];


const Invitation = () => {
  return (
    <main className="font-DM-Sans">

     
      <section className="bg-[#D6EDFF] py-24 text-center px-6">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
          Collaborate with <span className="text-blue-700">Telusko</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          We partner with colleges, universities, organizations, and tech
          communities to deliver industry-ready learning experiences that
          bridge the gap between academia and real-world technology.
        </p>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Academic Collaborations",
              icon: <GraduationCap size={48} />,
              desc: "Curriculum-aligned workshops, semester programs, and faculty enablement initiatives.",
            },
            {
              title: "Industry Partnerships",
              icon: <Building2 size={48} />,
              desc: "Certification programs, internships, and real-world project challenges.",
            },
            {
              title: "Community Engagements",
              icon: <UsersRound size={48} />,
              desc: "Hackathons, meetups, open learning sessions, and creator collaborations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-black text-white shadow-[6px_6px_0_0_#000] flex flex-col gap-4"
            >
              <div className="text-white">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-200 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-[#F6F7F9] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Engagement Formats
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Live Coding Bootcamps (1–5 Days)", icon: <Code2 /> },
              { label: "Guest Lectures & Tech Talks", icon: <Mic /> },
              { label: "Faculty Development Programs", icon: <BookOpen /> },
              { label: "Hackathons & Coding Challenges", icon: <Trophy /> },
              { label: "Online, Hybrid & Onsite Sessions", icon: <Globe /> },
              { label: "Certification & Assessment Programs", icon: <BadgeCheck /> },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow-[4px_4px_0_0_#000] font-medium flex items-center gap-4"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-white/20">
            <Calendar className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Timings</h3>
            <p className="text-gray-300">
              Flexible scheduling based on academic calendars,
              corporate timelines, and community needs.
            </p>
          </div>

          <div className="p-6 border border-white/20">
            <MapPin className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Mode & Location</h3>
            <p className="text-gray-300">
              Online, hybrid, and onsite engagements across India
              and global communities.
            </p>
          </div>

          <div className="p-6 border border-white/20">
            <Users className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Audience</h3>
            <p className="text-gray-300">
              Students, faculty members, working professionals,
              and developer communities.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-white px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Let’s Build Something Impactful
        </h2>

        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          If you’re interested in collaborating with Telusko for
          workshops, events, or partnerships, reach out to us.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:connect@telusko.com"
            className="group flex items-center gap-3 font-Grostek shadow-[6px_6px_0_0_#000] bg-btn text-white px-8 py-4 font-[600] hover:bg-black hover:scale-102 transition"
          >
            Invite / Collaborate
            <ArrowRight size={20} />
          </a>
        </div>
      </section>


      {/* CONTACT INFO */}
        <section className="pb-20   px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12">
            Get in Touch
            </h2>
  
            <div className="grid md:grid-cols-3 gap-6 ">
            {infos.map((info, i) => (
                <div
                key={i}
                className="p-6 bg-white rounded-md border border-zinc/50 flex flex-col gap-3"
                >
                <div className="text-black">{info.icon}</div>

                <h3 className="font-bold text-lg ">{info.title}</h3>

                <div className="text-gray-700 text-sm  ">
                    {info.description}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>


    </main>
  );
};

export default Invitation;
