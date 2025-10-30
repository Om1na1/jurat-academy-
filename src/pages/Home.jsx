import React from 'react';
import Hero from '../components/Hero';
//import Card from '../components/Card';
import Form from '../components/Form';
import Quote from '../components/Quote';
import '../styles/Home.css';
import MissionSection from '../components/MissionSection'; 
import Stages from '../components/Stages';
import Karta from '../components/Karta';
import SchoolBlock from '../components/SchoolBlock';
import FootballBanner from '../components/FootballBanner';







export default function Home() {
  return (
    <div>
      <Hero />
      <Stages />
      <MissionSection />  
      <Karta/>
      <Quote />
      <SchoolBlock/>
      <FootballBanner/>
     
      
 
      
      

      <Form />
    </div>
  );
}
