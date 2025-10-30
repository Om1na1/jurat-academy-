import React from "react";
import "../styles/ContactsHero.css";

const ContactsHero = () => {
  return (
    <section className="contacts-section">
      <div className="overlay">
        <h2 className="contacts-title">
          Если у вас есть вопросы,<br /> пожалуйста свяжитесь с нами!
        </h2>

        <div className="contacts-grid">
          {/* Адрес */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Адрес</h3>
              <p>
                ВМКБ, Рушанский район, село Бомок,
                <br />
                ул. Х. Шодмонов 2
              </p>
            </div>
          </div>

          {/* Контакты */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Контакты</h3>
              <p>Телефон: <a href="tel:+99250116-4653">(+992) 50-116-4653</a></p>
              <p>Email: <a href="mailto:info@jurat.tj">info@jurat.tj</a></p>
            </div>
          </div>

          {/* Расписание */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="white"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Расписание работы</h3>
              <p>Понедельник – Пятница: 09:00 – 20:00</p>
              <p>Воскресенье & Суббота: 10:30 – 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsHero;
