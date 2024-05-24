import React from 'react';
import { IoArrowUp } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';

function ScrollButton() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <a className='scroll-to-top-btn' onClick={scrollToTop}><IoArrowUp className='arrow-up' /></a>
        </>
    )
}

export default ScrollButton;