import {createBrowserRouter} from 'react-router-dom'
import DashbardLayout from '../layout/DashbardLayout'
import Main from '../layout/Main'
import About from '../pages/About/About'
import Appointment from '../pages/Appointment/Appointment'
import ContactUs from '../pages/ContactUs/ContactUs'
import AddDoctor from '../pages/Dashboard/AddDoctor/AddDoctor'
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers'
import MyAppointment from '../pages/Dashboard/MyAppointment/MyAppointment'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Reviews from '../pages/Reviews/Reviews'
import SignUp from '../pages/SignUp/SignUp'
import AdminPrivateRoute from './AdminPrivateRoute'
import PrivateRoute from './PrivateRoute'





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUND</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/review',
                element: <Reviews></Reviews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbardLayout></DashbardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminPrivateRoute><AllUsers></AllUsers></AdminPrivateRoute>
            },
            {
                path: '/dashboard/add_doctor',
                element: <AdminPrivateRoute><AddDoctor></AddDoctor></AdminPrivateRoute>
            },

        ]
    }
])


export default router;