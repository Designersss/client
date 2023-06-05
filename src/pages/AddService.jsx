import React, {useContext, useState} from 'react';
import {createServices} from "../https/servicesApi";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTER} from "../utils/const";
import {Context} from "../index";

const AddService = () => {
    const {user} = useContext(Context)
    const [img, setImg] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [id, setId] = useState(user.user.id)
    const history = useNavigate()
    console.log(id)
    const addServices = e => {
        try {
            if (img == null) {
                alert('Загрузите фото')
            } else if (name === '') {
                alert('Заполните поле "Название"')
            } else {
                const services = new FormData()
                services.append('name', name)
                services.append('artistId', id)
                services.append('price', price)
                services.append('img', img)
                createServices(services).then(() => history(MAIN_ROUTER))
            }
        } catch (e) {
            console.log(e)
        }
    }
     return (
        <div className='container'>
            <div className='p-3 w-72 m-auto mt-10 bg-[#131313] rounded-lg'>
                <h2 className='flex justify-center text-[18px]'>Услуга</h2>
                <div className="bg-[#0A0A0A] flex justify-center items-center py-20 rounded-lg mt-4">
                    <label htmlFor="photo"
                           className="flex justify-center py-2 rounded-lg cursor-pointer bg-[#0057BA] w-36">
                        <p>Загрузить</p>
                        <input name="file" id="photo" multiple type="file" className="hidden" onChange={e => setImg(e.target.files[0])}/>
                    </label>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='block text-[#575757]'>Название услуги</label>
                    <input type="text"
                           className='bg-[#1B1B1B] rounded-lg text-[#fff] outline-0 px-4 py-2 mt-2 w-full'
                           value={name}
                           onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='block text-[#575757]'>Цена</label>
                    <input type="text"
                           className='bg-[#1B1B1B] rounded-lg text-[#fff] outline-0 px-4 py-2 mt-2 w-full'
                           value={price}
                           onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <button className='w-full py-1 rounded-lg cursor-pointer bg-[#0057BA] mt-6' onClick={addServices}>Добавить</button>
            </div>
        </div>
    );
};

export default AddService;