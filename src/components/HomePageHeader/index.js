import React, { useRef } from "react";

import "./HomePageHeader.css";
//Routing
import { useNavigate } from "react-router";

const HomePageHeader = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const handleClick = () => {
    if (localStorage.authorization)
      navigate(`/book/${toTitleCase(ref.current.value)}`);
    else navigate("/signin");
  };
  return (
    <div className="homepage-header">
      <h2>1-on-1 Tech Mentorship</h2>
      <p>
        Master your craft with leading mentors at your side. Grow with every
        online mentoring session and take the next step in your career. All on
        your terms, for a flat monthly price.
      </p>
      <div className="homepage-header-input">
        <input
          type="text"
          placeholder="Try “Software Devleopement”, “Time Management”, etc"
          ref={ref}
        />
        <button id="clear" onClick={handleClick}>
          Find My Mentor
        </button>
      </div>
    </div>
  );
};
export default HomePageHeader;
