import React from 'react';
import './Promo.css';

function Promo() {

    const ref = React.useRef(null);

  function scrollThrough() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <div className="promo__buttons">
                    <button
                        type="button"
                        aria-label="посмотреть проект"
                        className="promo__button"
                        ref={ref}
                        onClick={scrollThrough}
                    >О проекте</button>
                    <button
                        type="button"
                        aria-label="посмотреть проект"
                        className="promo__button"
                        ref={ref}
                        onClick={scrollThrough}
                    >Технологии</button>
                    <button
                        type="button"
                        aria-label="посмотреть проект"
                        className="promo__button"
                        ref={ref}
                        onClick={scrollThrough}
                    >Студент</button>
                </div>
            </div>
        </section>
    );
}

export default Promo;