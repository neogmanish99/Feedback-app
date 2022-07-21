/** @jsxImportSource theme-ui */

import React from "react";
import PropTypes from "prop-types";

//Creating a card component
const Card = ({ children, reverse }) => {
    //Conditional styling
    return (
        <div
            className="card"
            // style={{
            //     backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
            //     color: reverse ? "#fff" : "#000",
            // }}
            sx={{ backgroundColor: "primary", color: "secondary" }}
        >
            {children}
        </div>
    );
};

Card.defaultProps = {
    reverse: false,
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};

export default Card;
