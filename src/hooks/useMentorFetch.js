import { useEffect, useState } from 'react';
import API from '../API'

export const useMentorFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchMentor = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await API.fetchMentors(searchTerm);
        setData(data);
      }
      catch {
        setError(true);
      }
      setLoading(false);
    }

    fetchMentor();
  }, [searchTerm])

  return { data, error, loading, setSearchTerm };
}
