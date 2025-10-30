import React from "react";
import "../styles/EnrollForm.css";

export default function EnrollForm({
  imageUrl = "/images/main_club_bg.jpg", // замени на свой путь
}) {
  return (
    <section className="enroll">
      {/* Левая стопка изображений */}
      <div className="enroll__media" aria-hidden="true">
        <div
          className="media-card media-card--back"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div
          className="media-card media-card--mid"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div
          className="media-card media-card--front"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      {/* Правая карточка формы */}
      <form className="enroll__card" onSubmit={(e) => e.preventDefault()}>
        <div className="enroll__header">
          <span className="dot" />
          <span className="enroll__title">Запись в школу</span>
        </div>

        <label className="field">
          <span className="field__label">Имя</span>
          <input className="field__control" type="text" placeholder="Имя" />
        </label>

        <label className="field">
          <span className="field__label">Телефон*</span>
          <input
            className="field__control"
            type="tel"
            placeholder="Номер телефона"
          />
        </label>

        <label className="field">
          <span className="field__label">Ваша группа</span>
          <input
            className="field__control"
            type="text"
            placeholder="Младшая группа"
          />
        </label>

        <label className="field">
          <span className="field__label">Область</span>
          <input
            className="field__control"
            type="text"
            placeholder="Хатлонская"
          />
        </label>

        <label className="field">
          <span className="field__label">Сообщение*</span>
          <textarea
            className="field__control field__control--area"
            placeholder="Сообщение"
          />
        </label>

        <button className="btn" type="submit">
          Записаться
        </button>
      </form>
    </section>
  );
}
