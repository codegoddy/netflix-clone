import React, {useEffect, useRef} from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data.js';


const TitleCards = ({title, category}) => {

    const cardsRef = useRef();

    useEffect(() => {
        cardsRef.current.addEventListener('wheel',handleWheel)
    }, []);

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }

    return (
        <div className='title-cards'>
            <h2>
                {title ? title : 'Popular on Netflix'}
            </h2>
            <div className='card-list' ref={cardsRef}>
                {cards_data.map((card,index)=>{
                    return <div className='card' key={index}>
                        <img src={card.image} alt=''/>
                        <p>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default TitleCards;
