import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c9910dedbe17471582ab814066b1df28'
    }
})