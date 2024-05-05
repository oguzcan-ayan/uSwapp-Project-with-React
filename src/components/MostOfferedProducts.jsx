import React, { useRef } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBoxes from './ProductBoxes';
import { CiImageOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

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

    return (
        <section>
            <div className='products-container'>
                <h1 className='product-categories-title'>{productCategoriesTitle}</h1>
                <div className='slider-container'>
                    <button
                        className='slick-prev-btn'
                        onClick={() => slickRef.current?.slickPrev()}>
                        <FaArrowCircleLeft />
                    </button>
                    <Slider ref={slickRef} {...settings}>
                        {mostOfferedArray}
                    </Slider>
                    <button className='slick-next-btn'
                        onClick={() => slickRef.current?.slickNext()}>
                        <FaArrowCircleRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MostOfferedProducts;