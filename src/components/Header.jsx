import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch } from "react-icons/io";
import ProjectLogo from './ProjectLogo';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenu } from '../Tools/Context/ResponsiveMenuContext';
import ScrollButton from './ScrollButton';
import { NavLink } from 'react-router-dom';

function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [languages, setLanguages] = useState(false);
    const langboxRef = useRef(null);
    const profileRef = useRef(null);
    const productRef = useRef(null);
    const [themes, setThemes] = useState('light');
    const [lastClickTime, setLastClickTime] = useState(0);
    const { isHamburgerButtonOpen, openResponsiveMenu, closeResponsiveMenu } = useMenu();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isProductButtonOpen, setIsProductButtonOpen] = useState(false);

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
                setIsMobile(true);
                console.log(innerWidth);
            }

            else {
                setIsMobile(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {

            window.removeEventListener('resize', handleResize);
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

    useEffect(() => {

        const handleClickOutsideProfileBox = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideProfileBox);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideProfileBox);
        }
    }, [profileRef])

    useEffect(() => {
        const handleClickOutsideProductBox = (event) => {
            if (productRef.current && !productRef.current.contains(event.target)) {
                setIsProductButtonOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideProductBox);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideProductBox);
        }
    }, [productRef])

    const handleFlagClick = (src) => {
        setSelectedFlag(src);
    }

    const handleChangeLang = () => {
        setLanguages(!languages);
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

    const renderSearchbox = () => {
        return (
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
        )
    }

    const renderLangs = () => {
        return (
            <div className='lang-content' ref={langboxRef}>

                <span className='change-lang' onClick={() => { setLanguages(!languages) }}>
                    <IoIosArrowDown />
                </span>

                {selectedFlag && <img className='viewed-flag' onClick={handleChangeLang} src={selectedFlag} alt="viewed-flag" />}

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
        )
    }

    const renderThemes = () => {
        return (
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
        )
    }

    if (isMobile) {
        return (
            <header>
                <div className='uswapp-header'>

                    <ProjectLogo />

                    {renderSearchbox()}

                    <div className='searchbox-info'>

                    </div>

                    <button
                        className='more-btn'
                        onClick={() => { openResponsiveMenu() }}
                    >
                        <GiHamburgerMenu />
                    </button>
                    <div className={`overlay ${isHamburgerButtonOpen ? 'overlay-visible' : ''}`}></div>
                    <div className={`responsive-menu ${isHamburgerButtonOpen ? 'responsive-menu-close' : ''}`}>

                        <button
                            className='close-hamburger-btn'
                            onClick={() => { closeResponsiveMenu() }}
                        >
                            <MdCancel />
                        </button>

                        <div className='user-contents'>
                            <div className='user-log'>
                                <div className='account'>
                                    {/* <NavLink to="/user-profile"> */}
                                    <span className='user-icon'><LuUser2 /></span>
                                    <span className='username'>username</span>
                                    <span className='user-mail'>user-mail@gmail.com</span>
                                    {/* </NavLink> */}
                                </div>
                            </div>

                            <div className='product-btns'>
                                {/* <NavLink to="/product-add"> */}
                                <button>Free Product ADD+</button>
                                {/* </NavLink> */}
                                {/* <NavLink to="/product-add/product-view"> */}
                                <button>View Your Product</button>
                                {/* </NavLink> */}
                            </div>

                            <div className='notifications'>
                                <span className='notifications-icon'><MdOutlineNotificationsActive /></span>

                            </div>
                            <div className='settings'>
                                <span className='settings-icon'><IoSettingsOutline /></span>

                            </div>

                            {renderThemes()}
                            {renderLangs()}


                        </div>

                        {/* <NavLink to="login-and-logout"> */}
                            <div className='log-out'>
                                <span className='logout-icon'><MdLogout /></span>
                                <span className='logout'>Log-out</span>
                            </div>
                        {/* </NavLink> */}

                    </div>
                    <ScrollButton />
                </div>
            </header>
        )
    }

    else {
        return (
            <header>
                <div className='uswapp-header'>

                    <ProjectLogo />

                    {renderSearchbox()}

                    <div className='searchbox-info'>

                    </div>

                    <div className='lang-and-theme-container'>
                        {renderLangs()}
                        {renderThemes()}
                    </div>

                    <div className='product-btns-container'>
                        <button
                            onClick={() => setIsProductButtonOpen(!isProductButtonOpen)}
                            className='product-btns-wrapper'
                            ref={productRef}
                        >
                            <p>Product...</p>
                        </button>

                        {
                            isProductButtonOpen &&

                            <div className='product-btns'>
                                {/* <NavLink to="/product-add"> */}
                                <button>Free Product ADD+</button>
                                {/* </NavLink> */}
                                {/* <NavLink to="/product-add/product-view"> */}
                                <button>View Your Product</button>
                                {/* </NavLink> */}
                            </div>
                        }
                    </div>

                    <div className='user-contents'>
                        <div className='user-log'>
                            <div className='account'>
                                <span
                                    className='user-icon'
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    ref={profileRef}
                                >
                                    <LuUser2 />
                                </span>
                                {isProfileOpen &&
                                    <div className='open-profile-menu'>
                                        {/* <NavLink to="/user-profile"> */}
                                        <div className='username-and-mail'>
                                            <span className='username'>username</span>
                                            <span className='user-mail'>user-mail@gmail.com</span>
                                        </div>
                                        {/* </NavLink> */}
                                        <div className='user-special-btns'>
                                            <div className='notifications'>
                                                <span className='notifications-icon'><MdOutlineNotificationsActive /></span>
                                            </div>
                                            <div className='settings'>
                                                <span className='settings-icon'><IoSettingsOutline /></span>

                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {/* <NavLink to="login-and-signup"> */}
                    <div className='log-out'>
                        <span className='logout-icon'><MdLogout /></span>
                        <span className='logout'>Log-out</span>
                    </div>
                    {/* </NavLink> */}

                    <ScrollButton />
                </div>
            </header>
        )
    }
}

export default Header;