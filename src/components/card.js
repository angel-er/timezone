import React, {useEffect, useState} from "react";

import {transformtimezone} from "../services/timezone"

const Card = ({timezone, deleteTimezone}) => {
    const [date, setDate] = useState(transformtimezone(timezone).date);
    const [time, setTime] = useState(transformtimezone(timezone).time);

    useEffect(() => {
        setInterval(() => {
            const zone = transformtimezone(timezone);
            setDate(zone.date)
            setTime(zone.time)
        }, 1000)
        return () => {
            clearInterval();
        }
    }, [time]);

    return (
        <div className="container-list--cards">
            <div className="card-item">
                <div className="card-item--delete" onClick={() => deleteTimezone(timezone)}>
                    <div>x</div>
                </div>
                <div className="card-item--information">
                    <div className="card-item--timezone">{timezone}</div>
                    <div className="card-item--date">{date}</div>
                    <div className="card-item--time">{time}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;