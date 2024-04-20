import axios from "axios";
import dayjs from 'dayjs'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";


const BASE_URL = "http://127.0.0.1:8000";


const useAxios = () => {
    const authState = JSON.parse(localStorage.getItem('authState'));
    const navigate = useNavigate();
    if (!authState || !authState.token || !authState.refresh) {
        navigate('/Login');
    }

    const { token, refresh } = authState;



    const access_token = token
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: `Bearer ${access_token}` }
    });
axiosInstance.defaults.withCredentials=true


    axiosInstance.interceptors.request.use(async req => {

        const authState = JSON.parse(localStorage.getItem('authState'));

        const { token, refresh } = authState;

      

        const access_token = token
        const refresh_token =refresh
        
        if (!access_token) {
            access_token = localStorage.getItem('token') ? localStorage.getItem('token') : null
            req.headers.Authorization = `Bearer ${access_token}`
        }


        const user = jwtDecode(access_token)

        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req

        const response = await axios.post(`http://127.0.0.1:8000/Auth/api/token/refresh/`, {
            refresh: refresh_token
        });



        localStorage.setItem("access_token", response.data.access);
        
        localStorage.setItem("refresh_token", response.data.refresh);
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req


    })
    return axiosInstance


}


export default useAxios
