import React from 'react';

const Testimonial = ({ test }) => {
    const { img, name, info, address } = test;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{info}</p>
                <div className="card-actions flex items-center space-x-4 mt-9">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='profile' />
                        </div>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;