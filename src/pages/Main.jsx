import React, {useContext, useEffect} from 'react';
import Recommendations from "../component/Recommendations";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import MusicPagesAll from "../component/MusicPagesAll";
import {Link} from "react-router-dom";
import {
    ALL_MUSIC_ROUTER,
    GENRES_ROUTER,
    MAIN_ROUTER,
    MUSIC_ROUTER,
    PROD_ROUTER,
    REACT_APP_API_URL, SERVICES_ROUTER
} from "../utils/const";
import MusicOne from "../component/MusicOne";
import {fetchAllUser} from "../https/userApi";
import {fetchServicesAll} from "../https/servicesApi";
import sad from '../img/main/sad music 1.png'
import hyperpop from '../img/main/hyperpop 4.png'
import trap from '../img/main/trap 4.png'
import img from "../img/12.jpg";

const Main = observer (() => {
    const {music} = useContext(Context)
    const {user} = useContext(Context)
    const {services} = useContext(Context)
    useEffect(() => {
        fetchAllUser().then(users => user.setUsersAll(users))
        fetchServicesAll().then(service => services.setServicesAll(service))
    }, [])
    return (
        <div className='container'>
            <div className='block mt-5'>
                <h2 className='flex justify-center text-lg text-[#9B9B9B] uppercase'>
                    Популярное от
                    <Link to={MAIN_ROUTER} className='font-["Bebas Neue"]'>AUDIO<span className='text-[#0077FF]'>SBM</span></Link>
                </h2>
                <div className='flex w-[880px] m-auto mt-10'>
                    {music.music.slice(0, 3).map(music =>
                        <div key={music.id}>
                            <Link to={MUSIC_ROUTER + '/' + music.id} key={music.id} className='block ml-16'>
                                <img className='rounded-lg h-52 w-52' src={REACT_APP_API_URL +  music.img} alt=""/>
                                <div className='flex justify-center mt-2'>
                                    <p className='text-[#fff] uppercase'>{music.name}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex items-center mt-8 mb-3 items-center'>
                    <Link to={ALL_MUSIC_ROUTER} className='text-xl transition-[.3s] hover:text-[22px]'>Треки</Link>
                    <svg className='ml-3 ' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.5 7L12 1" stroke="#33333A"/>
                    </svg>
                </div>
                <Recommendations numOne={0} NumTwo={10} music={music} text='' />
            </div>
            <div className='mt-20'>
                <div className='flex items-center mt-8 mb-3 items-center'>
                    <Link to={SERVICES_ROUTER} className='text-xl transition-[.3s] hover:text-[22px]'>Услуги</Link>
                    <svg className='ml-3 ' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.5 7L12 1" stroke="#33333A"/>
                    </svg>
                </div>
                <div className='grid grid-cols-5 gap-5'>
                    {services.servicesAll.slice(0, 5).map(service =>
                        <Link to={PROD_ROUTER + '/' + service.artistId} key={service.id} className='relative py-1 px-1 uppercase rounded-xl text-center group'>
                            <div key={service.id} className='relative py-1 px-1 uppercase rounded-xl text-center group'>
                                <img className='flex w-24 h-24 m-auto mt-2 rounded-full z-20 object-cover' src={REACT_APP_API_URL + service.img} alt=""/>
                                <p className='font-semibold text-[12px] mt-4 z-10'>{service.name}</p>
                                <span className='text-[12px] mt-2'>{service.price} RUB</span>
                                <div className='absolute bg-gradient-to-r from-indigo-500 w-full h-full top-0 rounded-xl -z-10 opacity-30'></div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex items-center mt-8 mb-3 items-center'>
                    <Link to={PROD_ROUTER}  className='text-xl transition-[.3s] hover:text-[22px]'>Продюсеры</Link>
                    <svg className='ml-3' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.5 7L12 1" stroke="#33333A"/>
                    </svg>
                </div>
                <div className='grid grid-cols-6 gap-5'>
                    {user.usersAll.slice(0, 6).map(user =>
                        <Link to={PROD_ROUTER + '/' + user.id} key={user.id}
                              className='w-full py-4 justify-center transition bg-[#121212] rounded-lg'>
                            <img className='flex w-20 h-20 rounded-full m-auto' src={REACT_APP_API_URL + user.img} alt=""/>
                            <div className='flex uppercase justify-center mt-6 text-center'>{user.name || 'NoName'}</div>
                        </Link>
                    )}
                </div>
            </div>
            <div>
                <div className='flex items-center mb-3 items-center mt-20'>
                    <Link to={ALL_MUSIC_ROUTER} className='text-xl transition-[.3s] hover:text-[22px]'>Жанры</Link>
                    <svg className='ml-3 ' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.5 7L12 1" stroke="#33333A"/>
                    </svg>
                </div>
                <div className='grid grid-cols-3 gap-10'>
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
                </div>
            </div>
            <div className='bg-[#0F0F0F] p-5 py-10 rounded-2xl mt-20'>
                <span className='text-[16px]'>Продавай, покупай, действуй!</span>
                <div className='grid grid-cols-5 gap-4 mt-5'>
                    <Link className='flex bg-[#1B1B1B] py-2 justify-center rounded-xl col-span-2 transition hover:bg-[#2B2B2B]' to={MAIN_ROUTER}>Как покупать?</Link>
                    <Link className='flex bg-[#1B1B1B] py-2 justify-center rounded-xl col-span-2 transition hover:bg-[#2B2B2B]' to={MAIN_ROUTER}>Все о договоре</Link>
                    <Link className='flex bg-[#1B1B1B] py-2 justify-center rounded-xl col-span-1 transition hover:bg-[#2B2B2B]' to={MAIN_ROUTER}>Помощь</Link>
                    <Link className='flex bg-[#1B1B1B] py-2 justify-center rounded-xl col-span-3 transition hover:bg-[#2B2B2B]' to={MAIN_ROUTER}>Как продавать? </Link>
                    <Link className='flex bg-[#1B1B1B] py-2 justify-center rounded-xl col-span-2 transition hover:bg-[#2B2B2B]' to={MAIN_ROUTER}>О нас</Link>
                </div>
            </div>
            <div className='my-20'>
                <div className='bg-[#1B1B1B] w-full h-0.5'></div>
                <div className='flex my-10 grid grid-cols-4'>
                    <div>
                        <p className='block text-[22px]'>Навигация</p>
                        <Link className='block text-[#A4A4A4] mt-2' to={MAIN_ROUTER}>Начальная</Link>
                        <Link className='block text-[#A4A4A4]' to={MAIN_ROUTER}>Продюсеры</Link>
                        <Link className='block text-[#A4A4A4]' to={MAIN_ROUTER}>Треки</Link>
                        <Link className='block text-[#A4A4A4]' to={MAIN_ROUTER}>Альбомы</Link>
                        <Link className='block text-[#A4A4A4]' to={MAIN_ROUTER}>О нас</Link>
                        <Link className='block text-[#A4A4A4]' to={MAIN_ROUTER}>Про договор</Link>
                    </div>
                    <div>
                        <p className='block text-[22px]'>Контакты</p>
                        <Link className='block text-[#A4A4A4] mt-2' to={MAIN_ROUTER}>Начальная</Link>
                        <Link className='block text-[#A4A4A4]' to={MAIN_ROUTER}>Продюсеры</Link>
                    </div>
                    <div>
                        <p className='block text-[22px]'>Подпишись на нас</p>
                        <div className='flex mt-2'>
                            <Link to={MAIN_ROUTER}>
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.25" x="0.5" y="0.5" width="36.9518" height="38" rx="18.4759" stroke="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0791 27V19.4994H15.57V16.9146H17.0791V15.3626C17.0791 13.2539 17.9312 12 20.3521 12H22.3676V14.5851H21.1078C20.1654 14.5851 20.103 14.9464 20.103 15.6205L20.0996 16.9143H22.3819L22.1148 19.4991H20.0996V27H17.0791Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link className='ml-3' to={MAIN_ROUTER}>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.25" x="1.07556" y="0.5" width="36.9518" height="38" rx="18.4759" stroke="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1456 26H13.2262V17H16.1456V26Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6772 15H14.6606C13.7894 15 13.2262 14.333 13.2262 13.4995C13.2262 12.6483 13.8066 12 14.6943 12C15.582 12 16.1287 12.6483 16.1456 13.4995C16.1456 14.333 15.582 15 14.6772 15Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.8498 25.9998H23.9811V21.2954C23.9811 20.1137 23.566 19.3074 22.5274 19.3074C21.7349 19.3074 21.2628 19.851 21.0554 20.376C20.9796 20.5641 20.961 20.8263 20.961 21.0891V26H18.0918C18.0918 26 18.1296 18.0318 18.0918 17.2067H20.961V18.4522C21.3417 17.8535 22.0237 17 23.5468 17C25.4346 17 26.8499 18.2571 26.8499 20.958L26.8498 25.9998Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link className='ml-3' to={MAIN_ROUTER}>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.25" x="0.651123" y="0.5" width="36.9518" height="38" rx="18.4759" stroke="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.9443 16.9262L18.9718 17.402L18.5147 17.3437C16.8511 17.1204 15.3977 16.363 14.1637 15.091L13.5604 14.4599L13.405 14.926C13.076 15.9649 13.2862 17.0621 13.9718 17.8001C14.3374 18.2079 14.2551 18.2661 13.6244 18.0234C13.405 17.9457 13.2131 17.8874 13.1948 17.9166C13.1308 17.9845 13.3502 18.8681 13.5239 19.2177C13.7615 19.7032 14.246 20.179 14.7762 20.4605L15.2241 20.6839L14.6939 20.6936C14.182 20.6936 14.1637 20.7033 14.2186 20.9072C14.4014 21.5383 15.1235 22.2083 15.9279 22.4996L16.4946 22.7035L16.001 23.0142C15.2698 23.4609 14.4105 23.7133 13.5513 23.7328C13.14 23.7425 12.8018 23.7813 12.8018 23.8104C12.8018 23.9075 13.9169 24.4513 14.5659 24.6649C16.5129 25.296 18.8255 25.0242 20.5623 23.9464C21.7963 23.1793 23.0303 21.6549 23.6061 20.179C23.9169 19.3925 24.2277 17.9554 24.2277 17.266C24.2277 16.8194 24.2551 16.7611 24.767 16.2271C25.0687 15.9164 25.352 15.5765 25.4069 15.4794C25.4983 15.2949 25.4891 15.2949 25.023 15.46C24.246 15.7513 24.1363 15.7124 24.5202 15.2755C24.8036 14.9648 25.1418 14.4016 25.1418 14.2366C25.1418 14.2074 25.0047 14.256 24.8493 14.3434C24.6847 14.4405 24.3191 14.5861 24.0449 14.6735L23.5513 14.8386L23.1034 14.5181C22.8566 14.3434 22.5092 14.1492 22.3264 14.0909C21.8603 13.955 21.1473 13.9744 20.7268 14.1297C19.5842 14.5667 18.8621 15.693 18.9443 16.9262Z" fill="white"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link to={MAIN_ROUTER} className='flex justify-center mt-14 font-["Bebas Neue"] text-[28px]'>AUDIO<span className='text-[#0077FF]'>SBM</span></Link>
                    </div>
                </div>
                <div className='bg-[#1B1B1B] w-full h-0.5'></div>
            </div>
        </div>
    );
});

export default Main;