import React from 'react';
import { Outlet } from 'react-router-dom';

function ProductViewLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default ProductViewLayout;