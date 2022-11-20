import React from 'react';

const SingleAvailableOption = ({ option, setTreatment }) => {
    const {name, slots} = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'NOT AVAILABLE'}</p>
                <p>{slots.length > 1 ? slots.length  +  " spaces" : slots.length  + " space"}</p>
                <div className="text-center">
                    <label disabled={slots.length === 0} onClick={()=> setTreatment(option)} htmlFor="my-modal-3" className="btn btn-secondary text-white font-bold">Book Appointment</label>
                    {/* <button className="">Book Appointment</button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleAvailableOption;