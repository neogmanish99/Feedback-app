import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>This is about page</h1>
                <p>
                    This is react app to leave feedback for any kind of feedback
                </p>
                <Link to="/">Back to home</Link>
            </div>
        </Card>
    );
};

export default AboutPage;
