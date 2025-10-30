import React from "react";
import "../styles/ClubBanner.css";

export default function FootballBanner() {
  return (
    <div className="banner-container" aria-label="Клубный баннер">
      <div className="overlay">
        <h1>От школы — к профессиональному клубу</h1>

        <p>
          Наша цель — создать профессиональный футбольный клуб в чемпионате
          Таджикистана.
        </p>

        <p>
          Ученики школы получат возможность не только тренироваться, но и
          пробиться в основной состав клуба.
        </p>

        <button type="button">О клубе ➞</button>
      </div>
    </div>
  );
}
