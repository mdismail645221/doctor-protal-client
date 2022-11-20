import React, {useState} from 'react';
import AppointBanner from './AppointBanner/AppointBanner';
import AvaiiableAppointment from './AvaiiableAppointment/AvaiiableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointBanner>
            <AvaiiableAppointment
                 selectedDate={selectedDate}
            ></AvaiiableAppointment>
        </div>
    );
};

export default Appointment;