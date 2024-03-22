import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => {

    const menuContext = useContext(MenuContext);

    if (menuContext === undefined) {
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return menuContext;
}

export const MenuProvider = ({ children }) => {

    const [isHamburgerButtonOpen, setIsHamburgerButtonOpen] = useState(false);

    const openResponsiveMenu = () => setIsHamburgerButtonOpen(true);
    const closeResponsiveMenu = () => setIsHamburgerButtonOpen(false);

    return (
        <>
            <MenuContext.Provider value={{ isHamburgerButtonOpen, openResponsiveMenu, closeResponsiveMenu }}>
                {children}
            </MenuContext.Provider>

        </>
    )
}

export default MenuContext;