import React, {useContext, useEffect, useState} from 'react';
import '../../styles/navBarStyle.scss'
import {Link, useParams} from "react-router-dom";
import {MAIN_ROUTER, PROD_ROUTER} from "../../utils/const";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchOneUser} from "../../https/userApi";
import {fetchMusic} from "../../https/musicApi";
import User from "../../pages/User";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <div className='nav-bar'>
            <div className='container'>
                <div className='nav-bar-main'>
                    <div className='flex items-center bg-[#1B1B1B] px-3 rounded-lg'>
                        <input type="text" placeholder='Поиск' className='outline-0 bg-[#1B1B1B] h-5 m-0.5'/>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.6044 13.7289C15.1751 13.3177 14.7572 12.8946 14.3513 12.4603C14.0103 12.1138 13.805 11.8617 13.805 11.8617L11.2383 10.6361C12.2659 9.47067 12.833 7.97041 12.8333 6.41667C12.8333 2.87925 9.955 0 6.41667 0C2.87833 0 0 2.87925 0 6.41667C0 9.95408 2.87833 12.8333 6.41667 12.8333C8.03275 12.8333 9.50583 12.2283 10.6361 11.2393L11.8617 13.8059C11.8617 13.8059 12.1138 14.0113 12.4603 14.3523C12.815 14.685 13.2816 15.1351 13.7289 15.6053L14.9737 16.8813L15.5274 17.4735L17.4717 15.5293L16.8795 14.9756C16.5321 14.6346 16.0683 14.1818 15.6044 13.7289ZM6.41667 11C3.88942 11 1.83333 8.94392 1.83333 6.41667C1.83333 3.88942 3.88942 1.83333 6.41667 1.83333C8.94392 1.83333 11 3.88942 11 6.41667C11 8.94392 8.94392 11 6.41667 11Z"
                                fill="#A7A7A7"/>
                        </svg>
                    </div>
                    <Link to={MAIN_ROUTER} className='font-["Bebas Neue"]'>
                        AUDIO<span className='text-[#0077FF]'>SBM</span>
                    </Link>
                    <Link to={PROD_ROUTER + '/' + user.user.id}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_482_272)">
                                <path
                                    d="M20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0ZM20 6C23.4 6 26 8.6 26 12C26 15.4 23.4 18 20 18C16.6 18 14 15.4 14 12C14 8.6 16.6 6 20 6ZM20 34.4C15 34.4 10.6 31.8001 8 28C8 24 16 21.8 20 21.8C24 21.8 32 24 32 28C29.4 31.8 25 34.4 20 34.4Z"
                                    fill="#1B1B1B"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_482_272">
                                    <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

    );
});

export default NavBar;