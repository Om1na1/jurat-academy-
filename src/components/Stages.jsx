import React from 'react';
import '../styles/Stages.css';

function StageNumber({ number }) {
  return (
    <div className="stage-number">
      {number.split('').map((char, index) => {
        const isMain = ['1', '2', '3'].includes(char);
        return (
          <span
            key={index}
            className={`stage-char ${isMain ? 'main' : 'secondary'}`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

function Stages() {
  return (
    <section className="stages-container">
      <h5 className="stages-title">ЭТАПЫ РЕАЛИЗАЦИИ</h5>
      <div className="stages-list">
        <div className="stage">
          <StageNumber number="1:0" />
          <p>строительство мини-футбольных дворовых площадок в каждом селе</p>
        </div>
        <div className="stage">
          <StageNumber number="2:0" />
          <p>организация футбольных секций в каждом кишлаке с привлечением квалифицированных тренеров</p>
        </div>
        <div className="stage">
          <StageNumber number="3:0" />
          <p>создание профессионального футбольного клуба</p>
        </div>
      </div>
    </section>
  );
}

export default Stages;
