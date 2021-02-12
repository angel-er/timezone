import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

import {addCountry} from "../../redux/country/actions";

import AutocompleteComponent from "../../components/autocomplete";

const Autocomplete = () => {
    const state = useSelector(state => state.Country);
    const dispatch = useDispatch();

    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState("");
    const [countries, setCountries] = useState([]);

    const wrapperRef = useRef();
    
    useEffect(() => {
        setCountries(state.countries)
    }, [state.countries]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const setCountry = item => {
        setSearch(item);
        setDisplay(false)
    }

    const handleClickOutside = event => {
        const {current: wrap} = wrapperRef;
        if(wrap && !wrap.contains(event.target)) {
            setDisplay(false)
        }
    }

    const saveOption = () => {
        dispatch(addCountry(search))
    }
    
    return (
        <AutocompleteComponent
            wrapperRef={wrapperRef}
            setSearch={setSearch}
            setDisplay={setDisplay}
            saveOption={saveOption}
            search={search}
            display={display}
            countries={countries}
            setCountry={setCountry}
            cards={state.cards}
        />
    );
}

export default Autocomplete;