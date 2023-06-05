import axios from "axios";
import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (user) => {
    const {data} = await $host.post('api/user/register', user)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchAllUser = async () => {
    const {data} = await $host.get('api/user')
    return data
}

export const fetchOneUser = async (id) => {
    const {data} = await $host.get('api/user/' + id)
    return data
}
