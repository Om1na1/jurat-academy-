import React, { useRef } from "react";
import "../styles/Coaches.css";

const coaches = [
  {
    image: "/images/main_ehsoni.png",
    name: "Александр Иванов",
    description:
      "Профессиональный тренер со стажем – 15 лет. Обучает младшие и средние группы."
  },
  {
    image: "/images/main_ehsoni.png",
    name: "Александр Иванов",
    description:
      "Профессиональный тренер со стажем – 15 лет. Обучает младшие и средние группы."
  },
  {
    image: "/images/main_ehsoni.png",
    name: "Александр Иванов",
    description:
      "Профессиональный тренер со стажем – 15 лет. Обучает младшие и средние группы."
  },
  {
    image: "/images/main_ehsoni.png",
    name: "Александр Иванов",
    description:
      "Профессиональный тренер со стажем – 15 лет. Обучает младшие и средние группы."
  },
  {
    image: "/images/main_ehsoni.png",
    name: "Александр Иванов",
    description:
      "Профессиональный тренер со стажем – 15 лет. Обучает младшие и средние группы."
  }
];

const Coaches = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -252 : 252; // ширина карточки + gap
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="coaches-section">
      <h2>Тренерский состав</h2>
      <div className="slider-container">
        <div className="coaches-slider" ref={sliderRef}>
          {coaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <img src={coach.image} alt={coach.name} className="coach-img" />
              <div className="coach-info">
                <div className="coach-name">{coach.name}</div>
                <div className="coach-desc">{coach.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-buttons">
          <button className="slider-btn prev" onClick={() => scroll("left")}>
            <span className="arrow">&#8592;</span>
          </button>
          <button className="slider-btn next" onClick={() => scroll("right")}>
            <span className="arrow">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
