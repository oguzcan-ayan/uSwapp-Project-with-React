import React from 'react';
import ProductCategories from '../components/ProductCategories';
import MostOfferedProducts from '../components/MostOfferedProducts';
import NewAddedProducts from '../components/NewAddedProducts';
import InfoAboutProject from '../components/InfoAboutProject';

function HomePageLayout() {
    return (
        <>
            <ProductCategories />
            <NewAddedProducts />
            <MostOfferedProducts />
            <InfoAboutProject />
        </>
    )
}

export default HomePageLayout;