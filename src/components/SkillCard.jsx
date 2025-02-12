import React from "react";

const SkillCard = ({img, title}) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={img} alt={`${title} icon`} />
      <p className="my-4">{title}</p>
    </div>
  );
};

export default SkillCard;
