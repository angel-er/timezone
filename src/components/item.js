import React from "react";

const Item = ({country, setCountry}) => {
    return (
        <div 
            className="option" 
            onClick={() => setCountry(country)} 
            >
            <div>{country}</div>
        </div>
            
    )
}

export default Item;