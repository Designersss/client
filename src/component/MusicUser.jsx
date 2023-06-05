import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneMusicGenre, fetchOneMusicId} from "../https/musicApi";
import {observer} from "mobx-react-lite";
import MusicOne from "./MusicOne";

const MusicUser = observer (({music}) => {
    const {id} = useParams()
    const [musicUser, setMusicUser] = useState([])
    useEffect(() => {
        fetchOneMusicId(id).then(data => setMusicUser(data))
    }, [])
    return (
        <div className='grid grid-cols-5 gap-5'>
            {musicUser.map(music =>
                <div key={music.id}>
                    <MusicOne music={music} />
                </div>
            )}
        </div>
    );
});

export default MusicUser;