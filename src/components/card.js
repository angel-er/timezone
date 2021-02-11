import React from "react";


const Card = ({timezone, deleteTimezone}) => {

    return (
        <div className="container-list--cards">
            <div className="card-item">
                <div className="card-item--delete" onClick={() => deleteTimezone(timezone)}>
                    <div>x</div>
                </div>
                <div className="card-item--information">
                    <div className="card-item--timezone">{timezone}</div>
                    <div className="card-item--date">{1}</div>
                    <div className="card-item--time">{3}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;