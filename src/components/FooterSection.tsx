import logo from "/logo.png";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <footer className="w-full bg-black font-Grostek font-[600]">
      <div
        className="bg-black p-13 flex justify-center items-center  text-white  gap-8 
        max-md:flex-col"
      >
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/"
        >
          <img className="h-[3rem] " src={logo} alt="" />
        </Link>

        <nav
          className="flex justify-center items-center gap-8 
             max-[1091px]:flex-col md:items-center
            "
        >
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="team"
          >
            {" "}
            Team{" "}
          </Link>

          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/privacy-policy"
          >
            Privacy policy
          </Link>

          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/terms-of-service"
          >
            Terms of service
          </Link>

          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/refund-policy"
          >
            Refund policy
          </Link>
        </nav>

        <div
          className="flex items-center gap-4
             max-[749px]:flex-col max-md:flex-row
            "
        >
          <a target="_blank" href="https://www.linkedin.com/company/telusko">
            <img className="icon" src="/lin.svg" alt="" />
          </a>

          <a target="_blank" href="https://www.youtube.com/@Telusko">
            <img className="icon" src="/yt1.svg" alt="" />
          </a>

          <a target="_blank" href="https://www.facebook.com/teluskolearnings">
            <img className="icon" src="/fb.svg" alt="" />
          </a>

          <a target="_blank" href="https://x.com/navinreddy20?lang=en">
            <img className="icon" src="/x.svg" alt="" />
          </a>
        </div>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/contact-us"
          className="relative duration-300  hover:scale-102 active:scale-95 font-Grostek bg-white    z-10 font-[600] text-black py-3 px-8 "
        >
          Contact Us
          <div className="absolute w-full h-full top-1 left-1 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.7)_0.25px,transparent_2px)] bg-[length:4px_4px] z-[-10]"></div>
        </Link>
      </div>
    </footer>
  );
}

export default FooterSection;
