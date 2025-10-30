import React from "react";
import "../styles/Groups.css";

const groups = [
  {
    title: "Младшая группа",
    years: "2017-2020",
    img: "/images/gruppa1.jpg",
    text: `Вашему малышу будет интересно знакомиться с футболом через весёлые игры и простые упражнения. 
Тренировки построены в игровой форме, чтобы каждый ребёнок легко учился владеть мячом, двигаться в команде и получать массу радости от занятий. 
Мы создаём тёплую дружелюбную атмосферу, где ребёнок чувствует поддержку и развивается в своём темпе. 
Занятия помогают развить координацию, уверенность в себе и любовь к спорту с первых шагов.`,
  },
  {
    title: "Средняя группа",
    years: "2013-2016",
    img: "/images/gruppa2.jpg",
    text: `Дети этой возрастной группы совершенствуют свои навыки и изучают новые футбольные элементы под руководством опытных тренеров. 
Занятия включают тренировки и соревновательные задания, которые развивают физическую форму и командный дух. 
Мы поддерживаем желание детей к совершенствованию, поощряем инициативу и помогаем раскрывать их потенциал.`,
  },
  {
    title: "Старшая группа",
    years: "2009-2012",
    img: "/images/main_school_block.jpg",
    text: `Подростки тренируются по более продвинутой программе, совмещающей технику владения мячом, тактику и командное взаимодействие. 
Тренировки насыщенные и разнообразные, с упором на результат и спортивное развитие. 
Здесь ребята учатся не только футбольным навыкам, но и лидерству, ответственности и уважению к партнёрам.`,
  },
];

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 18L18 6M18 6v6M18 6h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Groups = () => {
  return (
    <section className="groups-section">
      <h2 className="groups-title">Наши группы</h2>

      <div className="groups-container">
        {groups.map((group, idx) => (
          <article className="group-card" key={idx}>
            <div className="card-header">
              <div className="title-block">
                <h3 className="group-title">{group.title}</h3>
                <div className="years">{group.years}</div>
              </div>

              <button className="arrow-btn" aria-label="Подробнее">
                <ArrowIcon />
              </button>
            </div>

            <div className="image-wrapper">
              <img src={group.img} alt={group.title} />
            </div>

            <div className="card-content">
              <p className="description">{group.text}</p>
            </div>

            <button className="signup-btn">Записаться</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Groups;
