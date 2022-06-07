import React from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { messageKeyWordMovies } from '../../utils/utils';


function SearchForm(props) {
    const location = useLocation();
    const isLocationMovies = location.pathname === '/movies';

    const [currentValue, setCurrentValue] = React.useState('');
    const [currentSavedValue, setCurrentSavedValue] = React.useState('');

    function handelIsSearchMovies(evt) {
        console.log(evt.target.value);
        isLocationMovies ?
            setCurrentValue(evt.target.value) :
            setCurrentSavedValue(evt.target.value);
    }

    React.useEffect(() => {
        if (isLocationMovies) {
            const searchStr = JSON.parse(localStorage.getItem("searchedMovieWord"));
            setCurrentValue(searchStr);
            props.setSearchMovies(currentValue);
        }
        else {
            setCurrentSavedValue('');
            props.setSearchSavedMovies(currentSavedValue);
        }

        props.setMessageSearchResult(null);
        props.setIsPreloader(true);
        props.onGetMovies();
        setTimeout(() => props.setIsPreloader(false), 700);
        // eslint-disable-next-line
    }, []);

    // React.useEffect(() => {
    //     if (!isLocationMovies) {
    //         if (currentValue === '') {
    //             props.onGetMovies();
    //         }
    //     }
    // },// eslint-disable-next-line
    //     [currentValue, currentSavedValue]);

    function handleSubmit(evt) {

        evt.preventDefault();

        if (isLocationMovies) {
            console.log("searchedMovieWord = " + currentValue);
            localStorage.setItem("searchedMovieWord", JSON.stringify(currentValue));
            props.setSearchMovies(currentValue);
            console.log(currentValue);
            if (!currentValue) {
                props.setMessageSearchResult(messageKeyWordMovies);
                return;
            }
        } else {
            props.setSearchSavedMovies(currentSavedValue);
            if (!currentSavedValue) {
                props.setMessageSearchResult(messageKeyWordMovies);
                return;
            }
        }
        props.setMessageSearchResult(null);
        props.setIsPreloader(true);
        props.onGetMovies();
        setTimeout(() => props.setIsPreloader(false), 700);
    }

    return (
        <>
            <div className="form__desctop">
                <form
                    onSubmit={handleSubmit}
                    name="search-films"
                    className="form-search">
                    <div className="search-films__container search-films__container_decktop">
                        <input
                            id="search"
                            name="search"
                            type="text"
                            value={isLocationMovies ? currentValue || "" : currentSavedValue || ""}
                            className="search-films__input"
                            required
                            minLength="1"
                            placeholder="Фильм"
                            onChange={handelIsSearchMovies}
                        />
                        <button
                            type="submit"
                            aria-label="Кнопка поиска фильмов"
                            className="search-films__submit"
                        > Найти
                        </button>
                    </div>
                    <FilterCheckbox
                        changeChecked={props.changeChecked}
                        onGetMovies={props.onGetMovies}
                        searchShortMovies={props.searchShortMovies}
                        setSearchShortMovies={props.setSearchShortMovies}
                        isChecked={props.isChecked}
                        isCheckedSaved={props.isCheckedSaved}
                    />
                </form>
            </div>

            {/* <div className="form__mobile">
                <form
                    onSubmit={handleSubmit}
                    name="search-films"
                    noValidate
                    className="form-search">
                    <div className="search-films__container">
                        <input
                            id="search"
                            name="search"
                            type="text"
                            value={isLocationMovies ? props.searchMovies || "" : props.searchSavedMovies || ""}
                            className="search-films__input"
                            required
                            minLength="2"
                            placeholder="Фильм"
                            onChange={handelIsSearchMovies}
                        />
                        <button
                            type="submit"
                            aria-label="Кнопка поиска фильмов"
                            className="search-films__submit"
                        >
                        </button>
                    </div>
                    <FilterCheckbox
                        changeChecked={props.changeChecked}
                        onGetMovies={props.onGetMovies}
                        searchShortMovies={props.searchShortMovies}
                        setSearchShortMovies={props.setSearchShortMovies}
                        isChecked={props.isChecked}
                        isCheckedSaved={props.isCheckedSaved}
                    />
                </form>
            </div> */}
        </>

    );
}

export default SearchForm;