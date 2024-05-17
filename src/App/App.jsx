import React, { useEffect, useState } from 'react';
import '../App/App.scss';
import '../Responsive/Large Laptop-Large Desktop/Desktop.scss';
import '../Responsive/Laptop-Desktop/Laptop.scss';
import '../Responsive/Tablet-Large Tablet/Tablet.scss';
import '../Responsive/Large Mobile-Tablet/LMobile.scss';
import '../Responsive/Mobile/Mobile.scss';
import Header from '../components/Header';
import ProductCategories from '../components/ProductCategories';
import NewAddedProducts from '../components/NewAddedProducts';
import { MenuProvider } from '../Tools/Context/ResponsiveMenuContext';
import MostOfferedProducts from '../components/MostOfferedProducts';
import Footer from '../components/Footer';
import InfoAboutProject from '../components/InfoAboutProject';
import { Helmet } from 'react-helmet';
import LoginAndSignupPage from '../pages/LoginAndSignupPage';
import ProductAddPage from '../pages/ProductAddPage';
import UserProfile from '../pages/UserProfile';
import ErrorPage from '../pages/ErrorPage';

function App() {

  /*  const isLang = localStorage.getItem("lang");
   const defaultLang = isLang ? isLang : navigator.language;
   const [lang, setLang] = useState(defaultLang); */

  /*   useEffect(() => {
      localStorage.setItem("lang", lang);
    }, [lang]) */

  return (
    <>
     {/*  <MenuProvider>
        <Header /> */}
    {/*     <ProductCategories />
        <NewAddedProducts />
        <MostOfferedProducts />
        <InfoAboutProject /> */}
        {/* <ProductAddPage /> */}
        <UserProfile />
     {/*    <Footer />
      </MenuProvider> */}
      {/* <ErrorPage /> */}
      {/* <LoginAndSignupPage /> */}
    </>
  )
}

export default App;
