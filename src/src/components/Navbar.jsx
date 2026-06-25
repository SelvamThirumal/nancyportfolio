import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Education",
    "Certification",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        sticky
          ? "bg-slate-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400 tracking-wide cursor-pointer">
          Nancy<span className="text-white">.S</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-cyan-400 duration-300 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="#contact"
          className="hidden lg:block px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-slate-900/95`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xl hover:text-cyan-400 duration-300"
              >
                {item}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            className="bg-cyan-500 px-6 py-2 rounded-full hover:bg-cyan-600 duration-300"
          >
            Hire Me
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;