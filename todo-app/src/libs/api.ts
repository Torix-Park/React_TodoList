import axios from 'axios'
import fs from 'fs'

axios.interceptors.request.use((req) => {
    console.log('[Axios Request]', req);
    return req
})

axios.interceptors.response.use((res) => {
    console.log('[Axios Response]', res);
    return res
})

export const API_ORIGIN = process.env.NODE_ENV === 'development' ? '' : '';

export const apiRoute = {
    health: '/health'
}

export function requestGet<T>(url: string, header: object){
    return axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            ...header
        }
    }).then(res => ({
        data: res.data as T,
        config: {
            statusCode: res.status
        }
    }))
}

export function requestSecureGet<T>(url: string, header: object, token: string){
    return axios.get(url, {
        headers: {
            'Autorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...header
        }
    })
}