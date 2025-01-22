import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "animate.css"; 

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  // State to track active tab
  const [activeTab, setActiveTab] = useState("React");

  // Project data categorized by type
  const projects = {
    React: [
      {
        title: "React Notes App",
        description:
          "A feature-rich Notes app built with React, allowing users to create, edit, and delete notes effortlessly. Supports real-time data storage with local storage.",
        github: "https://github.com/Tamanna-2004/Paste-App.git",
      },
      {
        title: "React Todo App",
        description:
          "A sleek and intuitive Todo App built with React, designed for managing daily tasks efficiently with task addition, completion tracking, and deletion.",
        github: "https://github.com/Tamanna-2004/Todo-App.git",
      },
    ],
    Javascript: [
      {
        title: "Currency Converter",
        description:
          "A web-based currency converter fetching real-time exchange rates from an API, allowing seamless currency conversions.",
        github: "https://github.com/Tamanna-2004/currency-converter.git",
      },
      {
        title: "Flappy Bird",
        description:
          "A Flappy Bird clone using JavaScript and Canvas, featuring smooth gameplay and scoring based on successfully passing pipes.",
        github: "https://github.com/Tamanna-2004/flappy-bird.git",
      },
    ],
  };

  return (
    <section
      id="project"
      className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center mt-16 p-8 rounded-lg shadow-md bg-gray-900 text-white"
      data-aos="fade-up"
    >
      {/* Title */}
      <h1
        className="text-5xl text-center tracking-widest mb-6 animate__animated animate__backInRight text-purple-400"
        data-aos="fade-down"
      >
        Projects
      </h1>

      {/* Tabs Section */}
      <div className="flex gap-4 mb-6">
        {Object.keys(projects).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              activeTab === tab ? "bg-purple-700" : "bg-purple-500"
            } hover:scale-105 hover:bg-purple-950`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Display Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects[activeTab].map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg"
            data-aos="zoom-in"
          >
            <p className="text-xl font-semibold">{project.title}</p>
            <p className="text-gray-300 text-sm">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <button className="border p-3 rounded-md bg-blue-600 hover:bg-blue-800 transition-all duration-300 w-full">
                View on GitHub
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
