import { useEffect, useState } from "react";
import API from "../API";

//hooks
import { useGoogleLogin } from "./useGoogleLogin";

//navigation
import { useNavigate } from "react-router-dom";

export const useSignInFetch = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);

  const navigate = useNavigate();

  useGoogleLogin({ email, setError, setLoading, googleLogin, setEmailExists });

  useEffect(() => {
    const fetchSignIn = async () => {
      if (email === "" || password === "") return;

      try {
        setLoading(true);
        setError(false);
        const { accessToken, name } = await API.signIn(email, password);
        localStorage.authorization = accessToken;
        localStorage.userName = name;
        localStorage.email = email;
      } catch {
        setError(true);
      } finally {
        setLoading(false);
        setEmail("");
        setPassword("");
        if (localStorage.authorization) navigate("/");
      }
    };

    fetchSignIn();
  }, [email, password, navigate]);

  return {
    setEmail,
    setPassword,
    loading,
    error,
    name,
    setName,
    emailExists,
    setGoogleLogin,
  };
};
