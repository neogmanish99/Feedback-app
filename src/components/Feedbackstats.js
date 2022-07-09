import React from "react";
import PropTypes from "prop-types";

const Feedbackstats = ({ feedback }) => {
    //Calculate average ratings
    let average =
        feedback.reduce((acc, current) => {
            return acc + current.rating;
        }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, "");
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average} </h4>
        </div>
    );
};

Feedbackstats.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default Feedbackstats;
