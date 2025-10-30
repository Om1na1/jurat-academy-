import React from "react"; 
import "../styles/ContactsHero.css";

const Contacts = () => {
  return (
    <section className="contacts-section">
      <div className="overlay">
        
        {/* Заголовок */}
        <h2 className="contacts-title">
          Если у вас есть вопросы,<br /> пожалуйста свяжитесь с нами!
        </h2>

        {/* Контент */}
        <div className="contacts-grid">
          {/* Адрес */}
          <div className="contact-card address">
            <h3>
              <span className="icon">📍</span>
              Адрес
            </h3>
            <p>
              Душанбе, Рудакийский район, село Водник
              <br />
              ул. Шамсиян 22
            </p>
          </div>

          {/* Контакты */}
          <div className="contact-card phone">
            <h3>
              <span className="icon">☎️</span>
              Контакты
            </h3>
            <p>Телефон: <a href="tel:+992901664633">+992 90 166 4633</a></p>
            <p>Email: <a href="mailto:info@tajikff.tj">info@tajikff.tj</a></p>
          </div>

          {/* Расписание */}
          <div className="contact-card schedule">
            <h3>
              <span className="icon">⏰</span>
              Расписание работы
            </h3>
            <p>Понедельник – Пятница: 09:00 – 20:00</p>
            <p>Выходные и суббота: 10:30 – 22:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
