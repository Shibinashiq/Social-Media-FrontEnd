import axios from "axios";
import dayjs from 'dayjs'
import { jwtDecode } from 'jwt-decode';


const BASE_URL = "http://127.0.0.1:8000";


const useAxios = () => {
    const authState = JSON.parse(localStorage.getItem('authState'));

    const { token, refresh } = authState;

    // console.log("Access token:", token);

    // console.log("Refresh token:", refresh);

    const access_token = token
    //    console.log("hloo",access_token);
    // const access_token = localStorage.getItem("token")
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


        // console.log("axios access token is :-", access_token);
        const user = jwtDecode(access_token)

        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req

        const response = await axios.post(`${BASE_URL}/api/token/refersh/`, {
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
