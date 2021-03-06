import React from "react";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

const Post = () => {
    const status = 200;

    const navigate = useNavigate();

    if (status === 404) {
        return <Navigate to="/notfound" />;
    }

    const clickMe = () => {
        console.log("click");
        navigate("/about");
    };

    return (
        <div>
            <h1>Post</h1>
            <button onClick={clickMe}>Click</button>

            {/* Nested routes */}
            <Routes>
                <Route path="/show" element={<h1>Hello</h1>} />
            </Routes>
        </div>
    );
};

export default Post;
