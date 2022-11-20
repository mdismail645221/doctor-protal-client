import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import  {toast} from 'react-hot-toast'

const OpenModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const {user} = useContext(AuthContext)
    const {slots, name} = treatment;
    const date = format(selectedDate, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        // console.log(date, slot, name, email, phone)
        const booking = {
            appointmentDate: date,
            slot,
            treatment : name,
            userName : userName,
            email,
            phone
        }
        // console.log(booking)
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                console.log(data)
                setTreatment(null)
                toast.success('Confirm your Booking',{duration: 3000})
                // toast.success('Confirm your Booking',{duration: 3000})
                // toast('successfully confirmed')
                refetch()
            }else{
                // toast(data.acknowledged, data.message)
                toast.error(data.message,{duration: 3000})
            }
        })
        .catch((err)=> {
            console.log(err)
        })

    }


    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment?.name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" required />
                        <select name='slot' className="select select-bordered w-full">
                            {
                               slots.map((slot,idx)=> <option
                                key={idx}
                                value={slot}
                               >{slot}</option>)
                            }
                        </select>
                        <input defaultValue={user?.displayName} readOnly type="text" name='name' placeholder="your name" className="input input-bordered w-full" required />
                        <input defaultValue={user?.email} readOnly type="email" name='email' placeholder="your email" className="input input-bordered w-full" required />
                        <input type="number" name='phone' placeholder="your phone" className="input input-bordered w-full" required />
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OpenModal;