import { useState, useEffect } from "react";
import API from "../API";

//hooks
import { useGoogleLogin } from "./useGoogleLogin";

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);

  useGoogleLogin({ email, setError, setLoading, googleLogin, setEmailExists });

  useEffect(() => {
    const postPassword = async () => {
      if (password === "" || name === "") return;
      try {
        setError(false);
        setLoading(true);

        const token = await API.signUp(email, password, name);
        localStorage.authorization = token;
        localStorage.userName = name;
        localStorage.email = email;
        //add navigation to homepage
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    postPassword();
  }, [email, name, password]);

  return {
    email,
    name,
    emailExists,
    setGoogleLogin,
    setEmail,
    setPassword,
    setName,
    loading,
    error,
  };
};
