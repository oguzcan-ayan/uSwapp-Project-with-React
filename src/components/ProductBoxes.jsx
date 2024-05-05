import React from 'react';

function ProductBoxes({ productImage, productName, productInfo, productBtn, productBtnSymbol }) {

    return (
        <>
                <div className='product-container'>
                    {/* <img src={productImage} alt="content not found" /> */}
                    <div>{productImage}</div>
                    <h3>{productName}</h3>
                    <p>{productInfo}</p>
                    <button>{productBtn} {productBtnSymbol}</button>
            </div>
        </>
    )
}

export default ProductBoxes;