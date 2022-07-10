import React from "react";
import PropTypes from "prop-types";

//version = primary or secondary
//Type = submit button or regular button
//isDisabled = true or false

const Button = ({ children, version, type, isDisabled }) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
