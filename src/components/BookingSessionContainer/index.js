import React from "react";

//Styling
import "./BookingSessionContainer.css";

const BookingSessionContainer = ({ children }) => {
  return (
    <div className="booking-session__container">
      <h1>Book 1-1 Session with Mentors</h1>
      <div>{children}</div>
    </div>
  );
};

export default BookingSessionContainer;
