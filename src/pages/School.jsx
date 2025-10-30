import React from 'react';
import Card from '../components/Card';
import '../styles/Home.css';
import Groups from '../components/Groups';
import Coaches from '../components/Coaches';
import Form from '../components/Form';
import SchoolHero from '../components/SchoolHero';

export default function Home() {
  return (
    <>
      <SchoolHero/>
      <Groups/>
      <Coaches/>
      <Form/> 

      
            
    </>
  );
}
