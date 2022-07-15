import React from 'react';

//Components
import CompanyLogo from '../../components/CompanyLogo';
import Footer from '../../components/Footer';
import HomePageNavbar from '../../components/HomePageNavbar';
import HomePageHeader from '../../components/HomePageHeader';

const Home = () => {
  return (
    <>
      <HomePageNavbar />
      <HomePageHeader />
      <CompanyLogo />
      <Footer />
    </>
  );
}

export default Home;
