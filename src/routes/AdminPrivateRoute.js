import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useAdmin } from '../pages/hooks/useAdmin';

const AdminPrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div>Loading.....</div>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminPrivateRoute;