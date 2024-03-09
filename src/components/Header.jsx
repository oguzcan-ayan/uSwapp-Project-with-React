import React, { useState, useEffect, useRef } from 'react';

function Header() {

    useEffect(() => {
        const handleResize = () => {

            const innerWidth = window.innerWidth;
            if(innerWidth && innerWidth <= 768){
                console.log(innerWidth);
            }

            window.addEventListener('resize', handleResize);
        }

    })

    return (
        <>


        </>
    )
}

export default Header;