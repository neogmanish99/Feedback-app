/** @jsxImportSource theme-ui */

import React from "react";
import PropTypes from "prop-types";
import { useColorMode } from "theme-ui";

//Using CSS in JS
const Header = ({ text, bgColor, textColor }) => {
    const [colorMode, setColorMode] = useColorMode();
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <header style={headerStyles}>
            <div className="container">
                <div className="head-container">
                    <h2>{text}</h2>

                    {/* DARK MODE */}
                    <button
                        onClick={() =>
                            setColorMode(
                                colorMode === "light" ? "dark" : "light"
                            )
                        }
                        style={{
                            border: "0",
                            borderRadius: "8px",
                            width: "100px",
                            height: "40px",
                        }}
                        sx={{ backgroundColor: "primary", color: "secondary" }}
                    >
                        DARK
                    </button>
                </div>
            </div>
        </header>
    );
};

//1.We can set default props to our components
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

//2.We can set default prop types to our props as typechecking
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Header;
