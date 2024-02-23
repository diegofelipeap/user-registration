import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";

// As rotas também são componentes.

function allRoutes() {


    return (

        <Router>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/usuarios" element={<Users />} />
            </Routes>
        </Router>


    )   


}


export default allRoutes