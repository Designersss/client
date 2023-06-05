import React, {useContext, useEffect, useState} from 'react';
import '../../styles/player.scss'
import useSound from "use-sound";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {LOGIN_ROUTER, REACT_APP_API_URL} from "../../utils/const";
import {useLocation} from "react-router-dom";
import {fetchOneMusic} from "../../https/musicApi";
const Player = observer (() => {
    const {playerMusic} = useContext(Context)
    const [pla, setPla] = useState()
    const audioElement = new Audio(REACT_APP_API_URL + playerMusic.playerMusic.trackMp3);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0)
    const [current, setCurrent] = useState(0)
    const playId = document.getElementsByClassName("audio-play")[0]
    useEffect(() => {
        fetchOneMusic(23).then(data => playerMusic.setPlayerMusic(data))
    }, [])
    const playSound = () => {
        if (isPlaying) {
            playId.pause()
            setIsPlaying(false)
        } else {
            playId.play()
            setIsPlaying(true)
        }

    }
    const volume = () => {
        playId.volume-=0.1
    }
    return (
            <div className='container flex justify-center'>
                <div className='w-[700px] fixed bottom-2'>
                    <div className='flex items-center bg-[#1B1B1B] rounded-lg px-10 py-2 justify-between'>
                        <div className='flex w-12 h-12'>
                            <img className='rounded-full' src={REACT_APP_API_URL + playerMusic.playerMusic.img} alt=""/>
                        </div>
                        <div className='flex items-center'>
                            <button className='ml-3'>
                                <svg width="14" height="14" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.93261 9.23074L0.889724 5.35193C0.60582 5.19556 0.60582 4.80455 0.889724 4.64818L7.93261 0.769367C8.21652 0.612997 8.57153 0.808502 8.57153 1.12124L8.57153 8.87886C8.57153 9.1916 8.2167 9.38711 7.93261 9.23074Z" fill="#F1F1F1"/>
                                    <rect y="0.714233" width="1.42857" height="8.57143" fill="#F1F1F1"/>
                                </svg>
                            </button>
                            <button onClick={playSound} className='ml-3'>
                                {isPlaying
                                    ?
                                    <svg width="14" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.70563 13.1783H1.13576C0.508497 13.1783 0 12.6698 0 12.0426V1.1465C0 0.519239 0.508497 0.0107422 1.13576 0.0107422H3.70563C4.33289 0.0107422 4.84139 0.519239 4.84139 1.1465V12.0426C4.84139 12.6698 4.33289 13.1783 3.70563 13.1783Z" fill="white"/>
                                        <path d="M11.8638 13.1676H9.29396C8.6667 13.1676 8.1582 12.6591 8.1582 12.0318V1.13576C8.1582 0.508497 8.6667 0 9.29396 0H11.8638C12.4911 0 12.9996 0.508497 12.9996 1.13576V12.0318C12.9996 12.6591 12.4911 13.1676 11.8638 13.1676Z" fill="white"/>
                                    </svg>
                                    :
                                    <svg width="14" height="14" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.54678 0.0770397L10.7227 5.50737C11.0925 5.72629 11.0925 6.27371 10.7227 6.49263L1.54678 11.923C1.17689 12.1419 0.714355 11.8682 0.714355 11.4303V0.569666C0.714355 0.13183 1.17665 -0.141878 1.54678 0.0770397Z" fill="#F1F1F1"/>
                                    </svg>
                                }
                            </button>
                            <button className='ml-3'>
                                <svg width="14" height="14" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.924565 0.769262L7.96745 4.64807C8.25136 4.80444 8.25136 5.19545 7.96745 5.35182L0.924565 9.23063C0.640661 9.387 0.285645 9.1915 0.285645 8.87876V1.12114C0.285645 0.808398 0.640479 0.612892 0.924565 0.769262Z" fill="#F1F1F1"/>
                                    <rect x="7.42822" y="0.714233" width="1.42857" height="8.57143" fill="#F1F1F1"/>
                                </svg>
                            </button>
                        </div>
                        <audio className='audio-play' src={REACT_APP_API_URL + playerMusic.playerMusic.trackMp3} />
                        <div className='flex'>
                            <p className='flex justify-center text-[12px] text-[#A7A7A7]'>{playerMusic.playerMusic.name}</p>
                            {/*<div className="flex ml-52 text-[12px] text-[#9B9B9B] justify-end">*/}
                            {/*    <p>{'0' + ':' + Math.round(current)}</p>*/}
                            {/*    <p>/</p>*/}
                            {/*    <p>{'0' + ':' + Math.round(duration)}</p>*/}
                            {/*</div>*/}
                        </div>
                        <div className='flex items-center'>
                            <button className='mr-5'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 16L7.695 14.849C3.06 10.7771 0 8.09155 0 4.79564C0 2.11008 2.178 0 4.95 0C6.516 0 8.019 0.706267 9 1.82234C9.981 0.706267 11.484 0 13.05 0C15.822 0 18 2.11008 18 4.79564C18 8.09155 14.94 10.7771 10.305 14.8578L9 16Z"
                                        fill="#9B9B9B"/>
                                </svg>
                            </button>
                            <button>
                                <svg width="17" height="19" viewBox="0 0 17 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.1651 13.2966C13.448 13.2966 12.8061 13.578 12.317 14.0216L5.58204 10.1043C5.63064 9.88723 5.66825 9.66856 5.66825 9.44283C5.66825 9.2171 5.62986 8.99921 5.58204 8.78132L12.2409 4.90087C12.7488 5.37114 13.4205 5.66503 14.1651 5.66503C15.735 5.66503 17 4.40237 17 2.8325C17 1.26577 15.7342 0 14.1651 0C12.5983 0 11.3326 1.26577 11.3326 2.83175C11.3326 3.06059 11.371 3.27536 11.4188 3.49325L4.75985 7.37682C4.25118 6.90423 3.58029 6.61108 2.8349 6.61108C1.26502 6.61108 0 7.8761 0 9.44283C0 11.0096 1.26502 12.2754 2.8349 12.2754C3.57947 12.2754 4.25118 11.9814 4.75906 11.5112L11.4822 15.4371C11.436 15.637 11.407 15.8454 11.407 16.0532C11.407 17.5737 12.6461 18.8105 14.1643 18.8105C15.684 18.8105 16.9239 17.5745 16.9239 16.0532C16.9239 14.5319 15.6848 13.2966 14.1651 13.2966Z"
                                        fill="#9B9B9B"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
});

export default Player;