import axios from 'axios';

const KEY = 'AIzaSyBh7nTZaLOf-dsME3aItL3kXV5-aJQkhqg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});