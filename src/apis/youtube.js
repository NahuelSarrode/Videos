import axios from 'axios'; 
const KEY = 'AIzaSyCmkWSlIz7eA3rbqSINEFuZVw3vq-zaxKg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key: KEY
    }
});