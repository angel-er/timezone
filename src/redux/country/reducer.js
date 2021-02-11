import {GET_COUNTRIES, FAILURE, ADD_COUNTRY, DELETE_COUNTRY} from "./constants";

const initState = {
    countries: [],
    cards: [
        {
            abbreviation: "-03",
            client_ip: "181.167.203.139",
            datetime: "2021-02-10T17:17:32.025521-03:00",
            day_of_week: 3,
            day_of_year: 41,
            dst: false,
            dst_from: null,
            dst_offset: 0,
            dst_until: null,
            raw_offset: -10800,
            timezone: "America/Argentina/Ushuaia",
            unixtime: 1612988252,
            utc_datetime: "2021-02-10T20:17:32.025521+00:00",
            utc_offset: "-03:00",
            week_number: 6,
        },
        {
            abbreviation: "-03",
            client_ip: "181.167.203.139",
            datetime: "2021-02-10T17:17:32.025521-03:00",
            day_of_week: 3,
            day_of_year: 41,
            dst: false,
            dst_from: null,
            dst_offset: 0,
            dst_until: null,
            raw_offset: -10800,
            timezone: "America/Argentina/San_Luis",
            unixtime: 1612988252,
            utc_datetime: "2021-02-10T20:17:32.025521+00:00",
            utc_offset: "-03:00",
            week_number: 6,
        }
    ]
};

export default function reducerCountry(state = initState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.countries 
            }
        case ADD_COUNTRY:
            return {
                ...state,
                cards: state.cards.find(card => card.timezone === action.country.timezone) ? state.cards : state.cards.concat([action.country])
            }
        case DELETE_COUNTRY:
            return {
                ...state,
                cards: state.cards.filter(country => country.timezone !== action.country)
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