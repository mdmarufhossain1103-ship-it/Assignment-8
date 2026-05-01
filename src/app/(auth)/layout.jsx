import NavbarPage from '@/components/shered/NavbarPage';
import React from 'react';
import { ToastContainer} from 'react-toastify';

const AuthLayoutpage = ({children}) => {
    return (
        <div>
            <NavbarPage></NavbarPage>
            {children}
            <ToastContainer />
        </div>
    );
};

export default AuthLayoutpage;