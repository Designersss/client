import axios from "axios";
import {$authHost, $host} from "./index";

export const createMusic = async (music) => {
    const {data} = await $authHost.post('api/track', music)
    return data
}

export const fetchMusic = async () => {
    const {data} = await $host.get('api/track')
    return data
}

export const fetchOneMusic = async (id) => {
    const {data} = await $host.get('api/track/' + id)
    return data
}

export const fetchOneMusicGenre = async (genre) => {
    const {data} = await $host.get('api/track/genre/' + genre)
    return data
}

export const fetchOneMusicId = async (artistId) => {
    const {data} = await $host.get('api/track/prod/' + artistId)
    return data
}

export const deletedTrack = async (id) => {
    const {data} = await $host.get('api/track/deleted/' + id)
    return data
}