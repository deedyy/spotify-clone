import { reducerCases } from "./Constants";

export const initialState = {
    token:null,
    playlists:[],
    userInfo:null,
    selectedPlayListId:'1voWj2pMS3ApzUroyIcHXM',
}

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:{
            return {
              ...state,  token:action.token,  
            }
        }

        case reducerCases.SET_PLAYLISTS:{
            return {
              ...state,  playlists:action.playlists,  
            }
        }
        case reducerCases.SET_USERINFO:{
            return {
              ...state,  userInfo:action.userInfo,  
            }
        }


        default: return state;
    }
}

export default reducer; 