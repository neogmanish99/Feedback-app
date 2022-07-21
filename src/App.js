import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
    //Global state variable
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <Feedbackstats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </>
                        }
                    ></Route>
                    <Route path="/about" element={<AboutPage />} />
                    {/* * is used for nested routes */}
                    <Route path="/post/*" element={<Post />} />
                </Routes>
            </div>
            <AboutIconLink />
        </Router>
    );
}

export default App;
