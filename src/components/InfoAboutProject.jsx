import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useMenu } from '../Tools/Context/ResponsiveMenuContext';

function InfoAboutProject() {

    const { isHamburgerButtonOpen } = useMenu();

    const buttonStyle = {
        'zIndex': isHamburgerButtonOpen ? '-1' : '10'
      }

    return (
        <section>
            <div className='info-container'>
                <p className='short-info-about-project'>
                    It is a platform where people can swap
                    their products that they do not use with products they
                    want. The main purpose of this platform is to prevent
                    unused products from going to waste and to avoid
                    environmental pollution and wastage by ensuring their
                    reuse.
                </p>
                <p className='short-info-about-aim'>
                    Our main target is to minimize the use of
                    money and develop a platform that complies with the swap
                    only policy.
                </p>
                <button style={buttonStyle}>
                    More...
                    <span>
                        <FaArrowRight />
                    </span>
                </button>
            </div>
        </section>
    )
}

export default InfoAboutProject;