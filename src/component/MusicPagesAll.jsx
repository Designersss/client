import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MUSIC_ROUTER, REACT_APP_API_URL} from "../utils/const";
import {fetchMusic} from "../https/musicApi";
import {observer} from "mobx-react-lite";
import MusicOne from "./MusicOne";

const MusicPagesAll = observer(({text, music}) => {
    useEffect(() => {
        fetchMusic().then(data => music.setMusic(data))
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <h2>{text}</h2>
            <div className='grid grid-cols-5 gap-5'>
                {music.music.map(music =>
                    <div key={music.id}>
                        <MusicOne music={music} />
                    </div>
                )}
            </div>
        </div>
    );
});

export default MusicPagesAll;