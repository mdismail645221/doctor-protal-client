import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import CommonBtn from '../../CommonBtn/CommonBtn';
import appointmentBG from '../../../assets/images/appointment.png';
const MakeApointment = () => {
    return (
        <section className="hero text-white" style={{
            background: `url(${appointmentBG})`
        }}>
            <div className="hero-content flex-col justify-between lg:flex-row">
                <img src={doctor} className="w-full -mt-36 lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h5 className='text-primary font-bold text-xl'>Appointment</h5>
                    <h1 className="text-4xl font-semibold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                      <CommonBtn></CommonBtn>
                </div>
            </div>
        </section>
    );
};

export default MakeApointment;
