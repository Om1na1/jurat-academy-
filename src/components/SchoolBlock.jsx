import React from 'react';
import '../styles/SchoolBlock.css';

const IconIndividual = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
  </svg>
);

const IconPhysical = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E40045" />
    <path
      d="M8 10v-2a4 4 0 018 0v2a3 3 0 11-8 0z"
      fill="white"
    />
    <path
      d="M9 14h6v2a1 1 0 01-6 0v-2z"
      fill="white"
    />
    <path
      d="M12 6.5l.95 1.9 2.1.3-1.52 1.48.36 2.08-1.89-1-1.89 1 .36-2.08-1.52-1.48 2.1-.3.95-1.9z"
      fill="white"
    />
  </svg>
);

const IconSport = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.31 8l5.74 9.94" />
    <path d="M9.69 8h11.48" />
  </svg>
);

const IconSupport = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8a6 6 0 00-12 0" />
    <path d="M6 18v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
  </svg>
);

const SchoolBlock = () => {
  return (
    <div className="school-container">
      <div className="school-content">
        <div className="school-image">
          <img src="/images/main_school_block.jpg" alt="Тренировка детей" />
        </div>
        <div className="school-text">
          <p className="section-label">НАША ШКОЛА</p>
          <h2>Здесь начинается путь к большому футболу</h2>
          <p className="school-description">
            Наша школа — это не просто тренировки. Это место, где дети становятся частью команды, учатся побеждать,
            уважать соперников и верить в себя.
          </p>
          <p className="school-description">
            Программа построена по современным методикам, с учётом возраста, физического развития и характера каждого ученика.
            Наши тренеры — это не только профессионалы, но и наставники, которые помогут вырастить не только сильного игрока,
            но и уверенного человека.
          </p>
          <button className="school-button">Узнать больше о школе</button>
        </div>
      </div>

      <div className="school-features">
        <div className="feature">
          <div className="icon-bg">
            <IconIndividual />
          </div>
          <div className="feature-text">
            <h4>Индивидуальный подход</h4>
            <p>Малые группы, внимание к каждому ребёнку, корректировка плана тренировок под его особенности.</p>
          </div>
        </div>

        <div className="feature"> 
          <div className="icon-bg">
            <IconPhysical />
          </div>
          <div className="feature-text">
            <h4>Физическое и личностное развитие</h4>
            <p>Мы формируем не только игроков, но и здоровых, дисциплинированных молодых людей.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon-bg">
            <IconSport />
          </div>
          <div className="feature-text">
            <h4>Путь в большой спорт</h4>
            <p>Возможность попасть в команду, участвовать в соревнованиях и национальных турнирах.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon-bg">
            <IconSupport />
          </div>
          <div className="feature-text">
            <h4>Безопасная и поддерживающая среда</h4>
            <p>Уважение, взаимопомощь и комфортное командное общение с первых дней.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolBlock;
