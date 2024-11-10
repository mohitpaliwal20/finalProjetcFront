import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import HomeCard from '../components/HomeCard';
import MakeIt from '../components/MakeIt';
import MeetYourMechanic from '../components/MeetYourMechanic';
import ServicePage from '../components/ServicePage';
import Make2 from '../components/Make2';
import FooterHeader from '../components/FooterHeader';
import FooterContent from '../components/FooterContent';
function App() {
  return (
    <div className="App">
     
      <HeroSection/>
      <HomeCard></HomeCard>
      <ServicePage></ServicePage>
      <Carousel></Carousel>
      <MeetYourMechanic></MeetYourMechanic>
      <MakeIt></MakeIt>
      {/* <Make2></Make2> */}
      <FooterHeader />
      <FooterContent />
    </div>
  );
}

export default App;