import React, { useState, useEffect, useRef } from 'react';
import uSwappLogo from './uSwappLogo';
import { IoMdSearch } from "react-icons/io";

function Header() {

    const [isTabletMobile, setIsTabletMobile] = useState(false);
    const [search, setSearch] = useState("");

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

    return (
        <>
            <header>
                <div className='uswapp-header'>

                    <uSwappLogo />

                    <div className='searchbox'>
                        <span>
                            <IoMdSearch />
                        </span>
                        <input
                            type="search"
                            placeholder='Search a product...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className='searchbox-info'>

                    </div>

                    <div className='lang-content'>
                        <button>EN</button>
                        <button>TR</button>
                    </div>
                    <div className='theme-content'>
                        <button>Light</button>
                        <button>Dark</button>
                    </div>
                    <div className='user-contents'>
                        <div className='notifications'>
                            <span>icon</span>
                            <span>Notifications</span>
                        </div>
                        <div className='settings'>
                            <span>icon</span>
                            <span>Settings</span>
                        </div>
                        <div className='user-log'>
                            <div className='account'>
                                <span>icon</span>
                                <span>username</span>
                                <span>user-mail</span>
                            </div>
                            <div className='log-out'>
                                <span>icon</span>
                                <span>logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;