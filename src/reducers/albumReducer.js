import * as actionTypes from "../actions/actionTypes";

const initialState = {
    albums: []
}

const getAlbums = (state, action) => {
    return {
        ...state,
        albums: action.albums
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALBUMS:
            return getAlbums(state, action);
    
        default:
            return state;
    }
}

export default reducer;