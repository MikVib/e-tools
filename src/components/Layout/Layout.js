import React,{ useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    return (
        <>
            <Header
            client={ref} setHeight={setHeight} height={height}
            />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;