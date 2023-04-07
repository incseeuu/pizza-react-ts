import React from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";




function App() {

    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'*'} element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default App;
