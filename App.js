import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import AddJob from "./AddJob"; // Import the new page
import Apply from "./Apply";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-job" element={<AddJob />} /> {/* New Route */}
                <Route path="/apply/:jobId" element={<Apply />} />
            </Routes>
        </Router>
    );
};

export default App;
