import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        
        {/* Навигация по центру */}
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/infrastructure">Инфраструктура</Link>
          <Link to="/school">Школа</Link>
          <Link to="/trainings">Тренировки</Link>
          <Link to="/club">Клуб</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>

        {/* Логотип ПОСЛЕ навигации */}
        <div className="logo">
          <img src="/images/logo.svg" alt="Логотип" />
        </div>

        {/* Соц. иконки справа */}
        <div className="social-icons">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;