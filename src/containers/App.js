import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {getCountries} from "../redux/country/actions";

import ListCountries from "./ListCountries/ListCountries";
import Autocomplete from "./Autocomplete/Autocomplete";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function countries () {
            await dispatch(getCountries());
        }
        countries()
    }, []);

    return (
        <div className="container">
            <div className="container-ball">
                <div className="ball-1"></div>
                <div className="ball-2"></div>
                <div className="ball-3"></div>
                <div className="ball-4"></div>
                <div className="ball-5"></div>
            </div>
            <Autocomplete />
            <ListCountries/>
        </div>
    );
}

export default App;