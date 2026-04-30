import React from 'react';
import { ToastContainer} from 'react-toastify';

const AuthLayoutpage = ({children}) => {
    return (
        <div>
            {children}
            <ToastContainer />
        </div>
    );
};

export default AuthLayoutpage;