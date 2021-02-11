import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {deleteCountry} from "../../redux/country/actions";

import Row from "../../components/row";
import Col from "../../components/col";
import Card from "../../components/card";

const Cards = props => {
    const state = useSelector(state => state.Country)
    const disaptch = useDispatch();

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(state.cards)
    }, [state.cards])

    const deleteTimezone = (timezone) => {
        disaptch(deleteCountry(timezone))
    }

    return (
        <div className="container-list--cards">
            <Row>
                {cards.map((card, i) => 
                    <Col lg={3} key={i}>
                        <Card
                            timezone={card.timezone}
                            card={card}
                            deleteTimezone={deleteTimezone}
                        />
                    </Col> 
                )}
            </Row>
        </div>
    );
}

export default Cards;