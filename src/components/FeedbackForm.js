import React, { useState } from "react";

import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    //A message notification for validations
    const [message, setMessage] = useState("");

    //State for select rating
    const [rating, setRating] = useState(10);

    const handleTextChange = (e) => {
        //FORM validations
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };
            handleAdd(newFeedback);
            setText("");
        }

        e.preventDefault();
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>

                {/* RatingSelect Component */}
                <RatingSelect
                    select={(ratings) => {
                        setRating(ratings);
                    }}
                />

                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
