import React from "react";
import "../styles/ContactsHero.css";

const Contacts = () => {
  return (
    <section className="contacts-section">
      <div className="overlay">
        <h2 className="contacts-title">
          Если у вас есть вопросы,<br /> пожалуйста свяжитесь с нами!
        </h2>

        <div className="contacts-grid">
          {/* Адрес */}
          <div className="contact-card">
            <div className="icon">📍</div>
            <div>
              <h3>Адрес</h3>
              <p>
                Душанбе, Рудакийский район, село Водник
                <br />
                ул. Шамсиян 22
              </p>
            </div>
          </div>

          {/* Контакты */}
          <div className="contact-card">
            <div className="icon">☎️</div>
            <div>
              <h3>Контакты</h3>
              <p>Телефон: <a href="tel:+992901664633">+992 90 166 4633</a></p>
              <p>Email: <a href="mailto:info@tajikff.tj">info@tajikff.tj</a></p>
            </div>
          </div>

          {/* Расписание */}
          <div className="contact-card">
            <div className="icon">⏰</div>
            <div>
              <h3>Расписание работы</h3>
              <p>Понедельник – Пятница: 09:00 – 20:00</p>
              <p>Выходные и суббота: 10:30 – 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
