import React from 'react';
import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import { getHeroesByName } from '../helpers';

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse( location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }


    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row p-5">
                <div className="col-5">
                    <h4>Searching...</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} aria-label='heroForm'>
                        <input 
                        type="text" 
                        className='form-control'
                        placeholder='Search a hero'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={onInputChange}
                        />
                    <button className='btn btn-outline-primary mt-3'>Search</button>    
                    </form>
                    
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />

                    <div className="alert alert-primary animate__animated animate__fadeIn" aria-label = "searchHeroDiv" style={{display: showSearch? "" : "none"}}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeIn" aria-label = "searchHeroError" style={{display: showError? "" : "none"}}>
                        No hero result with <b>{q}</b>
                    </div>
                    
                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}
