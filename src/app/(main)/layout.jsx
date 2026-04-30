import FooterPage from '@/components/shered/FooterPage';
import NavbarPage from '@/components/shered/NavbarPage';
import React from 'react';

const MainLayoutPage = ({children}) => {
    return (
        <div>
            <NavbarPage></NavbarPage>
            {children}
            <FooterPage></FooterPage>
        </div>
    );
};

export default MainLayoutPage;