import React, {useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useAdmin } from '../pages/hooks/useAdmin';
import Navbar from '../shared/Navbar/Navbar';

const DashbardLayout = () => {


    const {user}= useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {isAdmin && <>
                            <li><Link to='/dashboard/allUsers'>All users</Link></li>
                            <li><Link to='/dashboard/add_doctor'>Add Doctor</Link></li>
                        </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbardLayout;