import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="hero">
            <div className="hero-content flex-col items-center justify-between lg:flex-row-reverse p-36">
                <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='chair logo' />
                <div>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;