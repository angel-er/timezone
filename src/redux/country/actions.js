import axios from "axios";

import {GET_COUNTRIES, FAILURE} from "./constants";
import config from "../../config/config";

const {API_URL, ERROR_MESSAGE} = config;

const success = (countries) => ({
    type: GET_COUNTRIES,
    countries
})

const failure = (msgError) => ({
    type: FAILURE,
    msgError
})

export const getCountries = () => dispatch => {
    return axios.get(`${API_URL}/api/timezone`)
            .then(response => {
                if(response.status === 200){
                    dispatch(success(response.data))
                } 
            })
            .catch(request => {
                dispatch(failure(request.response ? request.response.data.details[0].message : ERROR_MESSAGE))
            });
}




