import {$host} from "./index";


export const createServices = async (services) => {
    const {data} = await $host.post('api/services', services)
    return data
}

export const fetchServicesAll = async () => {
    const {data} = await $host.get('api/services')
    return data
}

export const fetchOneServices = async (artistId) => {
    const {data} = await $host.get('api/services/' + artistId)
    return data
}

export const deletedServices = async (id) => {
    const {data} = await $host.get('api/services/deleted/' + id)
    return data
}