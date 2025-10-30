import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Футбольная школа им.<br />Эхсони Пайшанбе</h1>
        <p>Наша цель — дать шанс молодым футболистам попасть в ведущие команды страны и в перспективе — в национальную сборную.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Записаться</button>
          <button className="btn-secondary">Участие в инициативе →</button>
        </div>
      </div>
    </section>
  );
}
