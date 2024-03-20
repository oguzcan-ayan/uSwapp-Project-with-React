import React, { useEffect, useState } from 'react';
import '../App/App.scss';
import '../Responsive/Large Laptop-Large Desktop/Desktop.scss';
import '../Responsive/Laptop-Desktop/Laptop.scss';
import '../Responsive/Tablet-Large Tablet/Tablet.scss';
import '../Responsive/Large Mobile-Tablet/LMobile.scss';
import '../Responsive/Mobile/Mobile.scss';
import Header from '../components/Header';
import ProductCategories from '../components/ProductCategories';

function App() {

 /*  const isLang = localStorage.getItem("lang");
  const defaultLang = isLang ? isLang : navigator.language;
  const [lang, setLang] = useState(defaultLang); */

/*   useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]) */

  return (
    <>
          <Header /> 
          <ProductCategories />
    </>
  )
}

export default App;
