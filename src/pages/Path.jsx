import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Netflix from "./Netflix";
import Signup from "./Signup";
function Path() {
return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/netflix" element={<Netflix />} />
        </Routes>
    </BrowserRouter>
    );
}
export default Path;