import React, { useEffect } from "react";

//import GoogleLogin from 'react-google-login';

const GoogleLoginButton = ({ handleSuccess }) => {
  useEffect(() => {
    /* global google */
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/calendar",
        callback: handleSuccess,
      });
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/calendar",
        callback: handleSuccess,
      });
      console.log(tokenClient);
      google.accounts.id.renderButton(document.getElementById("google-login"), {
        theme: "outline",
        size: "large",
      });
    };

    document.body.appendChild(script);
  }, [handleSuccess]);
  return <div className="google-login" id="google-login"></div>;
};
export default GoogleLoginButton;
