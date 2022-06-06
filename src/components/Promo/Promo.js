import React from 'react';
import './Promo.css';

function Promo() {

    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <div className="promo__buttons">
                    <a href="#proj">
                        <button
                            type="button"
                            aria-label="О проекте"
                            className="promo__button"
                        >О проекте</button>
                    </a>
                    <a href="#techs">
                        <button
                            type="button"
                            aria-label="Технологии"
                            className="promo__button"
                        >Технологии</button>
                    </a>
                    <a href="#about">
                        <button
                            type="button"
                            aria-label="Студент"
                            className="promo__button"
                        >Студент</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Promo;