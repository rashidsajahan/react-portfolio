import React, { useState } from "react";
import { FaRegEye, FaTimes } from "react-icons/fa";

const WorkCard = ({ img, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="opacity-0 group-hover:opacity-100 px-2 text-center">
          <span className="text-2xl font-bold text-white tracking-wider">
            {title}
          </span>
          <div className="pt-4">
            <FaRegEye className="h-8 w-8 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            <img src={img} alt={title} className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkCard;
