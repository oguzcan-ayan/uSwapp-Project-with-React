import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCamera } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function ProductAddPage() {

    const fileInputRef = useRef(null);
    const [productImage, setProductImage] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                setProductImage(this.result);
            })

            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <Helmet>
                <title>Product Add</title>
                <meta name='description' content='product-add-page' />
            </Helmet>

            <section>
                <div className='product-add-container'>
                    <h2 className='product-add-title'>Product Add</h2>
                    <div className='product'>
                        <div>
                            <label htmlFor="product-name">Product Name</label>
                            <input id='product-name' type="text" className='product-name' required placeholder='Chair' />
                        </div>
                        <div>
                            <label htmlFor="product-brand">Product Brand</label>
                            <input id='product-brand' type="text" className='product-brand' required placeholder='IKEA' />

                        </div>
                        <div>
                            <label htmlFor="production-year">Production Year</label>
                            <input id='production-year' type="number" className='production-year' placeholder='2015' required />
                        </div>
                        <div>
                            <label htmlFor="product-location">Product Location</label>
                            <input id='product-location' type="text" className='product-location' required placeholder='Istanbul' />
                        </div>
                        <div>
                            <label htmlFor="product-assumption-price">Production Assumption Price</label>
                            <input id='product-assumption-price' type="number" className='product-assumption-price' placeholder='1000 (only Turkish Lira)' />
                        </div>
                        <div>
                            <label htmlFor="contact-number">Contact Number</label>
                            <input id='contact-number' type="tel" className='contact-number' placeholder='05XX XXX XX XX' />
                        </div>
                        <div>
                            <label htmlFor="product-delivery-status">Product Delivery Status</label>
                            <select id="product-delivery-status">
                                <option value="default-delivery">Select a Delivery Type...</option>
                                <option value="hand-delivery">Hand Delivery</option>
                                <option value="delivery-by-cargo">Delivery by Cargo</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="product-category">Product Category</label>
                            <select id="product-category" className='product-category'>
                                <option value="default-category">Select a Category...</option>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="baby">Baby</option>
                                <option value="book&stationery">Book & Stationery</option>
                                <option value="electronic">Electronic</option>
                                <option value="furniture">Furniture</option>
                                <option value="game&console">Game & Console</option>
                                <option value="sport&outdoor">Sport & Outdoor</option>
                                <option value="auto-parts">Auto Parts</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="product-status">Product Status</label>
                            <select id="product-status">
                                <option value="default-status">Select a Product Status...</option>
                                <option value="zero-hand">Zero Hand</option>
                                <option value="second-hand">Good</option>
                                <option value="second-hand">Bad</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="product-description">Product Description</label>
                            <textarea id="product-description" rows={5} cols={35} maxLength={350} minLength={50} placeholder='Description of Product...'></textarea>
                        </div>
                        <div>
                            <label htmlFor="swap-request">Swap Request</label>
                            <input id='swap-request' type="text" className='swap-request' placeholder='Table' />
                        </div>
                    </div>
                    <div className='add'>
                        <button className='add-photo-btn' onClick={handleButtonClick}>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept='image/*'
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            Add Photo
                            <span className='camera-icon'><FaCamera /></span>
                        </button>
                        <button className='add-product-btn'>
                            ADD
                            <span className='add-icon'><FaPlus /></span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductAddPage;