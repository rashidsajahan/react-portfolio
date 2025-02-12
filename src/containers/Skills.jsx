import React from "react";
import HTML from "../assets/html.png";
import AWS from "../assets/aws.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import ReactIcon from "../assets/react.png";
import Java from "../assets/java.png";
import Next from "../assets/next-icon1.png";
import PHP from "../assets/php-icon.png";
import SkillCard from "../components/SkillCard";
// t
const skills = [
  { img: HTML, title: "HTML" },
  { img: CSS, title: "CSS" },
  { img: JavaScript, title: "JavaScript" },
  { img: ReactIcon, title: "React" },
  { img: Next, title: "Next.js" },
  { img: Node, title: "Node.js" },
  { img: MongoDB, title: "MongoDB" },
  { img: PHP, title: "PHP" },
  { img: Java, title: "Java" },
  { img: AWS, title: "AWS" },
  { img: Github, title: "GitHub" },
  { img: Tailwind, title: "Tailwind CSS" },
];

function Skills() {
  return (
    <div name="skills" className="w-full h-full bg-[#011343] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} img={skill.img} title={skill.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
