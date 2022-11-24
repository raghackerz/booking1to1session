import React, { useState } from "react";

//Styles
import "./MentorCard.css";

//images
//import LINKEDIN from "../../assets/Footer/linkedin.png";

//components
import CalendlyPopup from "../CalendlyPopup";
import ConfirmationModal from "../ConfirmationModal";

const MentorCard = ({ mentor }) => {
  const [calendlyPopup, setCalendlyPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  return (
    <>
      <div className="mentor-card">
        <div>
          <div className="mentor-card__mentor-image">
            <img
              src={require(`../../assets/mentors/${mentor._id}.png`)}
              alt={mentor?.name}
            />
          </div>
          <div className="mentor-card__mentor-name">
            <h3>{mentor?.name}</h3>
            {/*<img src={LINKEDIN} alt="LinkedIn" />*/}
          </div>
        </div>
        <div className="mentor-card__details">
          {mentor?.previousJob} {mentor?.previousJob && "|"}{" "}
          {mentor?.collegeName}
        </div>
        <br />
        <div>{mentor?.description}</div>
        <br />
        <div>
          {mentor?.gender === "Female" ? "She" : "He"} can help you with:{" "}
        </div>
        <ul>
          {mentor?.skills?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={() => setCalendlyPopup(true)}>Book Session</button>
      </div>
      {calendlyPopup && (
        <CalendlyPopup
          calendlyUsername={mentor.calendlyUsername}
          showPopup={setCalendlyPopup}
          setConfirmationPopup={setConfirmationPopup}
          setCalendlyPopup={setCalendlyPopup}
        />
      )}
      {confirmationPopup && (
        <ConfirmationModal close={() => setConfirmationPopup(false)} />
      )}
    </>
  );
};

export default MentorCard;
