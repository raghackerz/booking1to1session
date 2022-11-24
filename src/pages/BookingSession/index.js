import React, { useEffect } from "react";

//Components
import MentorCard from "../../components/MentorCard";
import Grid from "../../components/Grid";
import HomePageNavbar from "../../components/HomePageNavbar";
import BookingSessionContainer from "../../components/BookingSessionContainer";

//Hooks
import { useMentorFetch } from "../../hooks/useMentorFetch";

//Routing
import { useParams } from "react-router-dom";

//Images
//import MentorImages from "../../utils/MentorImages";

const BookingSession = () => {
  const { data, error, loading, setSearchTerm } = useMentorFetch();
  const { searchTerm } = useParams();
  useEffect(() => {
    if (searchTerm) {
      setSearchTerm(searchTerm);
    } else setSearchTerm(" ");
  });
  if (error) {
    return <div>Something went wrong...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  /*const mentor = {
    name: "Raghvendra",
    image: MentorImages["GOOGLE"],
    previousJob: "Ex-Amazon",
    collegeName: "LPU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    gender: "male",
    skills: ["html", "css", "javascript", "React JS"],
    calendlyUsername: "raghackerz",
  };

  const data1 = [mentor, mentor, mentor, mentor, mentor, mentor, mentor];*/

  return (
    <>
      <HomePageNavbar />
      <BookingSessionContainer>
        <Grid>
          {data &&
            data.map((mentor) => {
              return <MentorCard key={mentor?.name} mentor={mentor} />;
            })}
        </Grid>
      </BookingSessionContainer>
    </>
  );
};

export default BookingSession;
