import React, { useEffect, useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import '../App/App.scss';
import '../Responsive/Large Laptop-Large Desktop/Desktop.scss';
import '../Responsive/Laptop-Desktop/Laptop.scss';
import '../Responsive/Tablet-Large Tablet/Tablet.scss';
import '../Responsive/Large Mobile-Tablet/LMobile.scss';
import '../Responsive/Mobile/Mobile.scss';
import Header from '../components/Header';

function App() {

  const isLang = localStorage.getItem("lang");
  const defaultLang = isLang ? isLang : navigator.language;
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang])

  return (
    <>
     {/*  <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage> */}
          <Header />
      {/*   </FormattedMessage>
      </IntlProvider> */}
    </>
  )
}

export default App;
