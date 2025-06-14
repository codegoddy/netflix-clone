import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <div className='hero'>
                <img src={hero_banner} alt='hero banner' className='banner-img'/>
                <div className='hero-caption'>
                    <img src={hero_title} alt='hero title' className='caption-img'/>
                    <p>
                        Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
                    </p>
                    <div className='hero-btn'>
                        <button className='btn'><img src={play_icon} alt='play icon'/>Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt='info icon'/>More Info</button>
                    </div>
                    <TitleCards title={'Popular'} category={'popular'}/>
                </div>
            </div>
            <div className='more-cards'>
                <TitleCards title={'Trending'} category={'trending'}/>
                <TitleCards title={'Upcoming'} category={'upcoming'}/>
                <TitleCards title={'Netflix Originals'} category={'netflix_originals'}/>
                <TitleCards title={'Top Rated'} category={'top_rated'}/>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;
