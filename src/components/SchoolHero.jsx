import React from 'react';
import '../styles/SchoolHero.css';

const SchoolHero = () => {
  return (
    <section className="school-section">
      <div className="school-hero-overlay">
        <div className="section-content">
          <h1>Футбольная школа им. Эхсони Пайшанбе</h1>
          <p>
            Одним из ключевых принципов школы является развитие личностных качеств молодых игроков.
            Они учатся быть дисциплинированными, ответственными, трудолюбивыми и уважительными к партнёрам и противникам.
            Кроме того, академия акцентирует внимание на формировании здорового образа жизни,
            правильном питании и уходе за здоровьем.
          </p>
          <button className="cta-button">Записаться</button>
        </div>
      </div>
    </section>
  );
};

export default SchoolHero;
