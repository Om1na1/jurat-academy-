// components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <img src="/images/logo.svg" alt="Логотип" className="footer-logo" />
          <nav className="footer-nav">
            <Link to="/">Главная</Link>
            <Link to="/infrastructure">Инфраструктура</Link>
            <Link to="/school">Школа</Link>
            <Link to="/training">Тренировки</Link>
            <Link to="/club">Клуб</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
        <hr className="footer-separator" />
        <div className="footer-bottom">
          <span>© 2025 ФШЭП. Все права защищены</span>
          <Link to="/privacy">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
