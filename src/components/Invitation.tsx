import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    num: "01",
    title: "College Collaborations for Scale",
    desc: "Invite our mentors for live coding bootcamps, tech talks, or semester workshops on Java, Python, AI, and Cloud — bridging academia and industry.",
    bg: "bg-[#4F6BFF]",
    numColor: "text-[#c0c8ff]",
    titleColor: "text-white",
    descColor: "text-white/75",
    divider: "bg-white/30",
    iconBg: "bg-white/15 border-white/30",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.25 4C9.25 2.48 10.48 1.25 12 1.25C13.52 1.25 14.75 2.48 14.75 4C14.75 5.52 13.52 6.75 12 6.75C10.48 6.75 9.25 5.52 9.25 4Z" fill="#fff" />
        <path d="M8.22 11.57L6.05 10.85C5.42 10.64 5 10.05 5 9.4C5 8.42 5.9 7.69 6.85 7.9L8.75 8.3C10.97 8.76 13.03 8.76 15.04 8.3L16.95 7.9C17.9 7.69 19 8.42 19 9.4C19 10.05 18.58 10.64 17.95 10.85L15.78 11.57C15.51 11.66 15.38 11.71 15.28 11.77C14.95 11.97 14.76 12.36 14.82 12.75C14.83 12.87 14.88 13 14.98 13.26L16.23 16.5C16.6 17.46 15.89 18.5 14.85 18.5C14.33 18.5 13.84 18.22 13.58 17.76L12 15L10.42 17.76C10.16 18.22 9.67 18.5 9.15 18.5C8.11 18.5 7.4 17.46 7.77 16.5L9.02 13.26C9.12 13 9.17 12.87 9.18 12.75C9.24 12.36 9.05 11.97 8.72 11.77C8.62 11.71 8.49 11.66 8.22 11.57Z" fill="#fff" />
        <path d="M12 22C17.52 22 22 19.99 22 17.5C22 15.78 19.85 14.28 16.69 13.53L17.63 15.96C18.38 17.91 16.94 20 14.85 20C13.79 20 12.8 19.43 12.27 18.5L12 18.02L11.73 18.5C11.2 19.43 10.21 20 9.15 20C7.06 20 5.62 17.91 6.37 15.96L7.31 13.53C4.15 14.28 2 15.78 2 17.5C2 19.99 6.48 22 12 22Z" fill="#fff" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Accelerating Your Industry Partnership",
    desc: "Co-create certification programs, internships, or hands-on project challenges that prepare learners for real-world tech roles.",
    bg: "bg-[#F5F06A]",
    numColor: "text-[#555]",
    titleColor: "text-[#111]",
    descColor: "text-[#444]",
    divider: "bg-black/20",
    iconBg: "bg-black/7 border-black/15",
    icon: (
      <svg width="20" height="20" fill="#333" viewBox="0 0 128 128" stroke="#333" strokeWidth="0">
        <rect x="37.6" y="69.8" width="55.6" height="3.6" />
        <circle cx="32.2" cy="27" r="10.2" />
        <path d="M47.7,77.7H30.5l0-12.8l-8.8-15.2c-0.3-0.6-0.1-1.4,0.5-1.7c0.6-0.3,1.4-0.1,1.7,0.5L34,66c0.8,1.3,2.2,2.2,3.8,2.2h17.6c2.5,0,4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5l-14.7,0.1L29,39.6c-0.9-1.6-2.6-2.4-4.7-2.4c-0.3,0-0.9,0.1-1.2,0.2c-0.3,0.1-0.7,0.2-1,0.3C13.6,40.5,6.8,54.1,6.8,68.2C6.7,72.5,6.8,76,7,79.4c-0.3,4.1,2.1,8,6.1,9.5c1,0.3,2.1,0.6,3.1,0.6h25.6v24c0,3.3,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8V83.6c0-1.5-0.6-3-1.7-4.1C50.6,78.3,49.1,77.7,47.7,77.7z" />
        <circle cx="98.1" cy="27" r="10.2" />
        <path d="M123.5,68.2c0-14.1-6.8-27.7-15.3-30.5c-0.3-0.1-0.7-0.2-1-0.3c-0.3-0.1-0.9-0.2-1.2-0.2c-2.1,0-3.8,0.8-4.7,2.4L89.7,59.4l-14.7-0.1c-2.4,0-4.5,2-4.5,4.5c0,2.4,2,4.5,4.5,4.5h17.6c1.6,0,3-0.9,3.8-2.2l10.2-17.6c0.3-0.6,1.1-0.8,1.7-0.5c0.6,0.3,0.8,1.1,0.5,1.7l-8.8,15.2l0,12.8H82.6c-1.4,0-2.9,0.6-4.1,1.7c-1.2,1-1.7,2.6-1.7,4.1v29.9c0,3.3,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8v-24H114c1,0,2.1-0.2,3.1-0.6c4-1.5,6.4-5.5,6.1-9.5C123.5,76,123.6,72.5,123.5,68.2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Strengthening Your Tech Community",
    desc: "Host hackathons, open learning sessions, or YouTube collabs to inspire innovation and creativity in your developer community.",
    bg: "bg-[#C8F06A]",
    numColor: "text-[#555]",
    titleColor: "text-[#111]",
    descColor: "text-[#444]",
    divider: "bg-black/20",
    iconBg: "bg-black/7 border-black/15",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M7 8L3 12L7 16" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8L21 12L17 16" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4L9.8589 19.4548" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Invitation = () => {
  return (
    <section className="relative overflow-hidden py-14 px-4 sm:px-6 font-DM-Sans">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ccc9bb 1px, transparent 1px), linear-gradient(90deg, #ccc9bb 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Heading */}
        <h4 style={{ fontFamily: "'Bebas Neue', sans-serif"}} className="text-4xl sm:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-7">
          <span className="block mb-2">Partner with</span>
          <span className="block font-Caveat">
            <mark
              className="bg-yellow-200 px-4"
              style={{ borderBottom: "3px solid #000" }}
            >
              Telusko
            </mark>
          </span>
        </h4>

        {/* Subtext */}
        <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-md">
          We empower millions of learners to master real-world programming, AI,
          and software development — welcoming{" "}
          <strong className="text-black">
            colleges, universities, and tech communities
          </strong>{" "}
          to build a future where education meets innovation.
        </p>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mt-12 mb-6">
          <p className="text-[0.75rem] font-bold uppercase tracking-widest text-[#111]">
            We help learners build better skills — together.
          </p>
        </div>

        {/* Shadow wrapper — holds both cards + CTA so shadow is unified and doesn't overflow */}
        <div style={{ boxShadow: "5px 5px 0 #000" }}>

          {/* Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: "2.5px solid #000" }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className={`
                  ${card.bg} p-7 flex flex-col min-h-[240px] md:min-h-[280px]
                  ${i < cards.length - 1 ? "border-b-[2.5px] border-black md:border-b-0 md:border-r-[2.5px]" : ""}
                `}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[11px] font-bold tracking-widest uppercase ${card.numColor}`}>
                    {card.num}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                </div>
                <div className={`h-[1.5px] w-full ${card.divider} mb-4`} />
                <h3 className={`text-[1.1rem] sm:text-[1.2rem] font-bold leading-snug mb-auto pb-6 ${card.titleColor}`}>
                  {card.title}
                </h3>
                <p className={`text-[0.78rem] leading-relaxed ${card.descColor}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-6 py-5 bg-white"
            style={{
              border: "2.5px solid #000",
              borderTop: "none",
            }}
          >
            <p className="text-[0.85rem] text-[#333] font-medium max-w-sm leading-relaxed text-center sm:text-left">
              Let's collaborate to make learning{" "}
              <strong className="text-black">accessible, hands-on, and impactful</strong>{" "}
              for everyone.
            </p>
            <Link
              to="/invite"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-[#111] text-white text-[0.85rem] font-bold px-6 py-3 hover:opacity-75 transition-opacity whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start"
            >
              Invite Us / Collaborate <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Invitation;