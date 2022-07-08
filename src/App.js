import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

function App() {
    //Global state variable
    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    );
}

export default App;
