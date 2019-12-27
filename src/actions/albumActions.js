import axios from "axios";

import { GET_ALBUMS } from './actionTypes'

export const getAlbums = () => async dispatch => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/albums");
    dispatch({
        type: GET_ALBUMS,
        albums: res.data
    });
}
