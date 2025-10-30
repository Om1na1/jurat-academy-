import React from "react";
import "../styles/Karta.css";

// Karta.jsx
export default function Karta() {
  return (
    <div className="karta-wrapper">
      <div className="karta-left">
        <div className="karta-small-text">МЫ УЖЕ НАЧАЛИ</div>
        <h2 className="karta-title">Первые шаги уже сделаны</h2>
        <div className="karta-description">
          На первом этапе мы начали строительство мини-футбольных площадок в каждом селе.<br />
          Из 43 запланированных объектов — уже 13 готовы и ежедневно принимают детей.<br />
          Это — не проект на бумаге. Это реальность, которая растёт вместе с нашими игроками.
        </div>
        <button className="karta-btn">Смотреть карту площадок →</button>
      </div>
      <div className="karta-right" />
    </div>
  );
}
