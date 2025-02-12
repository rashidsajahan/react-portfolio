import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import RealState from "../assets/projects/realestate.jpg";
import ModuleRetriever from "../assets/projects/module-retriever.jpg";
import MovieRental from "../assets/projects/movie-rental.jpg";
import IslandLink from "../assets/projects/island-link.jpg";
import Portfolio2 from "../assets/projects/portfolio2.jpg";
import PythonCalculator from "../assets/projects/python-calculator.jpg";
import Sportify from "../assets/projects/spotify.jpg";
import TheatreSeatBookingSystem from "../assets/projects/theatre-seat-booking-system.jpg";
import VehicleProject from "../assets/projects/vehicle-project.jpg";
import WorkCard from "../components/WorkCard";

const projects = [
  {
    img: ModuleRetriever,
    title: "Module Retriever",
    description: "A platform to evaluate student grading.",
  },
  {
    img: MovieRental,
    title: "Movie Rental System",
    description: "A platform to rent and manage movies online.",
  },
  {
    img: IslandLink,
    title: "Island Link Transport",
    description: "A transport booking system for island travel.",
  },
  {
    img: Portfolio2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills.",
  },
  {
    img: PythonCalculator,
    title: "Python Calculator",
    description: "A simple calculator built using Python.",
  },
  {
    img: Sportify,
    title: "Sportify Website",
    description: "A music streaming app inspired by Spotify.",
  },
  {
    img: TheatreSeatBookingSystem,
    title: "Theatre Seat Booking",
    description: "An online platform for booking theatre seats.",
  },
  {
    img: VehicleProject,
    title: "Vehicle Management System",
    description: "A system to manage vehicle rentals and services.",
  },
];

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#011343]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid-items */}
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
