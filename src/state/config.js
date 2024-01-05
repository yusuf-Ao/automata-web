import axios from "axios";
import { decode } from "html-entities";


let USERFROMLS = localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_DEV_API,
    headers: {
        'Content-Type': 'application/json',
    },
})


instance.interceptors.request.use(
    (req) => {
        USERFROMLS = localStorage.getItem('accessToken') ? 
        JSON.parse(localStorage.getItem('accessToken')) :
        null
        if (USERFROMLS) {
            req.headers['Authorization'] = `Bearer ${USERFROMLS.accessToken}`
        }
        return req
    },
    (err) => {
        return Promise.reject(err);
    }

)

instance.interceptors.response.use(
    (res) => {
        const test = decode(JSON.stringify(res))
        return JSON.parse(test)
    },
    async (err) => {
        if (err.response) {
            if (err.response.status === 401) {
                alert('Session Expires')
                return Promise.reject(err);
            }
        }

        return Promise.reject(err)
    }
)

export const API = instance