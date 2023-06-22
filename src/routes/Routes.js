import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AbrirChamado from "../pages/AbrirChamado/AbrirChamado";
import Home from "../pages/Home/Home";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<AbrirChamado/>} />
                <Route path="/home" exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;