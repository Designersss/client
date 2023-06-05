import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {createMusic} from "../https/musicApi";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTER} from "../utils/const";

const AddBeats = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const [fileMp3, setFileMp3] = useState(null)
    const [fileImg, setFileImg] = useState(null)
    const [nameTrack, setNameTrack] = useState('')
    const [genre, setGenre] = useState('')
    const [tonal, setTonal] = useState('')
    const [bpm, setBpm] = useState()
    const [mp3, setMp3] = useState(0)
    const [wav, setWav] = useState(0)
    const [trackOut, setTrackOut] = useState(0)
    const [premium, setPremium] = useState(0)
    const [leasing, setLeasing] = useState(0)
    const [raa, setRaa] = useState(false)
    const fileUpImg = e => {
        setFileImg(e.target.files[0])
        if (fileImg == null) {
            return fileImg
        }
        console.log(fileImg)
    }

    const fileUpTrack = e => {
        setFileMp3(e.target.files[0])
        if (fileMp3 == null) {
            return fileMp3
        }
        console.log(fileMp3)
    }

    const addTrack = () => {
        try {
            if (fileMp3 == null) {
                alert('Загрузите трек')
            }
            else if (fileImg == null) {
                alert('Загрузите фото')
            } else if (nameTrack === '') {
                alert('Заполните поле "Название"')
            } else if (bpm === '') {
                alert('Заполните поле "BPM"')
            } else {
                const music = new FormData()
                music.append('name', nameTrack)
                music.append('artistId', user.user.id)
                music.append('img', fileImg)
                music.append('listens', 0)
                music.append('priceMp3', mp3)
                music.append('priceWav', wav)
                music.append('priceOut', trackOut)
                music.append('pricePremium', premium)
                music.append('priceLeasing', leasing)
                music.append('genre', genre)
                music.append('BPM', bpm)
                music.append('trackMp3', fileMp3)
                createMusic(music).then(() => history(MAIN_ROUTER))
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='container'>
            <div className='bg-[#0F0F0F] p-4 mt-5 rounded-lg'>
                <h2 className='text-[#848484] text-xl'>Загрузка минуса</h2>
                <div className='grid grid-cols-2 mt-5 gap-x-5'>
                    <div className=''>
                        <label htmlFor="" className='block text-[#575757]'>Загрузите композицию</label>
                        <label htmlFor="music"
                               className="flex justify-center py-2 rounded-lg cursor-pointer bg-[#0057BA] w-full mt-2">
                            <p>Загрузить</p>
                            <input name="file" id="music" multiple type="file" className="hidden" onChange={fileUpTrack}/>
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="" className='block text-[#575757]'>Загрузите обложку</label>
                        <label htmlFor="photo"
                               className="flex justify-center py-2 rounded-lg cursor-pointer bg-[#0057BA] w-full mt-2">
                            <p>Загрузить</p>
                            <input name="file" id="photo" multiple type="file" className="hidden" onChange={fileUpImg}/>
                        </label>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='block text-[#575757]'>Название композиции</label>
                        <input type="text"
                               value={nameTrack}
                               onChange={e => setNameTrack(e.target.value)}
                               className='bg-[#1B1B1B] rounded-lg text-[#fff] outline-0 px-4 py-2 mt-2 w-full'
                        />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='block text-[#575757]'>Жанр</label>
                        <select value={genre} onChange={e => setGenre(e.target.value)}
                                className='bg-[#1B1B1B] rounded-lg text-[#fff] outline-0 px-4 py-2.5 mt-2 w-full'>
                            <option className='text-white bg-[#1B1B1B]' value="Dabstep">Dabstep</option>
                            <option className='text-white bg-[#1B1B1B]' value="Trap">Trap</option>
                            <option className='text-white bg-[#1B1B1B]' value="Pop">Pop</option>
                            <option className='text-white bg-[#1B1B1B]' value="Hyperpop">Hyperpop</option>
                            <option className='text-white bg-[#1B1B1B]' value="House">House</option>
                            <option className='text-white bg-[#1B1B1B]' value="DaB">DaB</option>
                            <option className='text-white bg-[#1B1B1B]' value="Synthpop">Synthpop</option>
                            <option className='text-white bg-[#1B1B1B]' value="Ambient">Ambient</option>
                        </select>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='block text-[#575757]'>Тональность</label>
                        <input type="text"
                               value={tonal}
                               onChange={e => setTonal(e.target.value)}
                               className='bg-[#1B1B1B] rounded-lg text-[#fff] outline-0 px-4 py-2 mt-2 w-full'
                        />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='block text-[#575757]'>BPM</label>
                        <input type="text"
                               value={bpm}
                               onChange={e => setBpm(e.target.value)}
                               className='bg-[#1B1B1B] rounded-lg text-[#fff] outline-0 px-4 py-2 mt-2 w-full'
                        />
                    </div>
                </div>
            </div>
            <div className='bg-[#0F0F0F] p-4 mt-5 rounded-lg'>
                <h2 className='text-[#848484] text-xl'>Загрузка минуса</h2>
                <div className='grid grid-cols-4 gap-4 mt-5'>
                    <div className='p-2 bg-[#1B1B1B] rounded-lg rounded-tr-none'>
                        <p className='block text-[#4E4E4E]'>MP3</p>
                        <input type="text"
                               placeholder='Напишите сумму'
                               className='block bg-[#2C2C2C] rounded-lg py-1 px-2 outline-0 mt-2'
                               value={mp3}
                               onChange={e => setMp3(e.target.value)}
                        />
                        <span className='mt-3 block uppercase text-[#6D6D6D] font-[900] text-[12px]'>mp3</span>
                    </div>
                    <div className='p-2 bg-[#1B1B1B] rounded-lg rounded-tr-none'>
                        <p className='block text-[#4E4E4E]'>WAV</p>
                        <input type="text"
                               placeholder='Напишите сумму'
                               className='block bg-[#2C2C2C] rounded-lg py-1 px-2 outline-0 mt-2'
                               value={wav}
                               onChange={e => setWav(e.target.value)}
                        />
                        <span className='mt-3 block uppercase text-[#6D6D6D] font-[900] text-[12px]'>mp3, wav</span>
                    </div>
                    <div className='p-2 bg-[#1B1B1B] rounded-lg rounded-tr-none'>
                        <p className='block text-[#4E4E4E]'>Трекаут</p>
                        <input type="text"
                               placeholder='Напишите сумму'
                               className='block bg-[#2C2C2C] rounded-lg py-1 px-2 outline-0 mt-2'
                               value={trackOut}
                               onChange={e => setTrackOut(e.target.value)}
                        />
                        <span className='mt-3 block uppercase text-[#6D6D6D] font-[900] text-[12px]'>mp3, wav, Trackout</span>
                    </div>
                    <div className='p-2 bg-[#1B1B1B] rounded-lg rounded-tr-none'>
                        <p className='block text-[#4E4E4E]'>Премиум</p>
                        <input type="text"
                               placeholder='Напишите сумму'
                               className='block bg-[#2C2C2C] rounded-lg py-1 px-2 outline-0 mt-2'
                               value={premium}
                               onChange={e => setPremium(e.target.value)}
                        />
                        <span className='mt-3 block uppercase text-[#6D6D6D] font-[900] text-[12px]'>mp3, wav, Trackout</span>
                    </div>
                    <div className='p-2 bg-[#1B1B1B] rounded-lg rounded-tr-none col-span-4'>
                        <p className='block text-[#4E4E4E]'>Коммерческий лизинг</p>
                        <input type="text"
                               placeholder='Напишите сумму'
                               className='block bg-[#2C2C2C] rounded-lg py-1 px-2 outline-0 mt-2'
                               value={leasing}
                               onChange={e => setLeasing(e.target.value)}
                        />
                        <span className='mt-3 block uppercase text-[#6D6D6D] font-[900] text-[12px]'>mp3, wav, Trackout</span>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <button onClick={addTrack} className='w-full py-2 py-2 rounded-lg cursor-pointer bg-[#0057BA]'>Выложить</button>
            </div>
        </div>
    );
});

export default AddBeats;