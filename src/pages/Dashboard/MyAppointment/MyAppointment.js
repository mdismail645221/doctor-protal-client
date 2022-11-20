import React, {useContext} from 'react';
import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);


    const {data:usersInfo=[]} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt_token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h2 className='text-3xl font-bold'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            usersInfo.map((user, idx)=> 
                            <tr key={idx}>
                                <th>{idx+1}</th>
                                <td>{user?.userName}</td>
                                <td>{user?.treatment}</td>
                                <td>{user?.slot}</td>
                                <td>{user?.appointmentDate}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;