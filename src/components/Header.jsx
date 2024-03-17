import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch } from "react-icons/io";
import ProjectLogo from './ProjectLogo';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [languages, setLanguages] = useState(false);
    const langboxRef = useRef(null);
    const [themes, setThemes] = useState('light');
    const [lastClickTime, setLastClickTime] = useState(0);

    const langs = [
        {
            langName: 'English',
            abbreviation: 'EN',
            src: "assets/images/england-flag.svg",
            alt: "england-flag",
            value: 'ENG'
        },
        {
            langName: 'Turkish',
            abbreviation: 'TR',
            src: "assets/images/turkey-flag.svg",
            alt: "turkey-flag",
            value: 'TUR'
        }
    ]

    const [selectedFlag, setSelectedFlag] = useState(langs[0].src);

    useEffect(() => {
        const handleResize = () => {

            const innerWidth = window.innerWidth;
            if (innerWidth && innerWidth <= 768) {
                setIsTabletMobile(true);
                console.log(innerWidth);
            }

            window.addEventListener("resize", handleResize);
        }

    }, [])

    useEffect(() => {
        const handleClickOutsideItems = e => {

            if (!langboxRef.current.contains(e.target)) {
                setLanguages(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideItems);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideItems);
        }

    }, [langboxRef])

    const handleFlagClick = (src) => {
        setSelectedFlag(src);
    }

    const toggleTheme = () => {
        const now = Date.now();
        if (now - lastClickTime < 300) {
            return;
        }
        setLastClickTime(now);

        const newTheme = themes === 'light' ? 'dark' : 'light';
        setThemes(newTheme);
        console.log("Theme changed to : ", newTheme);
    }

    return (
        <>
            <header>
                <div className='uswapp-header'>

                    <ProjectLogo />

                    <div className={`searchbox ${isFocused ? 'active' : ''}`}>
                        <span>
                            <IoMdSearch />
                        </span>
                        <input
                            type="search"
                            placeholder='Search a product...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => { setIsFocused(true) }}
                            onBlur={() => { setIsFocused(false) }}
                        />
                    </div>

                    <div className='searchbox-info'>

                    </div>

                    <div className='lang-content' ref={langboxRef}>

                        <span className='change-lang' onClick={() => { setLanguages(!languages) }}>
                            <IoIosArrowDown />
                        </span>

                        {selectedFlag && <img className='viewed-flag' src={selectedFlag} alt="viewed-flag" />}

                        {languages && (
                            <div>
                                {langs.map((lang, index) => (

                                    <span key={index} value={lang.value} onClick={() => handleFlagClick(lang.src)}>
                                        <img src={lang.src} alt={lang.alt} className={selectedFlag === lang.src ? 'selected-flag' : 'unselected-flag'} />
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className='theme-content'>
                        <span onClick={toggleTheme} className='change-theme'>
                            <label className="theme-label">
                                <span className="sun">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"><g fill="#ffd43b">
                                            <circle r="5" cy="12" cx="12"></circle>
                                            <path
                                                d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0
                                                2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1
                                                1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41
                                                1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1
                                                -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41
                                                1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1
                                                -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1
                                                -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1
                                                1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1
                                                1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 
                                                12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1
                                                1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1
                                                -.71.24z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                                <span className="moon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path
                                            d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 
                                            224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s
                                            -10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5
                                            -78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 
                                            7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
                                        </path>
                                    </svg>
                                </span>
                                <input type="checkbox" className="checked-input" />
                                <span className="theme-slider"></span>
                            </label>
                        </span>
                    </div>
                    <div className='user-contents'>
                        <div className='notifications'>
                            <span className='notifications-icon'><MdOutlineNotificationsActive /></span>
                            <span className='notifications-text'>Notifications</span>
                        </div>
                        <div className='settings'>
                            <span className='settings-icon'><IoSettingsOutline /></span>
                            <span className='settings-text'>Settings</span>
                        </div>
                        <div className='user-log'>
                            <div className='account'>
                                <span className='user-icon'><LuUser2 /></span>
                                <span className='username'>username</span>
                                <span className='user-mail'>user-mail@gmail.com</span>
                            </div>
                        </div>
                        <div className='log-out'>
                            <span className='logout-icon'><MdLogout /></span>
                            <span className='logout'>Log-out</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;