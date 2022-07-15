import React from 'react';

import "./HomePageHeader.css"

const HomePageHeader = () => {
  return (
    <div className="homepage-header">
      <h2 >1-on-1 Tech Mentorship</h2>
      <p>Master your craft with leading mentors at your side. Grow with every online mentoring session and take the next step in your career. All on your terms, for a flat monthly price.
      </p>
      <div className="homepage-header-input">
        <input type="text" placeholder="Try “Software Devleopement”, “Time Management”, etc" />
        <button id="clear">Find My Mentor</button>
      </div>
    </div>
  );
};
export default HomePageHeader;
