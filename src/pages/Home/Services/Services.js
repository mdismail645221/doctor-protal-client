import React from 'react';
import Service from './Service/Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'


const Services = () => {



    let services = [
        {
            id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            id: 2,
            img: cavity,
            title: "Cavity Filling",
            info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            id: 3,
            img: whitening,
            title: "Teeth Whitening",
            info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
    ]



    return (
        <section className=' py-32'>
            <div className='service-info mb-16 flex flex-col space-y-2'>
                <h5 className='text-primary font-bold text-center text-xl'>OUR SERVICES</h5>
                <h3 className='text-4xl text-center font-[400]'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(singleService => <Service
                        key={singleService.id}
                        singleService={singleService}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;