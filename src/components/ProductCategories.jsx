import React, { useEffect, useState, useRef } from 'react';
import { SlUserFemale } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { PiArmchairBold } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { TbEPassport } from "react-icons/tb";
import { GiStreetLight } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMenu } from '../Tools/Context/ResponsiveMenuContext';

function ProductCategories() {

    const [isMobile, setIsMobile] = useState(false);
    const { isHamburgerButtonOpen } = useMenu();
    const slickRef = useRef(null);

    useEffect(() => {

        const handleResize = () => {

            const innerWidth = window.innerWidth;

            if (innerWidth && innerWidth <= 768) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    const settings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },   
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]

    };

    const sliderStyle = {
        'zIndex': isHamburgerButtonOpen ? '-1' : '10'
    }

    if (isMobile) {
        return (
            <section>
                <div className='slider-container' style={sliderStyle}>
                    <button
                        className='slick-prev-btn'
                        onClick={() => slickRef.current?.slickPrev()}>
                        <IoIosArrowBack />
                    </button>
                    <Slider ref={slickRef} {...settings}>
                        <div>
                            <span className='women'><SlUserFemale /></span>
                            <span>Women</span>
                        </div>
                        <div>
                            <span className='men'><FaRegUser /></span>
                            <span>Men</span>
                        </div>
                        <div>
                            <span className='baby'><FaBabyCarriage /></span>
                            <span>Baby</span>
                        </div>
                        <div>
                            <span className='book-stationery'><FaBookOpen /></span>
                            <span>Book & Stationery</span>
                        </div>
                        <div>
                            <span className='electronic'><AiOutlineLaptop /></span>
                            <span>Electronic</span>
                        </div>
                        <div>
                            <span className='furniture'><PiArmchairBold /><GiStreetLight /></span>
                            <span>Furniture</span>
                        </div>
                        <div>
                            <span className='game-console'><IoGameController /></span>
                            <span>Game & Console</span>
                        </div>
                        <div>
                            <span className='sport-outdoor'><TbEPassport /></span>
                            <span>Sport & Outdoor</span>
                        </div>
                        <div>
                            <span className='auto-parts'><BiSolidCarMechanic /></span>
                            <span>Auto Parts</span>
                        </div>
                    </Slider>
                    <button
                        className='slick-next-btn'
                        onClick={() => slickRef.current?.slickNext()}
                        style={sliderStyle}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </section>
        )
    }

    else {
        return (
            <>
                <section>
                    <div className='product-categories'>
                        <div>
                            <span><SlUserFemale /></span>
                            <span>Women</span>
                        </div>
                        <div>
                            <span><FaRegUser /></span>
                            <span>Men</span>
                        </div>
                        <div>
                            <span><FaBabyCarriage /></span>
                            <span>Baby</span>
                        </div>
                        <div>
                            <span><FaBookOpen /></span>
                            <span>Book & Stationery</span>
                        </div>
                        <div>
                            <span><AiOutlineLaptop /></span>
                            <span>Electronic</span>
                        </div>
                        <div>
                            <span><PiArmchairBold /><GiStreetLight /></span>
                            <span>Furniture</span>
                        </div>
                        <div>
                            <span><IoGameController /></span>
                            <span>Game & Console</span>
                        </div>
                        <div>
                            <span><TbEPassport /></span>
                            <span>Sport & Outdoor</span>
                        </div>
                        <div>
                            <span><BiSolidCarMechanic /></span>
                            <span>Auto Parts</span>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ProductCategories;