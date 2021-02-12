import axios from "axios";

import {GET_COUNTRIES, FAILURE, DELETE_COUNTRY, ADD_COUNTRY} from "./constants";
import config from "../../config/config";

const {API_URL, ERROR_MESSAGE } = config;

const success = (countries) => ({
    type: GET_COUNTRIES,
    countries
});

const failure = (msgError) => ({
    type: FAILURE,
    msgError
});

const postCountry = country => ({
    type: ADD_COUNTRY,
    country
});

const updateList = country => ({
    type: DELETE_COUNTRY,
    country
});

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

export const addCountry = (name) => dispatch => {
    return axios.get(`${API_URL}/api/timezone/${name}`)
            .then(response => {
                if(response.status === 200){
                    dispatch(postCountry(response.data))
                }
            })
            .catch(request => {
                console.log(request.response)
                dispatch(failure(request.response ? request.response.data.details[0].message : ERROR_MESSAGE))
            })
}

export const deleteCountry = name => dispatch => {
    // return axios.delete(`${API_URL}/api/timezone/${name}`)
    //         .then(response => {
    //             if(response.status === 200){
    //                 console.log("Response one timezone: ", response.data)
    //                 dispatch(postCountry(response.data))
    //             }
    //         })
    //         .catch(request => {
    //             console.log(request.response)
    //             dispatch(failure(request.response ? request.response.data.details[0].message : ERROR_MESSAGE))
    //         })
    return dispatch(updateList(name))
}


