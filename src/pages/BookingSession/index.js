import React, { useEffect } from 'react';

//Hooks
import { useMentorFetch } from '../../hooks/useMentorFetch';

//Routing
import { useParams } from 'react-router-dom'

const BookingSession = () => {
  const { data, error, loading, setSearchTerm } = useMentorFetch();
  const { searchTerm } = useParams();
  useEffect(() => {
    if (searchTerm) {
      setSearchTerm(searchTerm);
    }
  })
  if (error) {
    return <div>Something went wrong...</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default BookingSession;
