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
            <Autocomplete />
            <ListCountries/>
        </div>
    );
}

export default App;