import React, { useRef } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBoxes from './ProductBoxes';
import { CiImageOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMenu } from '../Tools/Context/ResponsiveMenuContext';

function MostOfferedProducts() {

    const productCategoriesTitle = "Most Offered Products";
    const productImg = <CiImageOn />;
    const productName = "Product name";
    const productInfo = "Product information";
    const productBtn = "OFFER NOW";
    const productBtnSymbol = <FaArrowRightLong />;
    const mostOfferedArray = new Array(50).fill().map((_, index) =>
        <ProductBoxes
            key={index}
            productImage={productImg}
            productName={productName}
            productInfo={productInfo}
            productBtn={productBtn}
            productBtnSymbol={productBtnSymbol} />);

    const slickRef = useRef(null);
    const { isHamburgerButtonOpen } = useMenu();

    const settings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]
    };

    const sliderStyle = {
        'zIndex': isHamburgerButtonOpen ? '-1' : '10'
    }

    return (
        <section>
            <div className='products-container'>
                <h1 className='product-categories-title'>{productCategoriesTitle}</h1>
                <div className='slider-container' style={sliderStyle}>
                    <button
                        className='slick-prev-btn'
                        onClick={() => slickRef.current?.slickPrev()}>
                        <FaArrowCircleLeft />
                    </button>
                    <Slider ref={slickRef} {...settings}>
                        {mostOfferedArray}
                    </Slider>
                    <button
                        className='slick-next-btn'
                        style={sliderStyle}
                        onClick={() => slickRef.current?.slickNext()}>
                        <FaArrowCircleRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MostOfferedProducts;