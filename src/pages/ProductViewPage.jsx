import React, { useState } from 'react';
import { FaImage, FaPlus } from "react-icons/fa6";
import { useMenu } from '../Tools/Context/ResponsiveMenuContext';
import { Helmet } from 'react-helmet';

function ProductViewPage() {

    const [showAllImages, setShowAllImages] = useState(false);

    const toggleImages = () => {
        setShowAllImages(!showAllImages);
    }
    const productViewImages = new Array(10).fill().map((_, index) => {
        return <span key={index}><FaImage /></span>
    })

    const { isHamburgerButtonOpen } = useMenu();

    const imageStyle = {
        'zIndex': isHamburgerButtonOpen ? '-1' : '10'
    }

    return (
        <>

            <Helmet>
                <title>Product View</title>
                <meta name='description' content='product-view-page' />
            </Helmet>

            <section>
                <div className='product-view-container'>
                    <h2 className='product-view-title'>Product View</h2>
                    <div className='product-view'>
                        <div className='product-view-images' style={imageStyle}>
                            {productViewImages.slice(0, 3)}
                            {!showAllImages && <span className='view-more-plus-icon'><FaPlus /></span>}
                            {!showAllImages &&
                                <span className='product-view-images-more' onClick={toggleImages}>View More...</span>}
                            {showAllImages && productViewImages.slice(3)}
                        </div>
                        <div className='product-view-info'>
                            <div>
                                <span>Product Category : </span>
                                <span>Furniture</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Brand : </span>
                                <span>IKEA</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Name : </span>
                                <span>Chair</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Production Year : </span>
                                <span>2018</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Status : </span>
                                <span>Good</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Description : </span>
                                <span>I bought this product in 2018, I used it very little, it is in very good condition.</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Delivery Status : </span>
                                <span>Hand Delivery</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Location : </span>
                                <span>New York/NYC, United States</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Product Assumption Price : </span>
                                <span>1000 TL</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Swap Request : </span>
                                <span>Dinner Table</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Contact Number : </span>
                                <span>+123 4567 890</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductViewPage;