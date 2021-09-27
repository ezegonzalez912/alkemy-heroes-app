import axios from 'axios';

export const heroesByName = (name) => {

    const accessToken = process.env.REACT_APP_ACCESS_TOKEN

    const api_URL = `https://superheroapi.com/api.php/${accessToken}`;

    return Promise.resolve(axios.get(`${api_URL}/search/${name}`))
}