import {
  FaLinkedin,
  FaBehance,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Nancy<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Passionate UI/UX Designer creating beautiful,
              user-friendly and responsive digital experiences.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-cyan-400 duration-300"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 duration-300"
              >
                <FaBehance />
              </a>

            </div>

            <button
              onClick={scrollTop}
              className="mt-8 flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full duration-300"
            >
              <FaArrowUp />
              Back to Top
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">

          <p className="text-gray-400">
            © {year} Nancy S. All Rights Reserved.
          </p>

          <p className="text-gray-500 mt-2">
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;