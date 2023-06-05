import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {deletedTrack, fetchOneMusic} from "../https/musicApi";
import {ADD_BEATS, MAIN_ROUTER, PROD_ROUTER, REACT_APP_API_URL} from "../utils/const";
import Comments from "../component/Comments";
import Recommendations from "../component/Recommendations";
import {Context} from "../index";
import {fetchOneUser} from "../https/userApi";
import {observer} from "mobx-react-lite";
import addBeats from "./AddBeats";
import Player from "../component/player/Player";


const Music = observer(() => {
    const {music} = useContext(Context)
    const {user} = useContext(Context)
    const {playerMusic} = useContext(Context)
    const {id} = useParams()
    const history = useNavigate()
    const [musicOne, setMusic] = useState({})
    useEffect(() => {
        fetchOneMusic(id).then(data => setMusic(data))
        fetchOneMusic(id).then(data => playerMusic.setPlayerMusic(data))
    }, [])
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const [commentsText, setCommentsText] = useState('')
    const [comm, setComm] = useState([])
    const goCom = () => {
        setComm([...comm, commentsText])
        setCommentsText('')
    }
    const delTrack = () => {
        deletedTrack(musicOne.id).then(() => history(MAIN_ROUTER))
    }
    return (
        <div className='container'>
            <div className='flex mt-3'>
                <div className='block w-72'>
                    <div>
                        <p className='flex text-center justify-center text-[#9B9B9B] text-lg'>{musicOne.name}</p>
                        <img className='w-72 mt-2 rounded-lg' src={REACT_APP_API_URL + musicOne.img} alt=""/>
                        <Link to={PROD_ROUTER + '/' + musicOne.artistId}
                              className='flex items-center mt-4 bg-[#121212] text-[#9B9B9B] justify-center transition rounded-lg p-3 hover:bg-[#0f0f0f]'>
                            Перейти к артисту
                        </Link>
                        {user.user.id === musicOne.artistId
                            ?
                            <button
                                className='flex w-full items-center mt-4 bg-[#121212] text-[#9B9B9B] justify-center transition rounded-lg p-3 hover:bg-[#0f0f0f] text-red-500'
                                onClick={delTrack}>Удалить трек</button>

                            :
                            <div>

                            </div>
                        }
                    </div>
                    <div className='mt-5 border border-[#1B1B1B] p-5 leading-8'>
                        <p className='text-[#404040]'>BPM: <span>{musicOne.BPM}</span></p>
                        <p className='text-[#404040]'>Публикация: <span>{date + '.' + month + '.' + year}</span></p>
                        <p className='text-[#404040]'>Прослушиваний: <span>{musicOne.listens}</span></p>
                    </div>
                </div>
                <div className='block w-full ml-5'>
                    <div className='grid grid-cols-4 mt-5 gap-4'>
                        <div>
                            <button
                                className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5 transition hover:bg-[#1B1B1B]'>
                                <p className='text-[#4E4E4E]'>Mp3</p>
                                <span
                                    className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.priceMp3}RUB</span>
                            </button>
                            <button
                                className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5 mt-2 transition hover:bg-[#1B1B1B]'>
                                <p className='text-[#4E4E4E]'>WAV</p>
                                <span
                                    className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.priceWav}RUB</span>
                            </button>
                        </div>
                        <div>
                            <button
                                className='justify-between w-full h-full bg-[#121212] rounded-lg items-center px-4 py-3.5 transition hover:bg-[#1B1B1B]'>
                                <p className='text-[#4E4E4E]'>Коммерческий лизинг</p>
                                <span
                                    className='flex justify-center bg-[#181818] text-[#7B7B7B] rounded-lg p-2 mt-5'>{musicOne.priceLeasing}RUB</span>
                            </button>
                        </div>
                        <div>
                            <button
                                className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5 transition hover:bg-[#1B1B1B]'>
                                <p className='text-[#4E4E4E]'>Трекаут</p>
                                <span
                                    className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.priceOut}RUB</span>
                            </button>
                            <button
                                className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5 mt-2 transition hover:bg-[#1B1B1B]'>
                                <p className='text-[#4E4E4E]'>Премиум</p>
                                <span
                                    className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.pricePremium}RUB</span>
                            </button>
                        </div>
                        <div>
                            <button
                                className='justify-between w-full h-full bg-[#121212] rounded-lg items-center px-4 py-3.5 transition hover:bg-[#1B1B1B]'>
                                <p className='text-[#4E4E4E]'>Перейти к покупке</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#1B1B1B] w-full h-0.5 mt-5'></div>
                        <p className='text-[#4B4B4B] mt-2'>Перед нажатием на “перейти к покупке” прочитайте <Link
                            className='text-[#A4A4A4]' to={MAIN_ROUTER}>инструкцию</Link> о том, как происходит покупка
                            на нашем сайте</p>
                    </div>
                    <div className='flex items-center mt-8'>
                        <span className='text-xl'>Коментарии</span>
                        <div className='bg-[#1B1B1B] w-full h-0.5 ml-5'></div>
                    </div>
                    <div className='mt-5'>
                        <textarea className='flex outline-0 rounded-lg bg-[#0F0F0F] w-full h-20 px-5 py-3'
                                  placeholder='Введите текст..'
                                  value={commentsText}
                                  onChange={e => setCommentsText(e.target.value)}
                        />
                        <button className='bg-[#1B1B1B] rounded-lg py-2 px-10 mt-3' onClick={goCom}>Отправить</button>
                    </div>
                    <div>
                        {comm.map(text =>
                            <Comments text={text}/>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-16 pb-20'>
                <div className='flex items-center mt-8 mb-3'>
                    <span className='text-xl'>Рекомендации</span>
                    <div className='bg-[#1B1B1B] w-full h-0.5 ml-5'></div>
                </div>
                <Recommendations numOne={0} NumTwo={10} music={music} text=''/>
            </div>
        </div>
    );
});

export default Music;