import React from 'react';
import '../styles/MissionSection.css';

function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-content">
        {/* Левая часть: текст + карточка */}
        <div className="mission-text-block">
          <div className="mission-text">
            <div className="mission-subtitle">миссия</div>
            <h2>Почему мы начали этот путь?</h2>
            <blockquote className="mission-quote">
              Футбол — это не просто игра. Это дисциплина, уверенность, команда. И это — будущее.
            </blockquote>
            <p>
              Мы создаем футбольную школу имени Эҳсони Пайшанбе — игрока национальной сборной и гордости нашего района.
              Этот проект вдохновлен историей Эҳсони и стремлением дать каждому ребёнку шанс раскрыть свой потенциал через спорт.
            </p>
          </div>

          <div className="mission-card">
            <h3>Путь Эҳсони</h3>
            <ul>
              <li>Истиклол</li>
              <li>Навбахор</li>
              <li>Зоб Ахан</li>
              <li>Согдиана</li>
              <li>Сборная Таджикистана: 57 матчей - 5 голов</li>
            </ul>
          </div>
        </div>

        {/* Правая часть: фото */}
        <div className="mission-photo-wrapper">
          <img
            src="/images/main_ehsoni.png"
            alt="Эҳсони"
            className="player-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
