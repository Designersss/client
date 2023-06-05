import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {fetchMusic} from "../https/musicApi";
import {observer} from "mobx-react-lite";
import MusicOne from "./MusicOne";

const Recommendations = observer (({music}) => {
    useEffect(() => {
        fetchMusic().then(data => music.setMusic(data))
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <div className='grid grid-cols-5 gap-5'>
                {music.music.slice(3, 13).map(music =>
                    <div key={music.id}>
                        <MusicOne music={music} />
                    </div>
                )}
            </div>
        </div>
    );
});

export default Recommendations;