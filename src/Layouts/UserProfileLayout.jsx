import React from 'react';
import { Outlet } from 'react-router-dom';

function UserProfileLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default UserProfileLayout;