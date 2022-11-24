import React, { useEffect, useState } from "react";

//Styles
import "./CalendlyPopup.css";

const CalendlyPopup = ({
  showPopup,
  setConfirmationPopup,
  setCalendlyPopup,
  calendlyUsername = "raghackerz",
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let calendlyScript = document.getElementById("calendly");
    if (calendlyScript) document.body.removeChild(calendlyScript);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.id = "calendly";
    script.onload = () => {
      setLoading(false);
      /* global Calendly */
      Calendly.initInlineWidget({
        url: "https://calendly.com/" + calendlyUsername,
        parentElement: document.getElementById("calendly-popup"),
        prefill: { name: localStorage.userName, email: localStorage.email },
        utm: {},
      });

      const isCalendlyEvent = (e) => {
        return (
          e.origin === "https://calendly.com" &&
          e.data.event &&
          e.data.event.indexOf("calendly.") === 0
        );
      };

      window.addEventListener("message", function (e) {
        if (isCalendlyEvent(e)) {
          console.log(e.data.event);
          console.log(e.data);
          if (e.data.event === "calendly.event_scheduled") {
            /*let url = `https://calendly.com/events/${
              e.data.payload.event.uri.split("/")[4]
            }/google_meet`;*/
            setConfirmationPopup(true);
            setCalendlyPopup(false);
            let calendlyScript = document.getElementById("calendly");
            if (calendlyScript) document.body.removeChild(calendlyScript);
          }
        }
      });
    };
    document.body.appendChild(script);
  }, [calendlyUsername, setConfirmationPopup, setCalendlyPopup]);

  return (
    <>
      <div
        className="popup"
        onClick={() => {
          showPopup(false);
          let calendlyScript = document.getElementById("calendly");
          if (calendlyScript) document.body.removeChild(calendlyScript);
        }}
      >
        {loading && <div className="popup-loader"> Loading....</div>}
        <div id="calendly-popup" className="calendly-popup"></div>
      </div>
    </>
  );
};

export default CalendlyPopup;
