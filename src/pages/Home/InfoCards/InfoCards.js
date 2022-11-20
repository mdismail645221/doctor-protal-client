import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';
import InfoCard from './InfoCard/InfoCard';

const InfoCards = () => {


    let infoData = [
        {
            id : 1,
            name: "Opening Hours",
            info: "Lorem Ipsum is simply dummy text of the pri",
            img: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id : 2,
            name: "Visit our location",
            info: "Brooklyn, NY 10036, United States",
            img: marker,
            bgColor: 'bg-gradient-to-r from-accent to-accent'
        },
        {
            id : 3,
            name: "Contact us now",
            info: "+000 123 456789",
            img: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                infoData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;