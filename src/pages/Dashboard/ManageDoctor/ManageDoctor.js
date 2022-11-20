import React, {useState} from 'react';
import { useQuery } from '@tanstack/react-query'
import ConfirmationModal from '../../../shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';
import Loading from '../../../shared/Navbar/Loading/Loading';

const ManageDoctor = () => {

    const [deletedDoctor, setDeletedDortor] = useState(null)



    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`);
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteDoctor = (doctor) => {
        // console.log(doctor)
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
          if(data.deletedCount > 0){
            toast.success('successfully deleted doctor')
            refetch()
          }  
        })
    }


    if(isLoading){
      return  <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-3xl'>Manage Doctor: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>name</th>
                            <th>email</th>
                            <th>specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            doctors.map((doctor, idx) =>
                                <tr key={doctor._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={doctor.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor?.name}</td>
                                    <td>{doctor?.email}</td>
                                    <td>{doctor?.specialty}</td>
                                    <td>
                                    <label onClick={()=> setDeletedDortor(doctor)} htmlFor="confirmedModal" className="btn btn-sm bg-denger">open modal</label>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
           {
            deletedDoctor &&  <ConfirmationModal
            setDeletedDortor={setDeletedDortor}
            title={`Are you sure want to delete?`}
            message = {`If you delete ${deletedDoctor.name} if cannot be`}
            modalData= {deletedDoctor}
            successAction = {handleDeleteDoctor}

        ></ConfirmationModal>
           }
        </div>
    );
};

export default ManageDoctor;