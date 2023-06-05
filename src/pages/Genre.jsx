import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneMusicGenre} from "../https/musicApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import MusicOne from "../component/MusicOne";

const Genre = observer(({music}) => {
    const {genre} = useParams()
    useEffect(() => {
        fetchOneMusicGenre(genre).then(data => music.setMusic(data))
    }, [])
    console.log(genre)
    return (
        <div className='grid grid-cols-5 gap-5'>
            {music.music.map(music =>
                <div key={music.id}>
                    <MusicOne music={music} />
                </div>
            )}
        </div>
    );
});

export default Genre;