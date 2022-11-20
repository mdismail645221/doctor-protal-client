import React from 'react';
import testLogo from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {


    let testInfo = [
        {
            id : 1,
            name: "Winson Herry",
            info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            address: 'California'
        },
        {
            id : 2,
            name: "Winson Herry",
            info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            address: 'California'
        },
        {
            id : 3,
            name: "Winson Herry",
            info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            address: 'California'
        },
    ]



    return (
        <section  className='my-28'>
            <div className='flex justify-between'>
                <div className='text-ingo'>
                    <h5 className='text-primary font-bold text-xl'>Testimonial</h5>
                    <h1 className="text-4xl font-semibold">What Our Patients Says</h1>
                </div>
                <div className='text-logo'>
                    <img className='w-48 h-32' src={testLogo} alt='img'/>
                </div>
            </div>
            {/* testinfo===> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testInfo.map(test=> <Testimonial
                        key={test.id}
                        test={test}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;