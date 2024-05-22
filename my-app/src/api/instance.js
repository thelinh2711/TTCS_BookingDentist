import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'https://www.nhakhoaquocteachau.vn/api'
})
export default instance