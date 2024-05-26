import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function MainLayout() {
    return (
        <>
            <Helmet>
                <title>uSwapp</title>
                <meta name='description' content='homepage'/>
            </Helmet>

            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;