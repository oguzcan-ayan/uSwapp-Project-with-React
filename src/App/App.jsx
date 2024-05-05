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

function App() {

  /*  const isLang = localStorage.getItem("lang");
   const defaultLang = isLang ? isLang : navigator.language;
   const [lang, setLang] = useState(defaultLang); */

  /*   useEffect(() => {
      localStorage.setItem("lang", lang);
    }, [lang]) */

  return (
    <>
      <div>
        <MenuProvider>
          <Header />
          <ProductCategories />
          <NewAddedProducts />
          <MostOfferedProducts />
          <InfoAboutProject />
          <Footer />
        </MenuProvider>
        <Helmet>
          <meta property='og:title' content='uSwapp'/>
          <meta property='og:description' content='Swap App'/>
          <meta property='og:image' content="https://uswapp.vercel.app/public\assets\images\uswapp-logo.svg"/>
          <meta property='og:url' content='https://uswapp.vercel.app/'/>
          <meta property='og:type' content='website'/>
        </Helmet>
      </div>
    </>
  )
}

export default App;
