import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-slate-900 rounded-xl p-6 flex items-center gap-5 border border-slate-800 hover:border-cyan-400 duration-300">
              <FaPhoneAlt className="text-3xl text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91 93637 38047</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 flex items-center gap-5 border border-slate-800 hover:border-cyan-400 duration-300">
              <FaEnvelope className="text-3xl text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">
                  nancynannu36@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 flex items-center gap-5 border border-slate-800 hover:border-cyan-400 duration-300">
              <FaMapMarkerAlt className="text-3xl text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">
                  Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-6">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center text-2xl hover:bg-cyan-500 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center text-2xl hover:bg-cyan-500 duration-300"
              >
                <FaBehance />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-5 p-4 rounded-lg bg-slate-800 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-5 p-4 rounded-lg bg-slate-800 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full mb-5 p-4 rounded-lg bg-slate-800 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full mb-6 p-4 rounded-lg bg-slate-800 outline-none border border-slate-700 focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg text-lg font-semibold duration-300"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;