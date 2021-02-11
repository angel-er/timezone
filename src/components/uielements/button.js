import React from "react";

const Button = ({onClick, disabled}) => {
    return (
        <button className="save-option" onClick={onClick} disabled={disabled}>Save</button>
    );
}

export default Button;