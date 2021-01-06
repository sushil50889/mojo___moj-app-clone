import { combineReducers } from "redux";
import { MOJO_VIDEO_POST } from "../../static-data/dummyData";
import {setLoggedInStatus, setUserData, setPushToken, setDestinationLocation, setOriginLocation, setPostsList} from '../actions/types';

const initialState = {
    userData: {},
    loggedInStatus: false,
    pushtoken: null,
    destLocation: null,
    originLocation: null,
    postsList: MOJO_VIDEO_POST,
}


const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserData:
            return {...state, userData: action.payload}
        case setLoggedInStatus:
            return {...state, loggedInStatus: action.payload}
        case setPushToken:
            return {...state, pushtoken: action.payload}
        case setDestinationLocation:
            return {...state, destLocation: action.payload}
        case setOriginLocation:
            return {...state, originLocation: action.payload}
        case setPostsList:
            return {...state, postsList: action.payload}
        default:
            return state
    }
}


const allReducers = combineReducers({
    indexReducer
});

export default allReducers;