import React, {useEffect, useRef, useState} from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data.js';
import {
    fetchPopularMovies,
    fetchTrendingMovies,
    fetchUpcomingMovies,
    fetchTopRatedMovies,
    fetchNetflixOriginals} from "../../api/api";

const TitleCards = ({title, category}) => {

    const cardsRef = useRef();
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const currentRef = cardsRef.current;
        currentRef.addEventListener('wheel',handleWheel);

        const fetchData = async () => {

            await fetchCategoriesMovies();

        };
        fetchData();

        return () => {
            currentRef.removeEventListener('wheel',handleWheel);
        }

    }, [category]);

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }

    const fetchCategoriesMovies = async () => {
        try {
            let data = [];
            switch (category) {
                case 'popular':
                    data = await fetchPopularMovies();
                    break;
                case 'top_rated':
                    data = await fetchTopRatedMovies();
                    break;
                case 'upcoming':
                    data = await fetchUpcomingMovies();
                    break;
                case 'trending':
                    data = await fetchTrendingMovies();
                    break;
                case 'netflix_originals':
                    data = await fetchNetflixOriginals();
                    break;

                default:
                    data = await fetchPopularMovies();

            }
            setApiData(data);
        } catch (e) {
            console.error('Error fetching movies:', e);
            setApiData([]);
        }
    };



    return (
        <div className='title-cards'>
            <h2>
                {title || 'popular'}
            </h2>
            <div className='card-list' ref={cardsRef}>
                {apiData.map((card, index)=>{
                    return <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title || card.name}/>
                        <p>{card.original_title || card.name}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default TitleCards;
