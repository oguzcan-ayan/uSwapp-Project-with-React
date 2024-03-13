import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch } from "react-icons/io";
import ProjectLogo from './ProjectLogo';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";

function Header() {

    const [isTabletMobile, setIsTabletMobile] = useState(false);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [langs, setLangs] = useState(false);
    const [themes, setThemes] = useState(false);
    const ref = useRef(null);

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
        const handleClickOutsideLangBox = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setLangs(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideLangBox);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideLangBox);
        }

    }, [ref])

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
                            onFocus={() => {setIsFocused(true)}}
                            onBlur={() => {setIsFocused(false)}}
                        />
                    </div>

                    <div className='searchbox-info'>

                    </div>

                    <div className='lang-content'>
                        <span onClick={() => {setLangs(!langs)}}>
                            {langs}
                            <IoIosArrowDown />
                        </span>
                        {langs ? <button value="TR">TR</button> : <button value="EN">EN</button>}
                    </div>
                    <div className='theme-content'>
                        <span onClick={() => {setThemes(!themes)}}>
                            
                        </span>
                    </div>
                    <div className='user-contents'>
                        <div className='notifications'>
                            <span><MdOutlineNotificationsActive /></span>
                            <span>Notifications</span>
                        </div>
                        <div className='settings'>
                            <span><IoSettingsOutline /></span>
                            <span>Settings</span>
                        </div>
                        <div className='user-log'>
                            <div className='account'>
                                <span><LuUser2 /></span>
                                <span>username</span>
                                <span>user-mail</span>
                            </div>
                        </div>
                        <div className='log-out'>
                            <span><MdLogout /></span>
                            <span>logout</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;