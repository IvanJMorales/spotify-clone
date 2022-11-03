export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBNag5ihWlXefwIxCz3cXJpt7iFls2b393FCqc0MJ_RYJMIt3…aUUpHEyzo17ONAL7bSXBB6JXAogkCto7kbDPM2rgFvphSzECg",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) { /*listener to change user in Data Layer*/
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state; 
    }
};

export default reducer;