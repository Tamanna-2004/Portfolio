import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import react from "../assets/React_(web_framework)-Logo.wine.png";
import tailwind from "../assets/tailwind_logo.png";
import javascript from "../assets/javascript_logo.png";
import node from "../assets/node_logo.png"
import express from "../assets/express_logo.png"
import php from "../assets/php_logo.png"
import mongo from "../assets/MongoDB_logo.gif"
import sql from "../assets/mySQL_logo.png"
import figma from "../assets/figma_logo.png"
import vercel from "../assets/vercel_logo.jpg"
import firebase from "../assets/firebase_logo.png"
import c from "../assets/C_logo.png"
import cpp from "../assets/cpp-logo.png"
import java from "../assets/java_logo.png"
import "animate.css";

const About = () => {
  return (
    <section id="about" className="w-full p-5 md:w-[90%] flex flex-col items-center">

      <div className="md:w-[80%] mx-auto inline-block text-center mb-8 md:ml-24 w-full">
        <h1 className="text-gray-400 text-6xl animate__animated animate__backInUp tracking-widest">
          Skills
        </h1>
        </div>
      <div className="w-full mx-auto flex gap-5 md:flex-row overflow-y-hidden overflow-x-scroll md:w-[80%] hide-scrollbar">
        <Card heading="Frontend"
         content="focus on creating responsive and visually stunning web applications that 
         prioritize user experience and performance. With expertise in HTML, CSS, JavaScript,
         and React, I build dynamic, interactive interfaces that work seamlessly across devices." 
         img1 = {react} img2 = {tailwind} img3 = {javascript}
         p_bar = "bg-purple-500" p_bar_w = "w-[75%]"
         />
        <Card
          heading="Backend"
          content="That's great! Keep practicing, and you'll improve over time. Here’s a short description for your backend skills:
          I focus on building scalable and efficient backend systems using Node.js, Express, and databases like MongoDB and MySQL.
          " img1 = {node} img2 = {express} img3 = {php}
          p_bar = "bg-green-300" p_bar_w = "w-[45%]"
        />
        <Card2 heading="Database" 
        content = "I work with databases like MongoDB and MySQL to design efficient, structured, and scalable data storage 
        solutions. I'm learning how to optimize queries, ensure data security, and manage seamless 
         interactions between the backend and the database."
         img1 = {mongo} img2={sql}
         p_bar = "bg-yellow-600" p_bar_w = "w-[30%]"
        />
        <Card heading="Tools" 
        content = "I use Figma for designing intuitive UI/UX, Vercel for seamless deployment
         and scaling, and Firebase for authentication, real-time databases, and cloud 
         functions—ensuring efficient and scalable web applications."
         img1 = {figma} img2={vercel} img3={firebase}
         p_bar = "bg-orange-500" p_bar_w = "w-[50%]"
        />
        <Card heading="Programming Languages" 
        content = "Programming languages are the foundation of software development. With
         languages like C, C++, Java, and JavaScript, I build logic, algorithms, and problem
         -solving skills, allowing me to write efficient and optimized code. "
         img1 = {c} img2={cpp} img3={java}
         p_bar = "bg-green-500" p_bar_w = "w-[70%]"
        />
      </div>
      {/* <p className="text-gray-400 text-xs w-[70%] p-5 text-center mt-7 leading-5s">
      I am currently pursuing my Computer Science Engineering (CSE) degree at MAIT College. With a strong foundation in programming and a passion for technology, I am constantly exploring new tools and frameworks to enhance my skills. My focus lies in both frontend and backend development, and I aim to build innovative solutions that can make a real-world impact.
      </p> */}
    </section>
  );
};

export default About;
