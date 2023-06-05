import React, {useContext, useEffect} from 'react';
import {fetchAllUser} from "../https/userApi";
import {fetchServicesAll} from "../https/servicesApi";
import {Context} from "../index";
import {PROD_ROUTER, REACT_APP_API_URL} from "../utils/const";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const Prod = observer(() => {
    const {user} = useContext(Context)
    useEffect(() => {
        fetchAllUser().then(users => user.setUsersAll(users))
    }, [])
    return (
        <div className='container'>
            <div className='flex items-center mt-8 mb-3'>
                <span className='text-xl'>Продюссеры</span>
                <div className='bg-[#1B1B1B] w-full h-0.5 ml-5'></div>
            </div>
            <div className='flex grid grid-cols-6 gap-x-6 gap-y-8 mt-10'>
                {user.usersAll.map(user =>
                    <Link to={PROD_ROUTER + '/' + user.id} key={user.id}
                          className='w-full py-4 justify-center transition bg-[#121212] rounded-lg'>
                        <img className='flex w-24 h-24 rounded-full m-auto' src={REACT_APP_API_URL + user.img} alt=""/>
                        <div className='flex uppercase justify-center mt-6 text-center'>{user.name || 'NoName'}</div>
                    </Link>
                )}
            </div>
        </div>
    );
});

export default Prod;