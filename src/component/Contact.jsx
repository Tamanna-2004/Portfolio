import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Animation duration & trigger once
  }, []);

  return (
    <section
      id="contact"
      className="w-[80%] mx-auto flex flex-col items-center mt-16 p-8 rounded-lg shadow-md mb-10 bg-custom-dark-pink"
      data-aos="fade-up" // 🔥 Just add this to enable scroll animation!
    >
      <h1 className="mt-4 text-5xl text-center text-white tracking-widest mb-6" data-aos="fade-down">
        Let's Connect
      </h1>
      <form className="flex flex-col gap-6 w-full max-w-xl">
        <div className="input-box" data-aos="fade-right">
          <label className="text-lg text-white">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800"
            placeholder="Enter your name"
            required
            name="name"
          />
        </div>
        <div className="input-box" data-aos="fade-left">
          <label className="text-lg text-white">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <div className="input-box" data-aos="fade-up">
          <label className="text-lg text-white">Your Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800"
            placeholder="Enter your message"
            required
            name="message"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-md transition-all duration-300 bg-purple-600 text-white hover:scale-105 hover:bg-purple-800 mb-6"
          data-aos="zoom-in"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
