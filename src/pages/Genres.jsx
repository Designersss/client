import React from 'react';
import {Link} from "react-router-dom";
import {GENRES_ROUTER} from "../utils/const";
import sad from "../img/main/sad music 1.png";
import hyperpop from "../img/main/hyperpop 4.png";
import trap from "../img/main/trap 4.png";
import alterRok from "../img/genres/alter-rok.jpg";
import pank from "../img/genres/art-pank.jpg";
import pankrok from "../img/genres/pank-rok.jpg";
import djazeBluze from "../img/genres/djaz-bluze.jpg";
import memfis from "../img/genres/мемфис.jpg";
import калыбельные from "../img/genres/калыбельные.jpg";
import авангард from "../img/genres/авангард.jpg";
import барокко from "../img/genres/барокко.jpg";
import пение from "../img/genres/пение.jpg";
import минимализм from "../img/genres/минимализм.jpg";
import опера from "../img/genres/опера.jpg";
import соната from "../img/genres/соната.jpg";
import органум from "../img/genres/органум.jpg";
import водевиль from "../img/genres/водевиль.jpg";
import американа from "../img/genres/американа.png";
const Genres = () => {
    return (
        <div className='container'>
            <div className='flex items-center mt-8 mb-3'>
                <span className='text-xl'>Жанры</span>
                <div className='bg-[#1B1B1B] w-full h-0.5 ml-5'></div>
            </div>
            <div className='grid grid-cols-6 gap-10'>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={sad} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>SAD MUSIC</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={hyperpop} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>HYPERPOP</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>TRAP</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={pank} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Арт-панк</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={alterRok} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Альтернативный рок</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={pankrok} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Панк рок</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={djazeBluze} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Джаз-блюз</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={memfis} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Мемфис Блюз</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={калыбельные} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Колыбельные</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={авангард} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Авангард</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={барокко} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Барокко</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={пение} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Пение</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={минимализм} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Минимализм</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={опера} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Опера</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={органум} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Органум</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={соната} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Соната</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={водевиль} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Водевиль</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={американа} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Американа</span>
                </Link>
            </div>
        </div>
    );
};

export default Genres;