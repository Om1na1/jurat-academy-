// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import School from './pages/School';
import Club from './pages/Club';
import Trainings from './pages/Trainings';
import Infrastructure from './pages/Infrastructure';
import Contacts from './pages/Contacts';
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/club" element={<Club />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer /> 
    </>
  );
}
