import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
// import Favorites from './components/Favorites/Favorites';
import Details from './components/Details/Details';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import Orders from './components/Cart/Orders';
import Map from './components/Map/Map';
import NoMatch from './components/NoMatch';

const Views = () => {
    const location = useLocation();
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />}  />
                <Route path="/cart/orders" element={<Orders />} />
             
                <Route path="/map" element={<Map />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};

export default Views;
