import React from "react";

const Col = ({children, xs, sm, md, lg}) => {

    return (
        <div className={`col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg}`}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 6
}

export default Col;