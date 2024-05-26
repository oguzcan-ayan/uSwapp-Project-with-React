import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App/App.scss';
import '../Responsive/Large Laptop-Large Desktop/Desktop.scss';
import '../Responsive/Laptop-Desktop/Laptop.scss';
import '../Responsive/Tablet-Large Tablet/Tablet.scss';
import '../Responsive/Large Mobile-Tablet/LMobile.scss';
import '../Responsive/Mobile/Mobile.scss';
import { MenuProvider } from '../Tools/Context/ResponsiveMenuContext';
// import { Helmet } from 'react-helmet';
import LoginAndSignupPage from '../pages/LoginAndSignupPage';
import MainLayout from '../Layouts/MainLayout';
// import { KindeProvider } from "@kinde-oss/kinde-auth-react";
function App() {

  /*  const isLang = localStorage.getItem("lang");
   const defaultLang = isLang ? isLang : navigator.language;
   const [lang, setLang] = useState(defaultLang); */

  /*   useEffect(() => {
      localStorage.setItem("lang", lang);
    }, [lang]) */

  return (
    <>

      <MenuProvider>
        <MainLayout />
      </MenuProvider>

      {/* <LoginAndSignupPage /> */}

      {/*       <KindeProvider
        clientId="3b8ecb9afb9445bda7ba2b9f2af53c2c"
        domain="https://uswapp.kinde.com"
        redirectUri="http://localhost:5173"
        logoutUri="http://localhost:5173"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginAndSignupPage />} />
          </Routes>
        </BrowserRouter>
      </KindeProvider> */}
    </>
  )
}

export default App;
