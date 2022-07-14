import React from 'react';

//Hooks
import { useMentorFetch } from '../../hooks/useMentorFetch';

const BookingSession = () => {
  const { data, error, loading, setSearchTerm } = useMentorFetch();
  return (
    <div>
    </div>
  );
}

export default BookingSession;
