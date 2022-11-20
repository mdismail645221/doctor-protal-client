 
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState} from 'react';
import OpenModal from '../../OpenModal/OpenModal';
import SingleAvailableOption from '../SingleAvailableOption/SingleAvailableOption';


const AvaiiableAppointment = ({selectedDate}) => {

    const [treatment, setTreatment]= useState(null)
    const date = format(selectedDate, 'PP');
    const {data:availableOptions=[], refetch} = useQuery({
        queryKey: ['availableOptions', date],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/appoinments?date=${date}`);
            const data = await res.json();
            return data;
        }
    })         


    if(availableOptions.length === 0){
        return <div className='text-center flex items-center justify-center h-[300px] text-3xl'> L<span className='animate-spin w-12  h-12 text-center text-3xl duration-500 ease-linear text-red-600'>o</span>ading...</div>
    }


    return (
        <section className='mb-32 container mx-auto'>
            <p className='text-center text-secondary font-bold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    availableOptions?.map(option => <SingleAvailableOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></SingleAvailableOption>)
                }
            </div>
           { 
             treatment &&
                <OpenModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></OpenModal>
            }
        </section>
    );
};

export default AvaiiableAppointment;