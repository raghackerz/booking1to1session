import { useEffect } from "react";
import API from "../API";

//Navigation
import { useNavigate } from "react-router";

export const useGoogleLogin = ({
  email,
  setError,
  setLoading,
  googleLogin,
  setEmailExists,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailExists = async () => {
      if (email === "") return;

      try {
        setError(false);
        setLoading(true);
        const exists = await API.checkEmailExists(email);
        if (googleLogin && exists) {
          const { accessToken, name } = await API.googleLogin(email);
          localStorage.authorization = accessToken;
          localStorage.userName = name;
          localStorage.email = email;
          navigate("/");
        } else if (exists) {
          navigate("/signin");
        } else {
          setEmailExists(exists);
        }
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    checkEmailExists();
  }, [email, googleLogin, navigate, setEmailExists, setError, setLoading]);
};
