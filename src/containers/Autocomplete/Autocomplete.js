import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

import {addCountry} from "../../redux/country/actions";

import Input from "../../components/uielements/input";
import Button from "../../components/uielements/button";
import Item from "../../components/item";

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
        <div ref={wrapperRef} className="select-box">
            <div  className="search-country">
                <Input
                    search={search}
                    setSearch={setSearch}
                    setDisplay={setDisplay}
                    placeholder="Choose a country timezone"
                    />
                    {search &&
                        <Button 
                        disabled={!search}
                        value="Save"
                        onClick={saveOption}
                        />
                    }
            </div>

            {display &&
                <div className={`options-container ${display ? "active" : ""}`}>
                    {countries
                        .filter(country => country.toLowerCase().indexOf(search.toLowerCase()) > -1)
                        .map((country, i) => 
                            <Item 
                                country={country}
                                key={i}
                                setCountry={setCountry}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
}

export default Autocomplete;