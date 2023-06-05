import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import MusicPagesAll from "../component/MusicPagesAll";
import {fetchOneMusicGenre} from "../https/musicApi";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {ALL_MUSIC_ROUTER, ALL_MUSIC_ROUTER_GENRES} from "../utils/const";
import Genre from "./Genre";

const AllMusic = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const [genre, setGenre] = useState('')
    const {music} = useContext(Context)
    return (
        <div className='container'>
            <div className='flex items-center mt-8 mb-3'>
                <span className='text-xl'>Треки</span>
                <div className='bg-[#1B1B1B] w-full h-0.5 ml-5' ></div>
            </div>
            <div className='flex bg-[#0F0F0F] w-96 px-6 rounded-2xl h-20 p-5 mt-5 justify-between'>
                <div className="relative h-10 w-72 min-w-[200px]">
                    <select value={genre} onChange={e => setGenre(e.target.value)}
                        className="peer h-full w-44 rounded-[7px] border border-[#1B1B1B] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0">
                        <option className='text-white bg-[#1B1B1B] border-0' value="All">Все треки</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="Dabstep">Dabstep</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="Trap">Trap</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="Pop">Pop</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="Hyperpop">Hyperpop</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="House">House</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="DaB">DaB</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="Synthpop">Synthpop</option>
                        <option className='text-white bg-[#1B1B1B] border-0' value="Ambient">Ambient</option>
                    </select>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-44 select-none text-[11px] font-normal leading-tight text-[#4B4B4B] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1B1B1B] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1B1B1B] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#0077FF] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Выберите жанр
                    </label>
                </div>
                <button onClick={() => navigate(ALL_MUSIC_ROUTER_GENRES + '/' + genre)}>Найти</button>
            </div>
            <div className='mt-5'>
                {location.pathname === ALL_MUSIC_ROUTER_GENRES + '/' + genre
                    ?
                    <div>
                        <Genre music={music} />
                    </div>
                    :
                    <div>
                        <MusicPagesAll music={music} text={''} />
                    </div>
                }
            </div>
        </div>
    );
});

export default AllMusic;