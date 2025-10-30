import React from 'react';
import '../styles/Quote.css';

const Quote = () => {
  return (
    <div className="quote-container">
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Логотип школы" className="quote-logo" />
      <div className="quote-divider" />
      <p className="quote-text">
        "Футбол научил меня верить в себя. Теперь я хочу, чтобы каждый ребенок знал — у них тоже есть шанс." —{' '}
        <span className="highlight">Эхсони Пайшанбе</span>
      </p>
    </div>
  );
};

export default Quote;
