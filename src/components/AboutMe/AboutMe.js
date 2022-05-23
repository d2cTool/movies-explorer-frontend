import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg'

function AboutMe() {
    return (
        <section id="about" className="about-me block-section">
            <h2 className="about-me__title block-section__title">Студент</h2>
            <div className="about-me__block">
                <div className="about-me__block-info">
                    <h3 className="about-me__suttitle">Вячелав</h3>
                    <p className="about-me__text">Фронтенд разработчик</p>
                    <article className="about-me__info">
                        Окончил железнодорожный университет по&nbsp;инженерной специальности. Уже несколько лет работаю c# разработчиком. Теперь пытаюсь погрузиться в&nbsp;мир фронтенда
                    </article>
                    <nav className="about-me__contacts">
                        <a
                            href="https://github.com/d2cTool"
                            target="_blank"
                            className="about-me__link link-click"
                            rel="noreferrer noopener">
                            <p className="about-me__link-text">GitHub</p>
                        </a>
                    </nav>
                </div>
                <img
                    className="about-me__image"
                    src={photo}
                    alt="фото студента"
                />
            </div>

        </section>
    );
}

export default AboutMe;