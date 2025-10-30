import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/infrastructure">Инфраструктура</Link>
          <Link to="/school">Школа</Link>
          <Link to="/trainings">Тренировки</Link>
          <Link to="/club">Клуб</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <div className="logo">
          <img src='/images/logo.svg' alt="Логотип футбольной школы" />
        </div>
        <div className="social-icons">
          <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
        </div>
      </div>
    </header>
  );
}