import axios from 'axios';
/**
 * Now we need to create an axios instance with custom configuration. in that configuration we are going to include the api key
 * key is api key which i got from rawg website. This key will be included in query string of every http request which we send to backend
 * 
 * rawg have bunch of different endpoints like games, platform, publishers, stores
 * In this lesson we are going to send request to the games endpoint. https://api.rawg.io/api/games
 */

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c9910dedbe17471582ab814066b1df28'
    }
})