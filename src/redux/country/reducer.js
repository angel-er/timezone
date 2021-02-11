import {GET_COUNTRIES, FAILURE} from "./constants";

const initState = {
    countries: []
};

export default function reducerCountry(state = initState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.countries 
            }
        case FAILURE:
            return {
                ...state,
                error: action.msgError
            }
        default:
            return initState;
    }
}