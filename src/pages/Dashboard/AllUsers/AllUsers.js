import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {



    const {data:usersInfo=[], refetch} = useQuery({
        queryKey: [`users`],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })


    // handleMakeAdmin
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount){
                toast.success('ADMIN USER UPDATED GOOD JOB')
                refetch()
            }
        })

    }


    return (
        <div>
            <h2 className='text-3xl font-bold'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Provider</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            usersInfo.map((user, idx) =>
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-primary'>Admin</button>}</td>
                                    <td><button className='btn btn-denger'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;