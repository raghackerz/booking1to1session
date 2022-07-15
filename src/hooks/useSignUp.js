import { useState, useEffect } from 'react'
import API from '../API'

//Navigation
import { useNavigate } from 'react-router'

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailExists = async () => {
      if (email === "") return;

      try {
        setError(false);
        setLoading(true);
        const exists = await API.checkEmailExists(email);
        if (googleLogin && exists) {
          const token = await API.googleLogin(email);
          localStorage.authorization = token;
          navigate('/');
        }
        else if (exists) {
          navigate('/signin');
        }
        else {
          setEmailExists(exists);
        }
      }
      catch {
        setError(true);
      }
      setLoading(false);
    }
    checkEmailExists();
  }, [email, googleLogin, navigate])

  useEffect(() => {
    const postPassword = async () => {
      if (password === "" || name === "") return;
      try {
        setError(false);
        setLoading(true);

        const token = await API.signUp(email, password, name);
        localStorage.authorization = token;
      }
      catch {
        setError(true);
      }
      setLoading(false);
    }
    postPassword();
  }, [email, name, password])

  return { email, name, emailExists, setGoogleLogin, setEmail, setPassword, setName, loading, error };
};

