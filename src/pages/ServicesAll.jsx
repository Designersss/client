import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {PROD_ROUTER, REACT_APP_API_URL} from "../utils/const";
import img from "../img/12.jpg";
import {Context} from "../index";
import {fetchAllUser} from "../https/userApi";
import {fetchServicesAll} from "../https/servicesApi";

const ServicesAll = () => {
    const {user} = useContext(Context)
    const {services} = useContext(Context)
    useEffect(() => {
        fetchAllUser().then(users => user.setUsersAll(users))
        fetchServicesAll().then(service => services.setServicesAll(service))
    }, [])
    return (
        <div className='container'>
            <div className='flex items-center mt-8 mb-3'>
                <span className='text-xl'>Услуги</span>
                <div className='bg-[#1B1B1B] w-full h-0.5 ml-5'></div>
            </div>
            <div className='grid grid-cols-5 gap-4'>
                {services.servicesAll.map(service =>
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
    );
};

export default ServicesAll;