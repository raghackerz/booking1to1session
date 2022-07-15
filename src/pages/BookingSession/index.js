import React from 'react';

//Hooks
import { useMentorFetch } from '../../hooks/useMentorFetch';

const BookingSession = () => {
  const { data, error, loading, setSearchTerm } = useMentorFetch();
  if (error) {
    return <div>Something went wrong...</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
    </div>
  );
}

export default BookingSession;
