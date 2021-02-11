import React from "react";

const Input = ({search, setSearch, setDisplay, placeholder}) => {
    return (
        <input 
            placeholder={placeholder} 
            type="text" 
            name="search" 
            value={search} 
            onChange={event => setSearch(event.target.value)}
            onClick={() => setDisplay(true)}  
        />
    );
}

export default Input;