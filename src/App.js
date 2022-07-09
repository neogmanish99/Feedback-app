import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from "./components/Feedbackstats";

function App() {
    //Global state variable
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <Feedbackstats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;
