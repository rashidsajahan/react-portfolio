import React, {useState} from "react";
import RLogo from "../assets/RLogo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false)
  const handeClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#011343] text-slate-100">
      <img src={RLogo} alt="Logo" style={{ width: "60px" }} />

      {/* menu */}
      <div>
        <ul className="hidden md:flex ">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experiences</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* hamburgur */}
      <div onClick={handeClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile-menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#011343] flex flex-col justify-center items-center"}>
        <li className="py-4 text-3xl">Home</li>
        <li className="py-4 text-3xl">About</li>
        <li className="py-4 text-3xl">Skills</li>
        <li className="py-4 text-3xl">Experiences</li>
        <li className="py-4 text-3xl">Contact Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
