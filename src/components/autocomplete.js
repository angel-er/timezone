import React from "react";

const Autocomplete = ({
    wrapperRef, 
    setSearch, 
    setDisplay, 
    saveOption, 
    search, 
    display,
    disactiveBtn,
    countries, 
    setCountry,
    cards
}) => {
    
    return (
        <div ref={wrapperRef} className="container-autocomplete">
            <div  className="container-autocomplete--input">
                    <input 
                        placeholder="Choose a time zone of a contry" 
                        type="text" 
                        name="search" 
                        value={search} 
                        onChange={event => setSearch(event.target.value)}
                        onClick={() => setDisplay(true)}  
                    />
                    <button 
                        className={`button-${!search || !disactiveBtn ? "disabled" : "active"}`}
                        onClick={saveOption} 
                        disabled={!search}
                    >Save</button>
            </div>

            <div className={`container-autocomplete--select ${display ? "active" : ""}`}>
                {countries
                    .filter(country => country.toLowerCase().indexOf(search.toLowerCase()) > -1)
                    .map((country, i) => {
                            const selected = cards.some(elem => elem.timezone === country)
                            return <div 
                                key={i}
                                className={`option ${selected ? "option-disabled" : ""}`}
                                onClick={() => !selected ? setCountry(country) : null} 
                                >
                                <div>{country}</div>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Autocomplete;