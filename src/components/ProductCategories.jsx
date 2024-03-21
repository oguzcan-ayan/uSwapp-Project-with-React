import React, { useEffect, useState } from 'react';
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCategories() {

    const [isMobile, setIsMobile] = useState(false);

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
        infinite: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    if (isMobile) {
        return (
            <section>
                <div className='slider-container'>
                    <Slider {...settings}>
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
                    </Slider>
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